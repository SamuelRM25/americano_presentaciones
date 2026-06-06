const Exam = (() => {
  function renderMiniExam(gradeId, classId, questions, opts = {}) {
    const state = Progress.getClassState(gradeId, classId);
    const taken = state.exam_taken;
    const score = state.exam_score;
    const total = state.exam_total;
    const examId = opts.examId || `${classId}_mini`;

    if (taken) {
      const pct = total > 0 ? Math.round((score / total) * 100) : 0;
      const pass = pct >= (opts.passMark || 60);
      return `
        <div class="exam-card" data-exam-id="${escapeHTML(examId)}">
          <h3>📝 ${escapeHTML(opts.title || 'Mini-examen')} <span class="badge badge-info">Realizado</span></h3>
          <div class="exam-result">
            <div class="emoji">${pass ? '🏆' : '📚'}</div>
            <div class="score">${score}/${total}</div>
            <div class="verdict ${pass ? 'pass' : 'fail'}">${pass ? '¡Aprobado!' : 'Necesitas repasar'}</div>
            <p>${pct}% de respuestas correctas</p>
            <div style="margin-top:1.2rem">
              <button class="btn btn-secondary retake-btn">↻ Volver a intentar</button>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="exam-card" data-exam-id="${escapeHTML(examId)}">
        <h3>📝 ${escapeHTML(opts.title || 'Mini-examen')} <span class="badge badge-warning">Pendiente</span></h3>
        <p style="color:var(--text-mute);margin-bottom:1rem">${escapeHTML(opts.description || 'Demuestra lo aprendido en esta clase.')}</p>
        <form class="exam-form">
          ${questions.map((q, i) => renderQuestion(q, i + 1, examId)).join('')}
          <button type="submit" class="btn btn-primary btn-lg" style="width:100%;margin-top:1rem">Enviar respuestas 🎯</button>
        </form>
      </div>
    `;
  }

  function renderQuestion(q, n, examId) {
    if (q.type === 'mc' || q.type === 'tf') {
      const opts = q.type === 'tf'
        ? [{ value: 'true', label: 'Verdadero' }, { value: 'false', label: 'Falso' }]
        : q.options;
      return `
        <div class="exercise" data-q-id="${escapeHTML(q.id)}">
          <div class="q-prompt"><span class="q-num">${n}</span>${escapeHTML(q.prompt)}</div>
          <div class="opts">
            ${opts.map(o => `
              <label class="opt" data-value="${escapeHTML(o.value)}">
                <input type="radio" name="q-${escapeHTML(examId)}-${escapeHTML(q.id)}" value="${escapeHTML(o.value)}">
                <span>${escapeHTML(o.label)}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    } else if (q.type === 'fill') {
      return `
        <div class="exercise" data-q-id="${escapeHTML(q.id)}">
          <div class="q-prompt"><span class="q-num">${n}</span>${escapeHTML(q.prompt)}</div>
          <input type="text" data-fill-q="${escapeHTML(q.id)}" placeholder="Respuesta...">
        </div>
      `;
    }
    return '';
  }

  function attachMiniExam(container, gradeId, classId, questions, opts = {}) {
    const examId = opts.examId || `${classId}_mini`;
    const card = container.querySelector(`[data-exam-id="${examId}"]`);
    if (!card) return;

    const retake = card.querySelector('.retake-btn');
    if (retake) {
      retake.addEventListener('click', () => {
        Progress.setClassState(gradeId, classId, { exam_taken: false, exam_score: null, exam_total: null });
        renderInto(container, gradeId, classId, questions, opts);
      });
      return;
    }

    const form = card.querySelector('.exam-form');
    card.querySelectorAll('.opt').forEach(opt => {
      opt.addEventListener('click', () => {
        opt.closest('.opts').querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        const inp = opt.querySelector('input');
        if (inp) inp.checked = true;
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let score = 0;
      const answers = {};
      questions.forEach(q => {
        let userAnswer = null;
        if (q.type === 'mc' || q.type === 'tf') {
          const checked = card.querySelector(`input[name="q-${examId}-${q.id}"]:checked`);
          userAnswer = checked ? checked.value : null;
        } else if (q.type === 'fill') {
          const inp = card.querySelector(`[data-fill-q="${q.id}"]`);
          userAnswer = inp ? inp.value.trim() : '';
        }
        answers[q.id] = userAnswer;
        const correct = q.type === 'mc' || q.type === 'tf'
          ? userAnswer === q.answer
          : (userAnswer || '').toLowerCase() === String(q.answer).toLowerCase();
        if (correct) score++;
        const exCard = card.querySelector(`[data-q-id="${q.id}"]`);
        if (exCard) {
          exCard.querySelectorAll('.opt').forEach(o => {
            const v = o.getAttribute('data-value');
            if (v === q.answer) o.classList.add('correct');
            if (v === userAnswer && userAnswer !== q.answer) o.classList.add('wrong');
          });
        }
      });
      Progress.setExam(gradeId, classId, score, questions.length, answers);
      Progress.syncToServer(gradeId);
      Toast.show(`📊 Resultado: ${score}/${questions.length}`, score / questions.length >= 0.6 ? 'success' : 'warn');
      renderInto(container, gradeId, classId, questions, opts);
    });
  }

  function renderInto(container, gradeId, classId, questions, opts) {
    const html = renderMiniExam(gradeId, classId, questions, opts);
    const card = container.querySelector(`[data-exam-id="${opts.examId || classId + '_mini'}"]`);
    if (card) card.outerHTML = html;
    attachMiniExam(container, gradeId, classId, questions, opts);
  }

  return { renderMiniExam, attachMiniExam };
})();
