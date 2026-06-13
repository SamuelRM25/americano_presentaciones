const API = (() => {
  const base = window.location.origin;

  async function request(path, options = {}) {
    const opts = {
      method: options.method || 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    };
    if (options.body) opts.body = JSON.stringify(options.body);
    try {
      const res = await fetch(base + path, opts);
      const text = await res.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch { data = text; }
      if (!res.ok) {
        return { ok: false, status: res.status, error: (data && data.error) || res.statusText, data };
      }
      return { ok: true, status: res.status, data };
    } catch (e) {
      return { ok: false, error: 'Error de red: ' + e.message };
    }
  }

  return {
    studentLoad: (grade, nombre, apellido) => request(`/api/student/load?grade=${grade}&nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}`),
    studentSave: (payload) => request('/api/student/save', { method: 'POST', body: payload }),
    adminLogin: (password) => request('/api/admin/login', { method: 'POST', body: { password } }),
    adminLogout: () => request('/api/admin/logout', { method: 'POST' }),
    adminData: (grade) => request(`/api/admin/data${grade ? '?grade=' + grade : ''}`),
    adminConfig: (cfg) => request('/api/admin/config', { method: 'POST', body: cfg }),
    adminConfigGet: () => request('/api/admin/config'),
    adminSetActiveGrade: (gradeId) => request('/api/admin/active-grade', { method: 'POST', body: { grade_id: gradeId } }),
    exportGoogleForms: (records) => request('/api/export/google-forms', { method: 'POST', body: { records } }),
  };
})();

const Toast = (() => {
  function show(message, type = 'info', duration = 3500) {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = message;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.transition = 'opacity 300ms, transform 300ms';
      t.style.opacity = '0';
      t.style.transform = 'translateY(20px)';
      setTimeout(() => t.remove(), 320);
    }, duration);
  }
  return { show };
})();

function escapeHTML(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(iso) {
  if (!iso) return '—';
  try {
    const d = new Date(iso);
    return d.toLocaleString('es-GT', { dateStyle: 'short', timeStyle: 'short' });
  } catch { return iso; }
}
