(() => {
  "use strict";

  const engine = window.HeatExam;
  const view = document.getElementById("view");
  const headerState = document.getElementById("header-state");
  const siteHeader = headerState.closest("header");
  const sectionNav = siteHeader.querySelector(".workspace-nav");
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
  const eligibleCount = bank.filter((question) => question.archiveOnly !== true).length;
  const sourceOptions = [...new Set(bank.flatMap((question) => questionSources(question).map((item) => item.source)))];
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
  const bankFilters = { search: "", source: "", type: "", points: "" };
  let bankPage = 0;
  let recordsPage = 0;
  let activeAttemptId = "";
  let attemptFilter = "all";
  let attemptQuestionPage = 0;

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
    activeAttemptId = "";
    recordsPage = 0;
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

  function activateSection(section) {
    for (const node of sectionNav.querySelectorAll("[data-section]")) {
      if (node.dataset.section === section) node.setAttribute("aria-current", "page");
      else node.removeAttribute("aria-current");
    }
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
      const label = dateFormat.format(date);
      const record = button("", "record-link", () => openAttempt(entry.id));
      record.append(element("span", "", label), element("strong", "", `${entry.score} / 100`));
      item.append(record);
      list.append(item);
    }
    holder.append(list);
  }

  function showSetup(focus = false) {
    screen = "setup";
    activateSection("exam");
    stopExamTimer("模拟考试");
    view.innerHTML = `
      <section class="hero" aria-labelledby="setup-heading">
        <div>
          <h1 id="setup-heading" tabindex="-1">热学期末模拟</h1>
          <p>可抽题目 ${eligibleCount} 道 · 按 2025–2026 热学 A 卷结构组卷</p>
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
          <div class="panel-heading"><h2 id="history-heading">最近考试</h2><span class="count" id="history-count"></span></div>
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
      wrong, button("已做题", "secondary compact", () => openLibrary("answered")),
      button("全部记录", "secondary compact", () => showRecords())
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

  function questionSources(question) {
    return [question, ...(question.sourceAliases || [])].filter((item) => typeof item?.source === "string" && item.source);
  }

  function sourceLabel(source) {
    const number = Number.isInteger(source.sourceNumber) ? ` · 第 ${source.sourceNumber} 题` : "";
    return source.source + number;
  }

  function appendPreview(title, question) {
    if (question.stem.trim()) {
      appendMath(title, question.stem);
    } else if (question.image) {
      const preview = element("img", "question-preview-image");
      preview.alt = "原题题干";
      window.HeatAssets.set(preview, question.image, question.assetPack);
      title.append(preview);
    } else {
      title.textContent = "查看题目";
    }
  }

  function appendSourceLine(parent, question) {
    if (question.source) parent.append(element("span", "library-source", question.source));
  }

  function populatePager(holder, index, pages, navigate) {
    holder.replaceChildren();
    if (pages <= 1) return;
    const previous = button("上一页", "secondary compact", () => navigate(index - 1));
    const next = button("下一页", "secondary compact", () => navigate(index + 1));
    previous.disabled = index === 0;
    next.disabled = index >= pages - 1;
    holder.append(previous, element("span", "", `${index + 1} / ${pages} 页`), next);
  }

  function openLibrary(scope) {
    libraryScope = scope;
    libraryFilter = "all";
    libraryPage = 0;
    renderLibrary();
  }

  function renderLibrary(restoreId = "", feedback = "") {
    screen = "library";
    activateSection("library");
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
      appendPreview(title, question);
      const meta = element("span", "library-question-meta");
      meta.append(
        element("span", "chip " + historyStatus(record), historyLabel(record)),
        element("span", "", `${typeLabel(question.type)} · ${question.points} 分`)
      );
      if (record) meta.append(element("time", "", dateFormat.format(new Date(record.date))));
      control.append(title, meta);
      appendSourceLine(control, question);
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
    populatePager(document.getElementById("library-pagination"), libraryPage, pages, (page) => {
      libraryPage = page;
      renderLibraryEntries();
      status.focus();
    });
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

  function normalizeSearch(text) {
    return text.normalize("NFKC").toLowerCase().replace(/[\s·、，]/g, "");
  }

  function showBank(restoreId = "") {
    screen = "bank";
    activateSection("bank");
    stopExamTimer("题库全览");
    view.innerHTML = `
      <section class="page-heading" aria-labelledby="bank-heading">
        <div>
          <h1 id="bank-heading" tabindex="-1">题库全览</h1>
          <p class="panel-copy">按题干、题型或来源找题，打开后可看答案和解析。</p>
        </div>
        <p class="page-count">${bank.length} 道题${eligibleCount < bank.length ? ` · ${eligibleCount} 道可抽取` : ""}</p>
      </section>
      <div class="browse-layout">
        <aside class="panel bank-controls" aria-labelledby="bank-controls-heading">
          <h2 id="bank-controls-heading">筛选题目</h2>
          <label for="bank-search">搜索</label>
          <input id="bank-search" type="search" placeholder="题干、来源或原卷题号" autocomplete="off">
          <label for="bank-source">题目来源</label>
          <select id="bank-source"><option value="">全部来源</option></select>
          <label for="bank-type">题型</label>
          <select id="bank-type">
            <option value="">全部题型</option><option value="single">单选</option><option value="multiple">多选</option>
          </select>
          <label for="bank-points">分值</label>
          <select id="bank-points">
            <option value="">全部分值</option><option value="1">1 分</option><option value="2">2 分</option><option value="3">3 分</option>
          </select>
          <div id="bank-clear"></div>
        </aside>
        <section class="panel browse-content" aria-label="题目列表">
          <p id="bank-results" class="browse-results" role="status" tabindex="-1"></p>
          <ul class="library-list" id="bank-list"></ul>
          <div class="button-row library-pagination" id="bank-pagination"></div>
        </section>
      </div>`;
    const source = document.getElementById("bank-source");
    for (const name of sourceOptions) {
      const option = element("option", "", name);
      option.value = name;
      source.append(option);
    }
    for (const key of Object.keys(bankFilters)) {
      const input = document.getElementById("bank-" + key);
      input.value = bankFilters[key];
      input.addEventListener(key === "search" ? "input" : "change", () => {
        bankFilters[key] = input.value;
        bankPage = 0;
        renderBankEntries();
      });
    }
    document.getElementById("bank-clear").append(button("清除筛选", "secondary compact", () => {
      for (const key of Object.keys(bankFilters)) {
        bankFilters[key] = "";
        document.getElementById("bank-" + key).value = "";
      }
      bankPage = 0;
      renderBankEntries();
      document.getElementById("bank-search").focus();
    }));
    renderBankEntries();
    const restored = restoreId && document.getElementById("bank-question-" + restoreId);
    if (!restored) window.scrollTo(0, 0);
    (restored || document.getElementById("bank-heading")).focus();
  }

  function renderBankEntries() {
    const words = bankFilters.search.trim().split(/\s+/).map(normalizeSearch).filter(Boolean);
    const matches = bank.filter((question) => {
      if (bankFilters.type && question.type !== bankFilters.type) return false;
      if (bankFilters.points && String(question.points) !== bankFilters.points) return false;
      const sources = questionSources(question);
      if (bankFilters.source && !sources.some(({ source }) => source === bankFilters.source)) return false;
      if (!words.length) return true;
      const searchable = normalizeSearch([question.stem, ...question.options, ...sources.map(sourceLabel)].join(" "));
      return words.every((word) => searchable.includes(word));
    });
    const pages = Math.max(1, Math.ceil(matches.length / libraryPageSize));
    bankPage = Math.min(bankPage, pages - 1);
    const holder = document.getElementById("bank-list");
    holder.replaceChildren();
    for (const question of matches.slice(bankPage * libraryPageSize, (bankPage + 1) * libraryPageSize)) {
      const row = element("li", "library-entry");
      const control = button("", "library-question", () => showBankQuestion(question));
      control.id = "bank-question-" + question.id;
      const title = element("span", "library-question-title");
      appendPreview(title, question);
      const meta = element("span", "library-question-meta", `${typeLabel(question.type)} · ${question.points} 分`);
      if (question.archiveOnly === true) meta.append(element("span", "chip", "仅供查阅"));
      control.append(title, meta);
      appendSourceLine(control, bankFilters.source ? { source: bankFilters.source } : question);
      row.append(control);
      holder.append(row);
    }
    const status = document.getElementById("bank-results");
    status.textContent = matches.length ? `共 ${matches.length} 题` : "没有符合条件的题目。";
    populatePager(document.getElementById("bank-pagination"), bankPage, pages, (page) => {
      bankPage = page;
      renderBankEntries();
      status.focus();
    });
  }

  function showBankQuestion(question) {
    screen = "bank-question";
    view.innerHTML = questionPanel;
    const { focusTarget } = renderQuestion(question, "题库题目", { selected: [] });
    document.getElementById("question-actions").append(
      button("返回题库全览", "primary", () => showBank(question.id))
    );
    window.scrollTo(0, 0);
    focusTarget.focus({ preventScroll: true });
  }

  function summaryMetrics(entries) {
    const metrics = element("dl", "metric-grid");
    for (const [label, value] of entries) {
      const metric = element("div", "metric");
      metric.append(element("dt", "", label), element("dd", "", value));
      metrics.append(metric);
    }
    return metrics;
  }

  function showRecords(restoreId = "") {
    screen = "records";
    activateSection("records");
    stopExamTimer("考试记录");
    view.innerHTML = `
      <section class="page-heading" aria-labelledby="records-heading">
        <div>
          <h1 id="records-heading" tabindex="-1">考试记录</h1>
          <p class="panel-copy">按提交时间回看每套试卷的成绩和作答。</p>
        </div>
      </section>
      <div id="record-metrics"></div>
      <section class="panel browse-content" aria-label="已提交试卷">
        <p id="records-results" class="browse-results" role="status" tabindex="-1"></p>
        <ul class="library-list" id="records-list"></ul>
        <div class="button-row library-pagination" id="records-pagination"></div>
      </section>`;
    renderRecordEntries();
    const restored = restoreId && document.getElementById("attempt-" + restoreId);
    if (!restored) window.scrollTo(0, 0);
    (restored || document.getElementById("records-heading")).focus();
  }

  function renderRecordEntries() {
    const entries = progress.attempts.slice().sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    const scores = entries.map((entry) => entry.score);
    document.getElementById("record-metrics").replaceChildren(summaryMetrics([
      ["完成试卷", `${entries.length} 套`],
      ["平均分", entries.length ? `${(scores.reduce((sum, score) => sum + score, 0) / entries.length).toFixed(1)} 分` : "—"],
      ["最高分", entries.length ? `${scores.reduce((highest, score) => Math.max(highest, score), 0)} 分` : "—"],
    ]));
    const pages = Math.max(1, Math.ceil(entries.length / libraryPageSize));
    recordsPage = Math.min(recordsPage, pages - 1);
    const holder = document.getElementById("records-list");
    holder.replaceChildren();
    for (const entry of entries.slice(recordsPage * libraryPageSize, (recordsPage + 1) * libraryPageSize)) {
      const row = element("li", "library-entry");
      const control = button("", "library-question record-row", () => openAttempt(entry.id));
      control.id = "attempt-" + entry.id;
      const title = element("span", "library-question-title", dateFormat.format(new Date(entry.date)));
      const meta = element("span", "library-question-meta");
      meta.append(
        element("span", "", `已答 ${entry.answered} / ${entry.total} 题`),
        element("span", "", entry.results ? `用时 ${formatClock(entry.elapsedSeconds)}` : "旧版成绩记录")
      );
      control.append(title, element("strong", "record-score", `${entry.score} / 100`), meta);
      row.append(control);
      holder.append(row);
    }
    const status = document.getElementById("records-results");
    status.textContent = entries.length ? `共 ${entries.length} 套试卷` : "交卷后即可回看考试记录。";
    populatePager(document.getElementById("records-pagination"), recordsPage, pages, (page) => {
      recordsPage = page;
      renderRecordEntries();
      status.focus();
    });
  }

  function openAttempt(id) {
    if (!refreshForAction()) return;
    activeAttemptId = id;
    attemptFilter = "all";
    attemptQuestionPage = 0;
    showAttempt();
  }

  function showAttempt(restoreIndex = -1) {
    const attempt = progress.attempts.find((entry) => entry.id === activeAttemptId);
    if (!attempt) {
      showRecords();
      return;
    }
    screen = "attempt";
    activateSection("records");
    stopExamTimer("试卷详情");
    view.innerHTML = `
      <section class="page-heading" aria-labelledby="attempt-heading">
        <div>
          <h1 id="attempt-heading" tabindex="-1">试卷详情</h1>
          <p id="attempt-date" class="panel-copy"></p>
        </div>
        <div id="attempt-navigation" class="button-row"></div>
      </section>
      <div id="attempt-metrics"></div>
      <div id="attempt-detail"></div>`;
    document.getElementById("attempt-date").textContent = dateFormat.format(new Date(attempt.date));
    document.getElementById("attempt-navigation").append(button("返回考试记录", "secondary", () => showRecords(attempt.id)));
    document.getElementById("attempt-metrics").append(summaryMetrics([
      ["成绩", `${attempt.score} / 100`],
      ["用时", attempt.results ? formatClock(attempt.elapsedSeconds) : "旧版未记录"],
      ["作答", `${attempt.answered} / ${attempt.total} 题`],
    ]));
    const detail = document.getElementById("attempt-detail");
    if (!attempt.results) {
      const panel = element("section", "panel browse-content");
      panel.append(
        element("h2", "", "旧版成绩记录"),
        element("p", "panel-copy", "这套试卷保留了提交时间、总分和作答题数。逐题作答、用时和分析从 V4 开始记录。")
      );
      detail.append(panel);
    } else {
      const summary = engine.summarizeResults(attempt.results);
      const table = buildAnalysis(attempt.results);
      detail.append(table);
      const panel = element("section", "panel browse-content");
      panel.innerHTML = `
        <div class="library-heading-row">
          <h2>逐题记录</h2>
          <label class="library-filter" for="attempt-filter">筛选结果
            <select id="attempt-filter">
              <option value="all">全部题目</option><option value="missed">错题及部分得分</option>
              <option value="incorrect">仅答错</option><option value="partial">仅部分得分</option>
              <option value="unanswered">未作答</option><option value="correct">仅答对</option>
            </select>
          </label>
        </div>
        <div id="attempt-counts" class="result-counts"></div>
        <p id="attempt-results" class="browse-results" role="status" tabindex="-1"></p>
        <ul class="library-list" id="attempt-questions"></ul>
        <div class="button-row library-pagination" id="attempt-pagination"></div>`;
      detail.append(panel);
      document.getElementById("attempt-counts").append(...scoreChips(summary));
      const filter = document.getElementById("attempt-filter");
      filter.value = attemptFilter;
      filter.addEventListener("change", () => {
        attemptFilter = filter.value;
        attemptQuestionPage = 0;
        renderAttemptEntries(attempt, summary.results);
      });
      renderAttemptEntries(attempt, summary.results);
    }
    const restored = restoreIndex >= 0 && document.getElementById("attempt-question-" + restoreIndex);
    if (!restored) window.scrollTo(0, 0);
    (restored || document.getElementById("attempt-heading")).focus();
  }

  function buildAnalysis(items) {
    const section = element("section", "panel analysis-panel");
    section.append(element("h2", "", "试卷分析"));
    const byType = new Map();
    const byPoints = new Map();
    for (const item of items) {
      const type = item.type ?? byId.get(item.id)?.type;
      const label = type ? typeLabel(type) : "未知题型";
      if (!byType.has(label)) byType.set(label, []);
      if (!byPoints.has(item.max)) byPoints.set(item.max, []);
      byType.get(label).push(item);
      byPoints.get(item.max).push(item);
    }
    const grid = element("div", "analysis-grid");
    for (const [heading, groups] of [
      ["按题型", [...byType.entries()].sort(([left], [right]) => left.localeCompare(right, "zh-CN"))],
      ["按分值", [...byPoints.entries()].sort(([left], [right]) => left - right).map(([points, group]) => [`${points} 分题`, group])],
    ]) {
      const block = element("div", "analysis-block");
      block.append(element("h3", "", heading));
      for (const [label, group] of groups) {
        const points = group.reduce((sum, item) => sum + item.max, 0);
        const scored = group.reduce((sum, item) => sum + item.score, 0);
        const row = element("div", "analysis-item");
        const text = element("div", "analysis-label");
        text.append(element("span", "", `${label} · ${group.length} 题`), element("strong", "", `${scored} / ${points} 分`));
        const meter = element("meter", "analysis-meter");
        meter.min = 0;
        meter.max = points;
        meter.value = scored;
        meter.setAttribute("aria-label", `${label}得分`);
        row.append(text, meter);
        block.append(row);
      }
      grid.append(block);
    }
    section.append(grid);
    return section;
  }

  function renderAttemptEntries(attempt, items) {
    const matches = items.map((item, index) => ({ item, index })).filter(({ item }) =>
      attemptFilter === "all" || item.status === attemptFilter ||
      (attemptFilter === "missed" && (item.status === "incorrect" || item.status === "partial"))
    );
    const pages = Math.max(1, Math.ceil(matches.length / libraryPageSize));
    attemptQuestionPage = Math.min(attemptQuestionPage, pages - 1);
    const holder = document.getElementById("attempt-questions");
    holder.replaceChildren();
    for (const { item, index } of matches.slice(attemptQuestionPage * libraryPageSize, (attemptQuestionPage + 1) * libraryPageSize)) {
      const question = byId.get(item.id);
      const row = element("li", "library-entry");
      const control = button("", "library-question", () => showAttemptQuestion(attempt, index));
      control.id = "attempt-question-" + index;
      const title = element("span", "library-question-title");
      title.append(element("span", "attempt-question-number", `第 ${index + 1} 题`), document.createTextNode(" "));
      if (question) appendPreview(title, question);
      else title.append(document.createTextNode("此题的题干已移出当前题库。"));
      const meta = element("span", "library-question-meta");
      meta.append(
        element("span", "chip " + item.status, labels[item.status]),
        element("span", "", `${item.score} / ${item.max} 分`),
        element("span", "", `作答 ${item.selected.map(letter).join("、") || "未选"}`),
        element("span", "", `正确 ${item.correct.map(letter).join("、")}`)
      );
      control.append(title, meta);
      if (question) appendSourceLine(control, question);
      row.append(control);
      holder.append(row);
    }
    const status = document.getElementById("attempt-results");
    status.textContent = matches.length ? `共 ${matches.length} 题` : "没有符合条件的题目。";
    populatePager(document.getElementById("attempt-pagination"), attemptQuestionPage, pages, (page) => {
      attemptQuestionPage = page;
      renderAttemptEntries(attempt, items);
      status.focus();
    });
  }

  function showAttemptQuestion(attempt, index) {
    screen = "attempt-question";
    const item = engine.summarizeResults([attempt.results[index]]).results[0];
    const question = byId.get(item.id);
    const caption = `试卷第 ${index + 1} / ${attempt.total} 题`;
    let focusTarget;
    if (question) {
      view.innerHTML = questionPanel;
      ({ focusTarget } = renderQuestion(question, caption, item));
    } else {
      const panel = element("section", "panel question-panel");
      focusTarget = element("h1", "", caption);
      focusTarget.tabIndex = -1;
      panel.append(
        focusTarget,
        element("p", "panel-copy", "此题的题干已移出当前题库。"),
        element("p", "panel-copy", `作答 ${item.selected.map(letter).join("、") || "未选"} · 正确 ${item.correct.map(letter).join("、")} · 得分 ${item.score} / ${item.max}`),
        element("div", "question-actions")
      );
      panel.lastElementChild.id = "question-actions";
      view.replaceChildren(panel);
    }
    document.getElementById("question-actions").append(button("返回试卷详情", "primary", () => showAttempt(index)));
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
    if (selected.length !== 60 || selected.some((question) => !question)
        || selected.reduce((total, question) => total + question.points, 0) !== 100) {
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
    const correct = review ? (item.correct ?? question.answer) : [];
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
    chips.append(element("span", "chip type", typeLabel(item?.type ?? question.type) + "题"));
    if (review && Number.isInteger(item.score)) {
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
      const correct = item.correct ?? question.answer;
      feedback.append(
        element("h2", "", explanation ? "解析" : "题库答案"),
        element("p", "correct-choices", `正确选项 ${correct.map(letter).join("、")}`)
      );
      if (correct.length !== question.answer.length || !correct.every((index) => question.answer.includes(index))) {
        feedback.append(element("p", "panel-copy", `上方为交卷时的答案。当前题库修订为 ${question.answer.map(letter).join("、")}，下方解析采用修订后的答案。`));
      }
      if (explanation) {
        const explanationText = element("p", "answer-explanation-text");
        appendMath(explanationText, explanation);
        feedback.append(explanationText);
      }
      content.append(feedback);
      const sources = [...new Set(questionSources(question).map(sourceLabel))];
      if (sources.length) content.append(element("p", "question-source", `来源　${sources.join(" / ")}`));
    }
    return { optionGroup, focusTarget: heading.hidden ? numberLabel : heading };
  }

  function renderExam(focus = false) {
    const review = screen === "result";
    activateSection("exam");
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
        button("查看本次记录", "secondary", () => openAttempt(activeAttemptId)),
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

  function scoreChips(summary) {
    return [
      element("span", "chip correct", `全对 ${summary.full} 题`),
      element("span", "chip partial", `部分得分 ${summary.partial} 题`),
      element("span", "chip incorrect", `答错 ${summary.results.length - summary.full - summary.partial - summary.unanswered} 题`),
      element("span", "chip", `未答 ${summary.unanswered} 题`),
    ];
  }

  function renderSummary() {
    const summary = document.getElementById("result-summary");
    summary.className = "panel result-strip";
    const score = element("div", "score-title", "本次成绩 ");
    score.append(element("strong", "", result.score), document.createTextNode(" / 100 分"));
    const counts = element("div", "result-counts");
    counts.append(
      ...scoreChips(result),
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
    progress.attempts.unshift({
      id, date, score: result.score, answered, total: currentExam.length, elapsedSeconds,
      results: result.results.map(({ status, ...item }) => item),
    });
    progress.draft = null;
    if (persist() === "reset") return;
    position = 0;
    activeAttemptId = id;
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
      } else if (screen === "records") {
        renderRecordEntries();
      }
    } catch (error) {
      console.error(error);
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && screen === "exam" && refreshForAction()) updateExamTimer();
  });

  document.getElementById("home-button").addEventListener("click", () => showSetup(true));
  const sectionActions = {
    exam: () => showSetup(true),
    bank: () => showBank(),
    records: () => showRecords(),
    library: () => openLibrary("wrong"),
  };
  for (const control of sectionNav.querySelectorAll("[data-section]")) {
    control.addEventListener("click", sectionActions[control.dataset.section]);
  }
  showSetup();
})();
