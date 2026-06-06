const Tasks = (() => {
  function renderTask(gradeId, classId, task) {
    const state = Progress.getClassState(gradeId, classId);
    const t = state.tasks[task.id] || {};
    const done = !!t.done;
    return `
      <div class="task-item ${done ? 'done' : ''}" data-task-id="${escapeHTML(task.id)}">
        <div class="task-check ${done ? 'done' : ''}" data-task-toggle></div>
        <div class="task-body">
          <h5>${escapeHTML(task.title)}</h5>
          <p>${escapeHTML(task.description)}</p>
          ${task.evidence ? `<p style="color:var(--text-faint);font-size:0.82rem">📎 ${escapeHTML(task.evidence)}</p>` : ''}
          <textarea placeholder="Notas, evidencia o respuesta (opcional)..." data-task-notes>${escapeHTML(t.notes || '')}</textarea>
        </div>
      </div>
    `;
  }

  function attachHandlers(container, gradeId, classId) {
    container.querySelectorAll('[data-task-toggle]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const item = toggle.closest('.task-item');
        const id = item.getAttribute('data-task-id');
        const state = Progress.getClassState(gradeId, classId);
        const current = state.tasks[id] || {};
        const done = !current.done;
        toggle.classList.toggle('done', done);
        item.classList.toggle('done', done);
        Progress.setTask(gradeId, classId, id, { done });
        Progress.syncToServer(gradeId);
        if (done) Toast.show('✅ Tarea marcada como completada', 'success', 2000);
      });
    });
    container.querySelectorAll('textarea[data-task-notes]').forEach(ta => {
      let timer = null;
      ta.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          const item = ta.closest('.task-item');
          const id = item.getAttribute('data-task-id');
          Progress.setTask(gradeId, classId, id, { notes: ta.value });
          Progress.syncToServer(gradeId);
        }, 600);
      });
    });
  }

  return { renderTask, attachHandlers };
})();
