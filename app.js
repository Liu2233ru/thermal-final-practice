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
  const libraryPageSize = 16;
  const questionPanel = `
    <section class="panel question-panel" aria-labelledby="question-heading">
      <div class="question-header">
        <p class="question-number" id="question-number" tabindex="-1"></p>
        <div class="chips" id="question-chips"></div>
      </div>
      <h1 class="question-stem" id="question-heading" tabindex="-1"></h1>
      <div id="question-content"></div>
      <div class="question-actions" id="question-actions"></div>
    </section>`;

  let bank;
  try {
    bank = engine.validateBank(window.HEAT_BANK || []);
  } catch (error) {
    console.error(error);
    view.innerHTML = '<p class="notice error" role="alert">题库加载失败，请重新打开网页。</p>';
    return;
  }

  const byId = new Map(bank.map((question) => [question.id, question]));
  let progress = { answeredIds: [], attempts: [], draft: null, questionHistory: {} };
  let storage;
  let skipAnswered = false;
  let screen = "setup";
  let currentExam = [];
  let position = 0;
  let result = null;
  let backupMessage = null;
  let pendingConfirmation = null;
  let timerInterval = null;
  let libraryScope = "wrong";
  let libraryFilter = "all";
  let libraryPage = 0;

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
    if (!storage) return "temporary";
    try {
      if (!refreshProgress()) return "reset";
      engine.saveProgress(storage, progress);
      storageWarning.hidden = true;
      return "saved";
    } catch (error) {
      console.error(error);
      showStorageWarning("本地记录保存失败。本次仍可做题，关页前可回首页导出记录。");
      return "temporary";
    }
  }

  function refreshProgress() {
    if (!storage) return true;
    const latest = engine.loadProgress(storage);
    const wasReset = (progress.resetId ?? null) !== (latest.resetId ?? null);
    progress = engine.syncProgress(progress, latest);
    if (wasReset) showClearedRecords("本地记录已在其他标签页清空。");
    return !wasReset;
  }

  function refreshForAction() {
    try {
      return refreshProgress();
    } catch (error) {
      console.error(error);
      showStorageWarning("无法读取最新的本地记录，本次将使用当前已载入的答题记录。");
      return true;
    }
  }

  function showClearedRecords(message) {
    pendingConfirmation = null;
    if (dialog.open) dialog.close();
    if (imageDialog.open) imageDialog.close();
    currentExam = [];
    position = 0;
    result = null;
    storageWarning.hidden = true;
    backupMessage = { text: message, tone: "success" };
    showSetup(true);
  }

  function clearLocalRecords() {
    try {
      const local = window.localStorage;
      progress = engine.clearProgress(local);
      storage = local;
      showClearedRecords("已清空本地记录。");
    } catch (error) {
      console.error(error);
      backupMessage = { text: "清空失败，请检查浏览器是否允许保存本地记录。", tone: "error" };
      showBackupNotice();
    }
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
    const mistakes = Object.entries(progress.questionHistory)
      .filter(([id, record]) => byId.has(id) && record.hadMistake).length;
    document.getElementById("wrong-questions").textContent = `错题库 · ${mistakes}`;
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
          <p>题库 ${bank.length} 题 · 按 2025–2026 热学 A 卷结构组卷</p>
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
          <div class="button-row library-actions" id="library-actions"></div>
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
    const wrong = button("错题库", "secondary compact", () => openLibrary("wrong"));
    wrong.id = "wrong-questions";
    document.getElementById("library-actions").append(
      wrong, button("已做题", "secondary compact", () => openLibrary("answered"))
    );
    const backup = document.getElementById("backup-actions");
    backup.append(
      button("导出记录", "secondary compact", exportBackup),
      button("导入记录", "secondary compact", () => backupInput.click()),
      button("清空本地记录", "danger-outline compact", () => confirmAction(
        "清空本地记录？",
        "将删除此浏览器中本网站的成绩、已做题、错题和未交卷的作答。需要留存时，可以先导出记录。",
        "确认清空",
        clearLocalRecords,
        true
      ))
    );
    renderHistory();
    showAvailability();
    showBackupNotice();
    if (focus) document.getElementById("setup-heading").focus();
  }

  function historyFor(id) {
    return Object.hasOwn(progress.questionHistory, id) ? progress.questionHistory[id] : null;
  }

  function historyStatus(record) {
    if (!record) return "legacy";
    if (record.score === record.max) return "correct";
    return record.score > 0 ? "partial" : "incorrect";
  }

  function historyLabel(record) {
    const status = historyStatus(record);
    if (status === "legacy") return "旧版记录";
    if (status === "correct" && record.hadMistake) return "已订正";
    return labels[status];
  }

  function sourceLabel(question) {
    const number = Number.isInteger(question.sourceNumber) ? ` · 第 ${question.sourceNumber} 题` : "";
    return question.source ? question.source + number : "";
  }

  function openLibrary(scope) {
    libraryScope = scope;
    libraryFilter = "all";
    libraryPage = 0;
    renderLibrary();
  }

  function renderLibrary(restoreId = "", feedback = "") {
    screen = "library";
    stopExamTimer("复习题库");
    view.innerHTML = `
      <section class="panel library-panel" aria-labelledby="library-heading">
        <div class="library-heading-row">
          <h1 id="library-heading" tabindex="-1">${libraryScope === "wrong" ? "错题库" : "已做题"}</h1>
          <div id="library-navigation" class="button-row"></div>
        </div>
        <p class="panel-copy">${libraryScope === "wrong"
          ? "答错或部分得分的题会在交卷后收入错题库。移出的题仍可在「已做题」中回看。"
          : "回看已交卷且实际作答过的题、正确答案及可用解析。"}</p>
        <div class="library-toolbar">
          <p id="library-results" class="panel-copy" role="status" tabindex="-1"></p>
          <label class="library-filter" ${libraryScope === "wrong" ? "" : "hidden"}>复习状态
            <select id="library-filter">
              <option value="all">全部错题</option>
              <option value="pending">待复习</option>
              <option value="corrected">已订正</option>
            </select>
          </label>
        </div>
        <ul class="library-list" id="library-list"></ul>
        <div class="button-row library-pagination" id="library-pagination"></div>
      </section>`;
    const nav = document.getElementById("library-navigation");
    for (const [scope, label] of [["wrong", "错题库"], ["answered", "已做题"]]) {
      const active = libraryScope === scope;
      const control = button(label, active ? "primary compact" : "secondary compact", () => openLibrary(scope));
      control.setAttribute("aria-pressed", String(active));
      nav.append(control);
    }
    nav.append(button("返回首页", "secondary compact", () => showSetup(true)));
    const filter = document.getElementById("library-filter");
    filter.value = libraryFilter;
    filter.addEventListener("change", () => {
      libraryFilter = filter.value;
      libraryPage = 0;
      renderLibraryEntries();
    });
    renderLibraryEntries(feedback);
    const restored = restoreId && document.getElementById("saved-" + restoreId);
    if (!restored) window.scrollTo(0, 0);
    (restored || document.getElementById(feedback ? "library-results" : "library-heading")).focus();
  }

  function renderLibraryEntries(feedback = "") {
    const rows = progress.answeredIds.flatMap((id) => {
      const question = byId.get(id);
      if (!question) return [];
      const record = historyFor(id);
      if (libraryScope === "wrong" && !record?.hadMistake) return [];
      if (libraryFilter === "pending" && record?.score === record?.max) return [];
      if (libraryFilter === "corrected" && record?.score !== record?.max) return [];
      return [{ question, record }];
    }).sort((a, b) => (b.record ? Date.parse(b.record.date) : 0) - (a.record ? Date.parse(a.record.date) : 0));
    const pages = Math.max(1, Math.ceil(rows.length / libraryPageSize));
    libraryPage = Math.min(libraryPage, pages - 1);
    const start = libraryPage * libraryPageSize;
    const holder = document.getElementById("library-list");
    holder.replaceChildren();
    for (const { question, record } of rows.slice(start, start + libraryPageSize)) {
      const row = element("li", "library-entry");
      const control = button("", "library-question", () => showSavedQuestion(question.id));
      control.id = "saved-" + question.id;
      const title = element("span", "library-question-title");
      appendMath(title, question.stem || sourceLabel(question) || "图片题");
      const meta = element("span", "library-question-meta");
      meta.append(
        element("span", "chip " + historyStatus(record), historyLabel(record)),
        element("span", "", `${typeLabel(question.type)} · ${question.points} 分`)
      );
      if (record) meta.append(element("time", "", dateFormat.format(new Date(record.date))));
      control.append(title, meta);
      row.append(control);
      if (libraryScope === "wrong") {
        title.id = "saved-title-" + question.id;
        const remove = button("移出错题库", "danger-outline compact", () => removeSavedWrong(question.id));
        remove.setAttribute("aria-describedby", title.id);
        row.append(remove);
      }
      holder.append(row);
    }
    const status = document.getElementById("library-results");
    const count = rows.length ? `共 ${rows.length} 题` : libraryScope === "wrong"
      ? "这里还没有符合条件的错题。" : "交卷后即可回看做过的题。";
    status.textContent = feedback ? feedback + " " + count : count;
    const pagination = document.getElementById("library-pagination");
    pagination.replaceChildren();
    if (pages > 1) {
      const pageButton = (label, offset) => {
        const control = button(label, "secondary compact", () => {
          libraryPage += offset;
          renderLibraryEntries();
          status.focus();
        });
        control.disabled = libraryPage + offset < 0 || libraryPage + offset >= pages;
        return control;
      };
      pagination.append(pageButton("上一页", -1), element("span", "", `${libraryPage + 1} / ${pages} 页`), pageButton("下一页", 1));
    }
  }

  function removeSavedWrong(id) {
    if (!refreshForAction()) return;
    const row = document.getElementById("saved-" + id)?.parentElement;
    const neighbor = row?.nextElementSibling ?? row?.previousElementSibling;
    const nextId = neighbor?.querySelector(".library-question")?.id;
    progress = engine.removeWrongQuestion(progress, id);
    const outcome = persist();
    if (outcome === "reset") return;
    const feedback = outcome === "saved" ? "已移出错题库。" : "已移出当前错题库，浏览器未能保存。";
    if (screen === "library") {
      renderLibraryEntries(feedback);
      const restored = nextId && document.getElementById(nextId);
      (restored || document.getElementById("library-results")).focus();
    } else {
      renderLibrary("", feedback);
    }
  }

  function showSavedQuestion(id) {
    screen = "saved-question";
    stopExamTimer("复习题库");
    view.innerHTML = questionPanel;
    const question = byId.get(id);
    const record = historyFor(id);
    const item = {
      selected: record?.selected ?? [],
      score: record?.score,
      max: record?.max,
      status: historyStatus(record),
      label: historyLabel(record),
    };
    const { focusTarget } = renderQuestion(question, libraryScope === "wrong" ? "错题复习" : "已做题回看", item);
    if (!record) document.getElementById("question-content").append(
      element("p", "panel-copy", "这道题来自旧版记录，当时只保存了已做题状态。")
    );
    const actions = document.getElementById("question-actions");
    actions.append(
      button("返回题目列表", "primary", () => renderLibrary(id)),
      button("返回首页", "secondary", () => showSetup(true))
    );
    if (libraryScope === "wrong" && record?.hadMistake) {
      actions.append(button("移出错题库", "danger-outline", () => removeSavedWrong(id)));
    }
    window.scrollTo(0, 0);
    focusTarget.focus({ preventScroll: true });
  }

  function showBackupNotice() {
    const node = document.getElementById("backup-notice");
    if (!node) return;
    node.textContent = backupMessage?.text || "";
    node.className = "notice setup-notice " + (backupMessage?.tone || "");
    node.hidden = !backupMessage;
  }

  function begin() {
    if (!refreshForAction()) return;
    const startNewExam = () => {
      if (!refreshForAction()) return;
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
      if (persist() !== "reset") renderExam(true);
    };
    if (progress.draft) {
      confirmAction("开始新的一套？", "开始新卷会覆盖当前尚未交卷的作答。", "开始新卷", startNewExam);
    } else {
      startNewExam();
    }
  }

  function resume() {
    if (!refreshForAction() || !progress.draft) return;
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

  function confirmAction(title, detail, action, callback, destructive = false) {
    document.getElementById("dialog-title").textContent = title;
    document.getElementById("dialog-detail").textContent = detail;
    const confirm = document.getElementById("dialog-confirm");
    confirm.textContent = action;
    confirm.classList.toggle("primary", !destructive);
    confirm.classList.toggle("danger", destructive);
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
      if (persist() === "reset") return;
    }
    renderExam(true);
  }

  function saveSelection(question, group) {
    if (screen !== "exam" || !progress.draft) return;
    const checked = Array.from(group.querySelectorAll("input:checked"), (input) => Number(input.value));
    if (checked.length) {
      progress.draft.answers[question.id] = checked;
    } else {
      delete progress.draft.answers[question.id];
    }
    if (persist() !== "reset") updateAnswerCard();
  }

  function buildOptions(question, item) {
    const review = item !== null;
    const group = element(review ? "div" : "fieldset", "option-list");
    group.setAttribute("aria-labelledby", question.stem.trim() ? "question-heading" : "question-number");
    const selected = review ? item.selected : selectedOptions(question);
    const correct = review ? question.answer : [];
    question.options.forEach((text, index) => {
      const entry = element(review ? "div" : "label", review ? "option review" : "option");
      const optionLetter = element("span", "option-letter", letter(index));
      const optionText = element("span", "option-text");
      appendMath(optionText, text);
      const imageSource = question.optionImages?.[index];
      if (imageSource) {
        const img = element("img", "option-image");
        window.HeatAssets.set(img, imageSource, question.assetPack);
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

  function showImages(question, caption) {
    document.getElementById("image-title").textContent = `${caption}的大图`;
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
      window.HeatAssets.set(image, source, question.assetPack);
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

  function renderQuestion(question, caption, item) {
    const review = item !== null;
    const chips = document.getElementById("question-chips");
    const heading = document.getElementById("question-heading");
    const numberLabel = document.getElementById("question-number");
    numberLabel.textContent = caption;
    chips.append(element("span", "chip type", typeLabel(question.type) + "题"));
    if (review && item.status !== "legacy") {
      chips.append(element("span", "chip " + item.status, `${item.score} / ${item.max} 分 · ${item.label ?? labels[item.status]}`));
    } else {
      chips.append(element("span", "chip", `${question.points} 分`));
    }
    if (question.image || question.optionImages?.some(Boolean)) {
      chips.append(button("查看大图", "secondary compact image-trigger", () => showImages(question, caption)));
    }
    appendMath(heading, question.stem);
    heading.hidden = !question.stem.trim();
    heading.closest("section").setAttribute("aria-labelledby", heading.hidden ? "question-number" : "question-heading");
    const content = document.getElementById("question-content");
    content.classList.toggle("image-only-question", heading.hidden);
    if (question.image) {
      const img = element("img", "question-image");
      window.HeatAssets.set(img, question.image, question.assetPack);
      img.alt = question.stem.trim() ? "题目示意图" : "题干图片";
      content.append(img);
    }
    if (question.reference?.trim()) content.append(buildReference(question.reference));
    const optionGroup = buildOptions(question, item);
    content.append(optionGroup);
    if (review) {
      const explanation = question.explanation?.trim();
      const feedback = element("section", "answer-explanation");
      feedback.append(
        element("h2", "", explanation ? "解析" : "题库答案"),
        element("p", "correct-choices", `正确选项 ${question.answer.map(letter).join("、")}`)
      );
      if (explanation) {
        const explanationText = element("p", "answer-explanation-text");
        appendMath(explanationText, explanation);
        feedback.append(explanationText);
      }
      content.append(feedback);
      const source = sourceLabel(question);
      if (source) content.append(element("p", "question-source", source));
    }
    return { optionGroup, focusTarget: heading.hidden ? numberLabel : heading };
  }

  function renderExam(focus = false) {
    const review = screen === "result";
    if (review) stopExamTimer("交卷结果");
    else startExamTimer();
    view.innerHTML = `
      <div id="result-summary"></div>
      <div class="columns">
        ${questionPanel}
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
    const item = review ? result.results[position] : null;
    const { optionGroup, focusTarget } = renderQuestion(question, `第 ${position + 1} / ${currentExam.length} 题`, item);
    if (review) renderSummary();

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
      answerActions.append(
        button("查看错题库", "secondary", () => openLibrary("wrong")),
        button("返回首页", "primary", () => showSetup(true))
      );
    } else {
      answerActions.append(button("保存并返回", "secondary", () => showSetup(true)), button("交卷", "primary", confirmSubmit));
    }
    if (focus) {
      window.scrollTo(0, 0);
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
    if (!refreshForAction() || screen !== "exam" || !progress.draft) return;
    const unanswered = currentExam.length - answeredCount();
    const detail = unanswered
      ? `还有 ${unanswered} 道题未答。交卷后可以查看得分和正确答案。`
      : "所有题目均已作答。交卷后可以查看得分和正确答案。";
    confirmAction("确认交卷？", detail, "确认交卷", submit);
  }

  function submit() {
    if (screen !== "exam" || !progress.draft) return;
    const answers = progress.draft.answers;
    const elapsedSeconds = elapsedExamSeconds();
    result = { ...engine.grade(currentExam, answers), elapsedSeconds };
    const answered = currentExam.length - result.unanswered;
    const date = new Date().toISOString();
    const id = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    progress = engine.recordSubmission(progress, result.results, date);
    progress.attempts.unshift({ id, date, score: result.score, answered, total: currentExam.length });
    progress.draft = null;
    if (persist() === "reset") return;
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
    if (!refreshForAction()) return;
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
      refreshForAction();
      const resetId = progress.resetId ?? null;
      const imported = engine.parseBackup(await file.text());
      if (!refreshForAction() || (progress.resetId ?? null) !== resetId) {
        backupMessage = { text: "本地记录刚刚清空，请重新选择要导入的备份。", tone: "warning" };
        showBackupNotice();
        return;
      }
      progress = engine.mergeProgress(progress, imported);
      const outcome = persist();
      if (outcome === "reset") return;
      backupMessage = outcome === "saved" ? { text: "已导入答题记录。", tone: "success" }
        : { text: "答题记录已载入，浏览器未能保存。", tone: "warning" };
    } catch (error) {
      console.error(error);
      backupMessage = { text: "导入失败。请选择由本网站导出的答题记录文件。", tone: "error" };
    }
    if (screen === "setup") showSetup();
  });

  window.addEventListener("storage", (event) => {
    if (!storage || event.storageArea !== storage) return;
    try {
      if (!refreshProgress()) return;
      if (screen === "setup") {
        renderHistory();
        showAvailability();
      } else if (screen === "library") {
        renderLibraryEntries();
      }
    } catch (error) {
      console.error(error);
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && screen === "exam" && refreshForAction()) updateExamTimer();
  });

  document.getElementById("home-button").addEventListener("click", () => showSetup(true));
  showSetup();
})();
