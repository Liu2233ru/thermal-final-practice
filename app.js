(() => {
  "use strict";

  const engine = window.HeatExam;
  const view = document.getElementById("view");
  const headerState = document.getElementById("header-state");
  const siteHeader = headerState.closest("header");
  const storageWarning = document.getElementById("storage-warning");
  const backupInput = document.getElementById("backup-input");
  const dialog = document.getElementById("confirm-dialog");
  const imageDialog = document.getElementById("image-dialog");
  const letter = (index) => String.fromCharCode(65 + index);
  const labels = {
    correct: "全对",
    partial: "部分得分",
    incorrect: "答错",
    unanswered: "未答",
  };
  const typeLabel = (type) => type === "multiple" ? "多选" : "单选";
  const dateFormat = new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short" });
  const examLimitSeconds = 100 * 60;

  let bank;
  try {
    bank = engine.validateBank(window.HEAT_BANK || []);
  } catch (error) {
    console.error(error);
    view.innerHTML = '<p class="notice error" role="alert">题库加载失败，请重新打开网页。</p>';
    return;
  }

  const byId = new Map(bank.map((question) => [question.id, question]));
  let progress = { answeredIds: [], attempts: [], draft: null };
  let storage;
  let skipAnswered = false;
  let screen = "setup";
  let currentExam = [];
  let position = 0;
  let result = null;
  let backupMessage = null;
  let pendingConfirmation = null;
  let timerInterval = null;

  function showStorageWarning(message) {
    storageWarning.textContent = message;
    storageWarning.hidden = false;
  }

  try {
    storage = window.localStorage;
    progress = engine.loadProgress(storage);
  } catch (error) {
    console.error(error);
    storage = null;
    showStorageWarning("无法读取本地记录。本次仍可做题，关页前可回首页导出记录。");
  }

  function persist() {
    if (!storage) return;
    try {
      refreshProgress();
      engine.saveProgress(storage, progress);
      storageWarning.hidden = true;
    } catch (error) {
      console.error(error);
      showStorageWarning("本地记录保存失败。本次仍可做题，关页前可回首页导出记录。");
    }
  }

  function refreshProgress() {
    if (!storage) return;
    const latest = engine.loadProgress(storage);
    progress = { ...engine.mergeProgress(progress, latest), draft: progress.draft };
  }

  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }

  function appendMath(node, text) {
    if (window.HeatMath?.append) window.HeatMath.append(node, text);
    else node.append(document.createTextNode(text));
  }

  function elapsedExamSeconds() {
    const start = Date.parse(progress.draft.startedAt);
    return Number.isFinite(start) ? Math.max(0, Math.floor((Date.now() - start) / 1000)) : 0;
  }

  function formatClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) % 60;
    return [hours, minutes, seconds % 60].map((part) => String(part).padStart(2, "0")).join(":");
  }

  function formatOvertime(seconds) {
    return `已超时 ${Math.floor(seconds / 60)} 分 ${String(seconds % 60).padStart(2, "0")} 秒`;
  }

  function updateExamTimer() {
    const remaining = examLimitSeconds - elapsedExamSeconds();
    const overdue = remaining <= 0;
    const display = overdue ? formatOvertime(-remaining) : `剩余 ${formatClock(remaining)}`;
    if (headerState.textContent !== display) headerState.textContent = display;
    headerState.classList.toggle("overdue", overdue);
  }

  function startExamTimer() {
    if (timerInterval === null) {
      siteHeader.classList.add("exam-active");
      headerState.classList.add("exam-clock");
      headerState.setAttribute("role", "timer");
      timerInterval = window.setInterval(updateExamTimer, 1000);
    }
    updateExamTimer();
  }

  function stopExamTimer(stateLabel) {
    if (timerInterval !== null) {
      window.clearInterval(timerInterval);
      timerInterval = null;
    }
    siteHeader.classList.remove("exam-active");
    headerState.classList.remove("exam-clock", "overdue");
    headerState.removeAttribute("role");
    headerState.textContent = stateLabel;
  }

  function button(content, style, callback) {
    const node = element("button", "button " + style, content);
    node.type = "button";
    node.addEventListener("click", callback);
    return node;
  }

  function notice(message, tone = "warning") {
    const node = document.getElementById("setup-notice");
    node.textContent = message || "";
    node.className = "notice setup-notice " + tone;
    node.hidden = !message;
  }

  function availableIds() {
    return skipAnswered ? progress.answeredIds : [];
  }

  function showAvailability() {
    const quotas = engine.availability(bank, availableIds());
    const quotaRows = document.getElementById("quota-rows");
    quotaRows.replaceChildren();
    const shortages = [];
    for (const { type, points, available, required } of quotas) {
      const typeAndPoints = `${points} 分${typeLabel(type)}`;
      const row = element("tr");
      row.append(
        element("td", "", typeAndPoints),
        element("td", "", required),
        element("td", available < required ? "short" : "", available)
      );
      if (available < required) shortages.push(`${typeAndPoints}缺 ${required - available} 道`);
      quotaRows.append(row);
    }
    document.getElementById("start-exam").disabled = shortages.length > 0;
    if (shortages.length) {
      const next = skipAnswered ? "。关闭「跳过做过的题」可以重新使用已答过的题。" : "，当前题库暂时无法组出完整试卷。";
      notice(shortages.join("，") + next);
    } else {
      notice("");
    }
  }

  function renderHistory() {
    const completed = new Set(progress.answeredIds.filter((id) => byId.has(id))).size;
    document.getElementById("history-count").textContent = `已答 ${completed} 题`;
    const holder = document.getElementById("history-items");
    holder.replaceChildren();
    if (!progress.attempts.length) {
      holder.append(element("p", "history-empty", "交卷后，这里会显示成绩。"));
      return;
    }
    const list = element("ol", "history-list");
    for (const entry of progress.attempts.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)) {
      const item = element("li");
      const date = new Date(entry.date);
      const label = Number.isNaN(date.getTime()) ? "模拟考试" : dateFormat.format(date);
      item.append(element("span", "", label), element("strong", "", `${entry.score} / 100`));
      list.append(item);
    }
    holder.append(list);
  }

  function showSetup(focus = false) {
    screen = "setup";
    stopExamTimer("模拟考试");
    view.innerHTML = `
      <section class="hero" aria-labelledby="setup-heading">
        <div>
          <h1 id="setup-heading" tabindex="-1">热学期末模拟</h1>
          <p>按 2025–2026 热学 A 卷结构组卷 · 单选与多选</p>
        </div>
        <dl class="hero-stats">
          <div class="hero-stat"><dt>计分题数</dt><dd>60</dd></div>
          <div class="hero-stat"><dt>满分</dt><dd>100</dd></div>
        </dl>
      </section>
      <div class="columns setup-columns">
        <section class="panel" aria-labelledby="start-heading">
          <h2 id="start-heading">开始模拟考试</h2>
          <p class="panel-copy">每套限时 100 分钟，超时后仍可作答。交卷后查看得分和正确答案。</p>
          <label class="setting" for="skip-answered">
            <span><strong>跳过做过的题</strong><small>已交卷且作答过的题会从本次抽题中排除。</small></span>
            <input class="switch" type="checkbox" id="skip-answered" role="switch">
          </label>
          <table class="quotas">
            <thead><tr><th scope="col">题型与分值</th><th scope="col">每卷所需</th><th scope="col">可抽题数</th></tr></thead>
            <tbody id="quota-rows"></tbody>
          </table>
          <p class="notice setup-notice" id="setup-notice" role="status" hidden></p>
          <div class="button-row setup-actions" id="setup-actions"></div>
        </section>
        <aside class="panel" aria-labelledby="history-heading">
          <div class="panel-heading"><h2 id="history-heading">答题记录</h2><span class="count" id="history-count"></span></div>
          <p class="panel-copy">记录保存在这个浏览器。换电脑时，可以导出再导入。</p>
          <div id="history-items"></div>
          <div class="button-row backup-actions" id="backup-actions"></div>
          <p class="notice setup-notice" id="backup-notice" role="status" hidden></p>
        </aside>
      </div>`;
    const toggle = document.getElementById("skip-answered");
    toggle.checked = skipAnswered;
    toggle.addEventListener("change", () => {
      skipAnswered = toggle.checked;
      showAvailability();
    });
    const actions = document.getElementById("setup-actions");
    const start = button("随机组卷", progress.draft ? "secondary" : "primary", begin);
    start.id = "start-exam";
    if (progress.draft) actions.append(button("继续上次作答", "primary", resume));
    actions.append(start);
    const backup = document.getElementById("backup-actions");
    backup.append(
      button("导出记录", "secondary compact", exportBackup),
      button("导入记录", "secondary compact", () => backupInput.click())
    );
    renderHistory();
    showAvailability();
    showBackupNotice();
    if (focus) document.getElementById("setup-heading").focus();
  }

  function showBackupNotice() {
    const node = document.getElementById("backup-notice");
    if (!node) return;
    node.textContent = backupMessage?.text || "";
    node.className = "notice setup-notice " + (backupMessage?.tone || "");
    node.hidden = !backupMessage;
  }

  function begin() {
    const startNewExam = () => {
      try {
        refreshProgress();
      } catch (error) {
        console.error(error);
        showStorageWarning("无法读取最新的本地记录，本次将使用当前已载入的答题记录。");
      }
      let nextExam;
      try {
        nextExam = engine.makeExam(bank, availableIds());
      } catch (error) {
        console.error(error);
        renderHistory();
        showAvailability();
        return;
      }
      progress.draft = {
        questionIds: nextExam.map((question) => question.id),
        answers: {},
        position: 0,
        startedAt: new Date().toISOString(),
      };
      currentExam = nextExam;
      position = 0;
      result = null;
      backupMessage = null;
      screen = "exam";
      persist();
      renderExam(true);
    };
    if (progress.draft) {
      confirmAction("开始新的一套？", "开始新卷会覆盖当前尚未交卷的作答。", "开始新卷", startNewExam);
    } else {
      startNewExam();
    }
  }

  function resume() {
    const draft = progress.draft;
    const selected = draft.questionIds.map((id) => byId.get(id));
    if (selected.length !== 60 || selected.some((question) => !question)) {
      notice("题库已更新，这份暂存试卷无法继续。可以重新组卷。");
      return;
    }
    currentExam = selected;
    position = Math.min(selected.length - 1, Math.max(0, draft.position));
    result = null;
    screen = "exam";
    backupMessage = null;
    renderExam(true);
  }

  function confirmAction(title, detail, action, callback) {
    document.getElementById("dialog-title").textContent = title;
    document.getElementById("dialog-detail").textContent = detail;
    document.getElementById("dialog-confirm").textContent = action;
    pendingConfirmation = callback;
    dialog.returnValue = "";
    dialog.showModal();
  }

  dialog.addEventListener("close", () => {
    const callback = pendingConfirmation;
    pendingConfirmation = null;
    if (dialog.returnValue === "confirm" && callback) callback();
  });

  function selectedOptions(question) {
    if (screen === "result") return result.results[position].selected;
    const selected = progress.draft.answers[question.id];
    return Array.isArray(selected) ? selected : [];
  }

  function answeredCount() {
    return currentExam.filter((question) => progress.draft.answers[question.id]?.length > 0).length;
  }

  function go(index) {
    if (index < 0 || index >= currentExam.length || index === position) return;
    position = index;
    if (screen === "exam") {
      progress.draft.position = index;
      persist();
    }
    renderExam(true);
  }

  function saveSelection(question, group) {
    const checked = Array.from(group.querySelectorAll("input:checked"), (input) => Number(input.value));
    if (checked.length) {
      progress.draft.answers[question.id] = checked;
    } else {
      delete progress.draft.answers[question.id];
    }
    persist();
    updateAnswerCard();
  }

  function buildOptions(question, review) {
    const group = element(review ? "div" : "fieldset", "option-list");
    group.setAttribute("aria-labelledby", question.stem.trim() ? "question-heading" : "question-number");
    const selected = selectedOptions(question);
    const correct = review ? result.results[position].correct : [];
    question.options.forEach((text, index) => {
      const entry = element(review ? "div" : "label", review ? "option review" : "option");
      const optionLetter = element("span", "option-letter", letter(index));
      const optionText = element("span", "option-text");
      appendMath(optionText, text);
      const imageSource = question.optionImages?.[index];
      if (imageSource) {
        const img = element("img", "option-image");
        img.src = imageSource;
        img.alt = `选项 ${letter(index)} 的公式或示意图`;
        optionText.append(img);
      }
      if (!review) {
        const input = element("input");
        input.name = "exam-answer";
        input.type = question.type === "multiple" ? "checkbox" : "radio";
        input.value = index;
        input.checked = selected.includes(index);
        input.addEventListener("change", () => saveSelection(question, group));
        entry.append(input, optionLetter, optionText);
      } else {
        let feedback = "";
        if (correct.includes(index)) {
          entry.classList.add("correct");
          feedback = selected.includes(index) ? "正确 · 已选" : "正确选项";
        } else if (selected.includes(index)) {
          entry.classList.add("incorrect");
          feedback = "选错";
        }
        entry.append(optionLetter, optionText, element("span", "option-feedback", feedback));
      }
      group.append(entry);
    });
    return group;
  }

  function buildReference(text) {
    const details = element("details", "formula-reference");
    const content = element("div", "formula-reference-body");
    appendMath(content, text);
    details.append(element("summary", "", "参考公式（不计分）"), content);
    return details;
  }

  function showImages(question) {
    document.getElementById("image-title").textContent = `第 ${position + 1} 题的大图`;
    const content = document.getElementById("image-dialog-content");
    content.replaceChildren();
    const sources = [
      ["题干", question.image],
      ...(question.optionImages || []).map((source, index) => [`选项 ${letter(index)}`, source]),
    ];
    for (const [caption, source] of sources) {
      if (!source) continue;
      const figure = element("figure");
      const image = element("img");
      image.src = source;
      image.alt = caption + "原图";
      figure.append(element("figcaption", "", caption), image);
      content.append(figure);
    }
    imageDialog.showModal();
    imageDialog.scrollTop = 0;
  }

  function updateAnswerCard() {
    const review = screen === "result";
    if (!review) {
      const count = answeredCount();
      document.getElementById("progress-count").textContent = `已答 ${count} / ${currentExam.length} 题`;
      document.getElementById("exam-progress").value = count;
    }
    const grid = document.getElementById("question-grid");
    currentExam.forEach((question, index) => {
      const node = grid.children[index];
      const status = review ? result.results[index].status : progress.draft.answers[question.id]?.length ? "answered" : "";
      node.className = status ? "question-jump " + status : "question-jump";
      node.setAttribute("aria-label", `第 ${index + 1} 题，${review ? labels[status] : status ? "已答" : "未答"}`);
      if (index === position) node.setAttribute("aria-current", "true");
    });
  }

  function renderExam(focus = false) {
    const review = screen === "result";
    if (review) stopExamTimer("交卷结果");
    else startExamTimer();
    view.innerHTML = `
      <div id="result-summary"></div>
      <div class="columns">
        <section class="panel question-panel" aria-labelledby="question-heading">
          <div class="question-header">
            <p class="question-number" id="question-number" tabindex="-1"></p>
            <div class="chips" id="question-chips"></div>
          </div>
          <h1 class="question-stem" id="question-heading" tabindex="-1"></h1>
          <div id="question-content"></div>
          <div class="question-actions" id="question-actions"></div>
        </section>
        <aside class="panel answer-panel" aria-labelledby="answer-card-heading">
          <div class="panel-heading">
            <h2 id="answer-card-heading">${review ? "作答结果" : "答题卡"}</h2>
            <span id="progress-count" class="progress-label" aria-live="polite"></span>
          </div>
          <progress id="exam-progress" aria-label="作答进度" value="0" max="60" ${review ? "hidden" : ""}></progress>
          ${review ? '<p class="panel-copy">点击题号查看得分和答案。</p>' : ""}
          <nav class="question-grid" id="question-grid" aria-label="跳到指定题目"></nav>
          <div class="button-row answer-actions" id="answer-actions"></div>
        </aside>
      </div>`;

    const question = currentExam[position];
    const chips = document.getElementById("question-chips");
    const heading = document.getElementById("question-heading");
    const numberLabel = document.getElementById("question-number");
    numberLabel.textContent = `第 ${position + 1} / ${currentExam.length} 题`;
    chips.append(element("span", "chip type", typeLabel(question.type) + "题"));
    if (review) {
      const item = result.results[position];
      chips.append(element("span", "chip " + item.status, `${item.score} / ${question.points} 分 · ${labels[item.status]}`));
      renderSummary();
    } else {
      chips.append(element("span", "chip", `${question.points} 分`));
    }
    if (question.image || question.optionImages?.some(Boolean)) {
      chips.append(button("查看大图", "secondary compact image-trigger", () => showImages(question)));
    }
    appendMath(heading, question.stem);
    heading.hidden = !question.stem.trim();
    heading.closest("section").setAttribute("aria-labelledby", heading.hidden ? "question-number" : "question-heading");
    const content = document.getElementById("question-content");
    content.classList.toggle("image-only-question", heading.hidden);
    if (question.image) {
      const img = element("img", "question-image");
      img.src = question.image;
      img.alt = "题目示意图";
      content.append(img);
    }
    if (question.reference?.trim()) content.append(buildReference(question.reference));
    const optionGroup = buildOptions(question, review);
    content.append(optionGroup);
    if (review && question.source) {
      const number = Number.isInteger(question.sourceNumber) ? ` · 第 ${question.sourceNumber} 题` : "";
      content.append(element("p", "question-source", question.source + number));
    }

    const actions = document.getElementById("question-actions");
    const previous = button("← 上一题", "secondary", () => go(position - 1));
    const next = button("下一题 →", "primary", () => go(position + 1));
    previous.disabled = position === 0;
    next.disabled = position === currentExam.length - 1;
    actions.append(previous);
    if (!review) {
      actions.append(button("清除本题作答", "secondary", () => {
        optionGroup.querySelectorAll("input:checked").forEach((input) => { input.checked = false; });
        saveSelection(question, optionGroup);
      }));
    }
    actions.append(next);

    const grid = document.getElementById("question-grid");
    currentExam.forEach((_, index) => {
      const jump = element("button", "question-jump", index + 1);
      jump.type = "button";
      jump.addEventListener("click", () => go(index));
      grid.append(jump);
    });
    updateAnswerCard();
    const answerActions = document.getElementById("answer-actions");
    if (review) {
      answerActions.append(button("返回首页", "primary", () => showSetup(true)));
    } else {
      answerActions.append(button("保存并返回", "secondary", () => showSetup(true)), button("交卷", "primary", confirmSubmit));
    }
    if (focus) {
      window.scrollTo(0, 0);
      const focusTarget = heading.hidden ? numberLabel : heading;
      focusTarget.focus({ preventScroll: true });
    }
  }

  function renderSummary() {
    const summary = document.getElementById("result-summary");
    summary.className = "panel result-strip";
    const score = element("div", "score-title", "本次成绩 ");
    score.append(element("strong", "", result.score), document.createTextNode(" / 100 分"));
    const counts = element("div", "result-counts");
    counts.append(
      element("span", "chip correct", `全对 ${result.full} 题`),
      element("span", "chip partial", `部分得分 ${result.partial} 题`),
      element("span", "chip incorrect", `答错 ${currentExam.length - result.full - result.partial - result.unanswered} 题`),
      element("span", "chip", `未答 ${result.unanswered} 题`),
      element("span", "chip", `用时 ${formatClock(result.elapsedSeconds)}`)
    );
    if (result.elapsedSeconds >= examLimitSeconds) {
      counts.append(element("span", "chip incorrect", formatOvertime(result.elapsedSeconds - examLimitSeconds)));
    }
    summary.append(score, counts);
  }

  function confirmSubmit() {
    const unanswered = currentExam.length - answeredCount();
    const detail = unanswered
      ? `还有 ${unanswered} 道题未答。交卷后可以查看得分和正确答案。`
      : "所有题目均已作答。交卷后可以查看得分和正确答案。";
    confirmAction("确认交卷？", detail, "确认交卷", submit);
  }

  function submit() {
    const answers = progress.draft.answers;
    const elapsedSeconds = elapsedExamSeconds();
    result = { ...engine.grade(currentExam, answers), elapsedSeconds };
    const answered = currentExam.filter((question) => answers[question.id]?.length > 0).map((question) => question.id);
    const date = new Date().toISOString();
    const id = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    progress.answeredIds = Array.from(new Set([...progress.answeredIds, ...answered]));
    progress.attempts.unshift({ id, date, score: result.score, answered: answered.length, total: currentExam.length });
    progress.draft = null;
    persist();
    position = 0;
    screen = "result";
    renderExam();
    const summary = document.getElementById("result-summary");
    summary.tabIndex = -1;
    summary.setAttribute("aria-label", `本次成绩 ${result.score} / 100 分`);
    window.scrollTo(0, 0);
    summary.focus({ preventScroll: true });
  }

  function exportBackup() {
    const data = JSON.stringify({ version: 1, ...progress }, null, 2);
    const url = URL.createObjectURL(new Blob([data], { type: "application/json" }));
    const anchor = element("a");
    anchor.href = url;
    anchor.download = "热学模拟-答题记录.json";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    backupMessage = { text: "答题记录已开始下载。", tone: "success" };
    showBackupNotice();
  }

  backupInput.addEventListener("change", async () => {
    const file = backupInput.files[0];
    backupInput.value = "";
    if (!file) return;
    try {
      const imported = engine.parseBackup(await file.text());
      progress = engine.mergeProgress(progress, imported);
      persist();
      backupMessage = { text: "已导入答题记录。", tone: "success" };
    } catch (error) {
      console.error(error);
      backupMessage = { text: "导入失败。请选择由本网站导出的答题记录文件。", tone: "error" };
    }
    if (screen === "setup") showSetup();
  });

  window.addEventListener("storage", (event) => {
    if (!storage || event.storageArea !== storage) return;
    try {
      refreshProgress();
      if (screen === "setup") {
        renderHistory();
        showAvailability();
      }
    } catch (error) {
      console.error(error);
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && screen === "exam") updateExamTimer();
  });

  document.getElementById("home-button").addEventListener("click", () => showSetup(true));
  showSetup();
})();
