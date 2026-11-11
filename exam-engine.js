(function (root) {
  'use strict';

  const storageKey = 'heat-exam-progress-v1';
  const blueprint = [
    { type: 'single', points: 1, required: 28 },
    { type: 'single', points: 2, required: 19 },
    { type: 'multiple', points: 2, required: 5 },
    { type: 'single', points: 3, required: 8 },
  ];
  const examLength = 60;

  function validateBank(bank) {
    if (!Array.isArray(bank) || bank.length === 0) {
      throw new Error('未能加载题库。');
    }
    const ids = new Set();
    for (const question of bank) {
      if (!question || typeof question.id !== 'string' || !question.id || ids.has(question.id)) {
        throw new Error('题库中有重复或无效的题目编号。');
      }
      const { id, type, points, stem, options, answer, image, optionImages } = question;
      if (!blueprint.some((group) => group.type === type && group.points === points)) {
        throw new Error(`题目 ${id} 的题型或分值有误。`);
      }
      if (typeof stem !== 'string' || (!stem.trim() && !image)
          || !Array.isArray(options) || options.length < 2
          || !options.every((option) => typeof option === 'string')
          || (image !== undefined && typeof image !== 'string')
          || (optionImages !== undefined && (
            !Array.isArray(optionImages) || optionImages.length !== options.length
            || !optionImages.every((optionImage) => optionImage === null || typeof optionImage === 'string')
          ))) {
        throw new Error(`题目 ${id} 的题干或选项有误。`);
      }
      if (!Array.isArray(answer)
          || !answer.every((index) => Number.isInteger(index) && index >= 0 && index < options.length)
          || new Set(answer).size !== answer.length
          || (type === 'single' ? answer.length !== 1 : answer.length < 2)) {
        throw new Error(`题目 ${id} 的答案有误。`);
      }
      ids.add(id);
    }
    return bank;
  }

  function eligibleGroups(bank, excludedIds) {
    const excluded = new Set(excludedIds);
    return blueprint.map((group) => ({
      ...group,
      questions: bank.filter((question) => question.type === group.type
        && question.points === group.points && !excluded.has(question.id)),
    }));
  }

  function availability(bank, excludedIds = []) {
    return eligibleGroups(bank, excludedIds).map(({ questions, ...group }) => ({
      ...group,
      available: questions.length,
    }));
  }

  function shuffle(items) {
    const shuffled = items.slice();
    for (let index = shuffled.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function makeExam(bank, excludedIds = []) {
    const groups = eligibleGroups(bank, excludedIds);
    if (groups.some(({ questions, required }) => questions.length < required)) {
      throw new Error('剩余题目不足以按指定配额生成一套完整试卷。');
    }
    const usedFamilies = new Set();
    const exam = [];
    for (const { questions, required } of groups) {
      const distinct = [];
      const similar = [];
      for (const question of shuffle(questions)) {
        if (question.family && usedFamilies.has(question.family)) {
          similar.push(question);
        } else {
          distinct.push(question);
          if (question.family) usedFamilies.add(question.family);
          if (distinct.length === required) break;
        }
      }
      exam.push(...distinct, ...similar.slice(0, required - distinct.length));
    }
    return shuffle(exam);
  }

  function grade(exam, answersById) {
    const summary = { score: 0, full: 0, partial: 0, zero: 0, unanswered: 0, results: [] };
    for (const question of exam) {
      const raw = answersById[question.id];
      const selected = Array.isArray(raw) ? [...new Set(raw)] : [];
      const correct = question.answer.slice();
      const validChoices = selected.every((index) => correct.includes(index));
      let status = 'incorrect';
      let score = 0;
      if (selected.length === 0) {
        status = 'unanswered';
        summary.unanswered++;
      } else if (validChoices && selected.length === correct.length) {
        status = 'correct';
        score = question.points;
        summary.full++;
      } else if (validChoices && question.type === 'multiple') {
        status = 'partial';
        score = 1;
        summary.partial++;
      }
      if (score === 0) summary.zero++;
      summary.score += score;
      summary.results.push({ id: question.id, score, max: question.points, selected, correct, status });
    }
    return summary;
  }

  function emptyProgress() {
    return { answeredIds: [], attempts: [], draft: null, questionHistory: {} };
  }

  function validId(id) {
    return typeof id === 'string' && /^[A-Za-z0-9_-]{1,100}$/.test(id);
  }

  function validDate(date) {
    return typeof date === 'string' && Number.isFinite(Date.parse(date));
  }

  function validAttempt(attempt) {
    return attempt && validId(attempt.id) && validDate(attempt.date)
      && Number.isInteger(attempt.score) && attempt.score >= 0 && attempt.score <= 100
      && attempt.total === examLength && Number.isInteger(attempt.answered)
      && attempt.answered >= 0 && attempt.answered <= examLength;
  }

  function validOptionIndexes(selected) {
    return Array.isArray(selected)
      && selected.every((index) => Number.isInteger(index) && index >= 0 && index < 32);
  }

  function normalizeQuestionHistory(history) {
    if (history === undefined) return {};
    if (!history || typeof history !== 'object' || Array.isArray(history)) {
      throw new Error('备份中的已做题记录无效。');
    }
    return Object.fromEntries(Object.entries(history).map(([id, item]) => {
      if (!validId(id) || !item || !validOptionIndexes(item.selected) || !item.selected.length
          || !validDate(item.date) || !Number.isInteger(item.max) || item.max < 1 || item.max > 3
          || !Number.isInteger(item.score) || item.score < 0 || item.score > item.max
          || typeof item.hadMistake !== 'boolean') {
        throw new Error('备份中的已做题记录无效。');
      }
      const { selected, score, max, date, hadMistake } = item;
      return [id, { selected: [...new Set(selected)], score, max, date, hadMistake: hadMistake || score < max }];
    }));
  }

  function recordSubmission(progress, results, date) {
    const history = new Map(Object.entries(progress.questionHistory ?? {}));
    const answered = new Set(progress.answeredIds);
    for (const { id, selected, score, max } of results) {
      if (!selected.length) continue;
      const previous = history.get(id);
      const current = { selected, score, max, date, hadMistake: score < max };
      history.set(id, mergeQuestionRecord(current, previous));
      answered.add(id);
    }
    return { ...progress, answeredIds: [...answered], questionHistory: Object.fromEntries(history) };
  }

  function mergeQuestionRecord(current, imported) {
    if (!current || !imported) return current ?? imported;
    const latest = Date.parse(imported.date) > Date.parse(current.date) ? imported : current;
    return { ...latest, hadMistake: current.hadMistake || imported.hadMistake };
  }

  function normalizeDraft(draft) {
    if (draft === null || draft === undefined) return null;
    const { questionIds, answers, position, startedAt } = draft;
    if (!Array.isArray(questionIds) || questionIds.length !== examLength
        || !questionIds.every(validId) || new Set(questionIds).size !== examLength
        || !answers || typeof answers !== 'object' || Array.isArray(answers)
        || !Number.isInteger(position) || position < 0 || position >= examLength
        || !validDate(startedAt)) {
      throw new Error('记录中的未交卷内容无效。');
    }
    const normalizedAnswers = Object.create(null);
    for (const [id, selected] of Object.entries(answers)) {
      if (!questionIds.includes(id) || !validOptionIndexes(selected)) {
        throw new Error('记录中的答题选项无效。');
      }
      normalizedAnswers[id] = [...new Set(selected)];
    }
    return { questionIds, answers: normalizedAnswers, position, startedAt };
  }

  function parseBackup(text) {
    let record;
    try {
      record = JSON.parse(text);
    } catch {
      throw new Error('无法读取记录文件，请选择导出的 JSON 备份。');
    }
    if (!record || record.version !== 1 || !Array.isArray(record.answeredIds)
        || !record.answeredIds.every(validId) || !Array.isArray(record.attempts)
        || !record.attempts.every(validAttempt)) {
      throw new Error('备份格式有误或版本不受支持。');
    }
    const attempts = record.attempts.map(({ id, date, score, answered, total }) => ({
      id, date, score, answered, total,
    }));
    const questionHistory = normalizeQuestionHistory(record.questionHistory);
    return {
      answeredIds: [...new Set([...record.answeredIds, ...Object.keys(questionHistory)])],
      attempts: [...new Map(attempts.map((attempt) => [attempt.id, attempt])).values()],
      draft: normalizeDraft(record.draft),
      questionHistory,
    };
  }

  function loadProgress(storage) {
    const text = storage.getItem(storageKey);
    return text === null ? emptyProgress() : parseBackup(text);
  }

  function saveProgress(storage, progress) {
    storage.setItem(storageKey, JSON.stringify({ version: 1, ...progress }));
  }

  function mergeProgress(current, imported) {
    const byId = new Map([...imported.attempts, ...current.attempts].map((attempt) => [attempt.id, attempt]));
    const history = new Map(Object.entries(imported.questionHistory ?? {}));
    for (const [id, entry] of Object.entries(current.questionHistory ?? {})) {
      history.set(id, mergeQuestionRecord(entry, history.get(id)));
    }
    return {
      answeredIds: [...new Set([...current.answeredIds, ...imported.answeredIds, ...history.keys()])],
      attempts: [...byId.values()].sort((left, right) => Date.parse(right.date) - Date.parse(left.date)),
      draft: current.draft ?? imported.draft,
      questionHistory: Object.fromEntries(history),
    };
  }

  root.HeatExam = { validateBank, availability, makeExam, grade, loadProgress, saveProgress, parseBackup, mergeProgress, recordSubmission };
})(typeof window === 'undefined' ? globalThis : window);
