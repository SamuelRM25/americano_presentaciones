const App = (() => {
  async function initTopbar(grade, student) {
    const bar = document.querySelector('.topbar');
    if (!bar) return;
    bar.innerHTML = `
      <a href="/" class="brand" style="text-decoration:none">
        <span class="logo">🎓</span>
        <span>Americano</span>
      </a>
      <span class="badge badge-primary">${escapeHTML(grade.label)}</span>
      <div class="meta">
        <span class="student-chip">
          <span class="dot"></span>
          <span>${escapeHTML(student.nombre)} ${escapeHTML(student.apellido)}</span>
        </span>
        <button class="btn btn-sm btn-ghost" id="change-student" title="Cambiar de estudiante">↻</button>
      </div>
    `;
    document.getElementById('change-student').addEventListener('click', () => {
      if (confirm('¿Cambiar de estudiante? Se perderá el progreso local no sincronizado.')) {
        Student.clear();
        location.reload();
      }
    });
  }

  function makeSlideNav(deck, slides, onChange) {
    const nav = document.createElement('div');
    nav.className = 'slide-nav';
    nav.innerHTML = `
      <button class="btn btn-secondary prev">← Anterior</button>
      <span class="slide-progress"></span>
      <button class="btn btn-primary next">Siguiente →</button>
    `;
    deck.appendChild(nav);
    const prev = nav.querySelector('.prev');
    const next = nav.querySelector('.next');
    const progress = nav.querySelector('.slide-progress');
    let idx = 0;
    function show(i) {
      slides.forEach((s, j) => s.style.display = j === i ? 'block' : 'none');
      progress.textContent = `${i + 1} / ${slides.length}`;
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
      prev.setAttribute('aria-disabled', prev.disabled);
      next.setAttribute('aria-disabled', next.disabled);
      idx = i;
      if (onChange) onChange(i);
    }
    prev.addEventListener('click', () => idx > 0 && show(idx - 1));
    next.addEventListener('click', () => idx < slides.length - 1 && show(idx + 1));
    show(0);
    return { show, getIndex: () => idx };
  }

  return { initTopbar, makeSlideNav };
})();
