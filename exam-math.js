(function (root) {
  'use strict';

  const delimiters = /\\\(([\s\S]+?)\\\)|\\\[([\s\S]+?)\\\]/g;

  function append(target, content) {
    const document = target.ownerDocument;
    let offset = 0;
    for (const match of content.matchAll(delimiters)) {
      if (match.index > offset) target.append(document.createTextNode(content.slice(offset, match.index)));
      const displayMode = match[2] !== undefined;
      const formula = match[1] ?? match[2];
      const element = document.createElement('span');
      element.className = displayMode ? 'exam-math exam-math-display' : 'exam-math';
      if (root.katex) {
        root.katex.render(formula, element, { displayMode, throwOnError: false, strict: 'ignore', trust: false });
      } else {
        element.textContent = formula;
      }
      target.append(element);
      offset = match.index + match[0].length;
    }
    if (offset < content.length) target.append(document.createTextNode(content.slice(offset)));
  }

  root.HeatMath = { append };
})(window);
