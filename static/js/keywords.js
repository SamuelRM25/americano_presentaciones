const Keywords = (() => {
  function renderKeywordCard(gradeId, classId, term, hint) {
    const state = Progress.getClassState(gradeId, classId);
    const def = state.keywords[term] || '';
    return `
      <div class="kw-card ${def.trim() ? 'saved' : ''}" data-term="${escapeHTML(term)}">
        <span class="kw-term">${escapeHTML(term)}</span>
        <textarea placeholder="Escribe aquí tu definición después de investigar..." data-kw="${escapeHTML(term)}">${escapeHTML(def)}</textarea>
        <div class="kw-hint">${escapeHTML(hint || '💡 Investiga y luego escribe la definición con tus propias palabras.')}</div>
      </div>
    `;
  }

  function attachHandlers(container, gradeId, classId) {
    container.querySelectorAll('textarea[data-kw]').forEach((ta) => {
      let saveTimer = null;
      ta.addEventListener('input', () => {
        clearTimeout(saveTimer);
        const term = ta.getAttribute('data-kw');
        saveTimer = setTimeout(() => {
          Progress.setKeyword(gradeId, classId, term, ta.value);
          const card = ta.closest('.kw-card');
          if (ta.value.trim()) card.classList.add('saved');
          else card.classList.remove('saved');
          Progress.syncToServer(gradeId);
        }, 600);
      });
      ta.addEventListener('blur', () => {
        const term = ta.getAttribute('data-kw');
        Progress.setKeyword(gradeId, classId, term, ta.value);
        const card = ta.closest('.kw-card');
        if (ta.value.trim()) card.classList.add('saved');
        else card.classList.remove('saved');
        Progress.syncToServer(gradeId);
      });
    });
  }

  return { renderKeywordCard, attachHandlers };
})();
