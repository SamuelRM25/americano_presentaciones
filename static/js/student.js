const Student = (() => {
  const STORAGE_KEY = 'americano_student';

  function get() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); }
    catch { return null; }
  }

  function set(student) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(student));
  }

  function clear() {
    localStorage.removeItem(STORAGE_KEY);
  }

  async function promptForName(gradeId) {
    return new Promise((resolve) => {
      const existing = get();
      const overlay = document.createElement('div');
      overlay.className = 'welcome-overlay';
      overlay.innerHTML = `
        <div class="welcome-card">
          <div class="emoji">🎓</div>
          <h1>¡Bienvenido/a!</h1>
          <p>Ingresa tu nombre y apellido para registrar tu progreso en este grado.</p>
          <form id="welcome-form">
            <div class="field">
              <label>Nombre</label>
              <input type="text" id="welcome-nombre" required autocomplete="given-name" placeholder="Tu nombre" value="${escapeHTML(existing?.nombre || '')}">
            </div>
            <div class="field">
              <label>Apellido</label>
              <input type="text" id="welcome-apellido" required autocomplete="family-name" placeholder="Tu apellido" value="${escapeHTML(existing?.apellido || '')}">
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;margin-top:0.5rem">Entrar 🚀</button>
          </form>
        </div>
      `;
      document.body.appendChild(overlay);
      const form = overlay.querySelector('#welcome-form');
      const inputNombre = overlay.querySelector('#welcome-nombre');
      const inputApellido = overlay.querySelector('#welcome-apellido');
      setTimeout(() => inputNombre.focus(), 100);
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = inputNombre.value.trim();
        const apellido = inputApellido.value.trim();
        if (!nombre || !apellido) {
          Toast.show('Por favor ingresa nombre y apellido', 'warn');
          return;
        }
        const student = { nombre, apellido, grade: gradeId, created_at: new Date().toISOString() };
        set(student);
        overlay.style.animation = 'fade-in 300ms reverse';
        setTimeout(() => { overlay.remove(); resolve(student); }, 280);
      });
    });
  }

  async function ensure(gradeId) {
    let s = get();
    if (!s || s.grade !== gradeId) {
      s = await promptForName(gradeId);
      set(s);
    }
    return s;
  }

  return { get, set, clear, ensure, promptForName };
})();
