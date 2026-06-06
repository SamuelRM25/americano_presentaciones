const Exercises = (() => {
  function renderOption(question, className = '') {
    return `
      <label class="opt ${className}">
        <input type="radio" name="${escapeHTML(question.name)}" value="${escapeHTML(question.value)}">
        <span>${escapeHTML(question.label)}</span>
      </label>
    `;
  }

  function renderMultipleChoice(ex, gradeId, classId) {
    const state = Progress.getClassState(gradeId, classId);
    const saved = state.exercises[ex.id] || {};
    return `
      <div class="exercise" data-ex-id="${escapeHTML(ex.id)}">
        <div class="q-prompt"><span class="q-num">${ex.n}</span>${escapeHTML(ex.prompt)}</div>
        <div class="opts">
          ${ex.options.map(o => `
            <label class="opt ${saved.answer === o.value ? 'selected' : ''}" data-value="${escapeHTML(o.value)}">
              <input type="radio" name="ex-${escapeHTML(ex.id)}" value="${escapeHTML(o.value)}" ${saved.answer === o.value ? 'checked' : ''}>
              <span>${escapeHTML(o.label)}</span>
            </label>
          `).join('')}
        </div>
        <button class="btn btn-sm btn-secondary check-btn" style="margin-top:0.7rem">Verificar</button>
        <div class="feedback" style="display:none"></div>
      </div>
    `;
  }

  function renderTrueFalse(ex, gradeId, classId) {
    return renderMultipleChoice({
      ...ex,
      options: [
        { value: 'true', label: '✅ Verdadero' },
        { value: 'false', label: '❌ Falso' },
      ],
    }, gradeId, classId);
  }

  function renderFillBlank(ex, gradeId, classId) {
    const state = Progress.getClassState(gradeId, classId);
    const saved = state.exercises[ex.id] || {};
    return `
      <div class="exercise" data-ex-id="${escapeHTML(ex.id)}">
        <div class="q-prompt"><span class="q-num">${ex.n}</span>${escapeHTML(ex.prompt)}</div>
        <input type="text" data-fill="${escapeHTML(ex.id)}" placeholder="Escribe la respuesta..." value="${escapeHTML(saved.answer || '')}">
        <button class="btn btn-sm btn-secondary check-btn" style="margin-top:0.7rem">Verificar</button>
        <div class="feedback" style="display:none"></div>
      </div>
    `;
  }

  function attachHandlers(container, gradeId, classId, exerciseData) {
    container.querySelectorAll('.exercise').forEach((card) => {
      const exId = card.getAttribute('data-ex-id');
      const ex = exerciseData.find(e => e.id === exId);
      if (!ex) return;

      const checkBtn = card.querySelector('.check-btn');
      const feedback = card.querySelector('.feedback');

      const onCheck = () => {
        let userAnswer = null;
        if (ex.type === 'mc' || ex.type === 'tf') {
          const checked = card.querySelector('input[type="radio"]:checked');
          if (!checked) { Toast.show('Selecciona una opción', 'warn'); return; }
          userAnswer = checked.value;
        } else if (ex.type === 'fill') {
          const inp = card.querySelector('input[data-fill]');
          userAnswer = (inp.value || '').trim();
          if (!userAnswer) { Toast.show('Escribe una respuesta', 'warn'); return; }
        }

        const correct = ex.type === 'mc' || ex.type === 'tf'
          ? userAnswer === ex.answer
          : userAnswer.toLowerCase() === String(ex.answer).toLowerCase();

        Progress.setExercise(gradeId, classId, exId, { answered: true, answer: userAnswer, correct });
        Progress.syncToServer(gradeId);

        card.querySelectorAll('.opt').forEach(o => {
          o.classList.remove('selected', 'correct', 'wrong');
          const v = o.getAttribute('data-value');
          if (v === ex.answer) o.classList.add('correct');
          if (v === userAnswer && userAnswer !== ex.answer) o.classList.add('wrong');
        });

        feedback.style.display = 'block';
        if (correct) {
          feedback.className = 'feedback ok';
          feedback.innerHTML = '✅ ¡Correcto! ' + (ex.explain_ok || '');
          checkBtn.disabled = true;
          checkBtn.setAttribute('aria-disabled', 'true');
        } else {
          feedback.className = 'feedback bad';
          feedback.innerHTML = '❌ Incorrecto. ' + (ex.explain || '');
        }
      };

      checkBtn.addEventListener('click', onCheck);

      card.querySelectorAll('.opt').forEach(opt => {
        opt.addEventListener('click', () => {
          card.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          const inp = opt.querySelector('input[type="radio"]');
          if (inp) inp.checked = true;
        });
      });
    });
  }

  return { renderMultipleChoice, renderTrueFalse, renderFillBlank, attachHandlers };
})();
