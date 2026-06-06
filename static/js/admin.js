(async function() {
  const state = {
    selectedGrade: 'all',
    data: null,
    selectedStudent: null,
  };

  function fmtDate(iso) {
    if (!iso) return '—';
    try { return new Date(iso).toLocaleString('es-GT', { dateStyle: 'short', timeStyle: 'short' }); }
    catch { return iso; }
  }

  function gradeProgress(gradeData, gradeId) {
    const students = gradeData?.students || [];
    if (students.length === 0) return 0;
    let totalPct = 0;
    students.forEach(s => {
      const progress = s.progress || {};
      const exams = s.exams || {};
      const classes = Object.keys(progress).length;
      const totalClasses = GRADES[gradeId]?.classCount || 6;
      totalPct += Math.min(100, (classes / totalClasses) * 100);
    });
    return Math.round(totalPct / students.length);
  }

  function renderStats() {
    const stats = document.getElementById('stats');
    const allData = state.data || {};
    let totalStudents = 0;
    let totalExamsTaken = 0;
    let totalKeywords = 0;
    let activeGrades = 0;
    Object.entries(GRADES).forEach(([gid, g]) => {
      if (!g.ready) return;
      const gd = allData[gid];
      if (!gd || !gd.students || gd.students.length === 0) return;
      activeGrades++;
      gd.students.forEach(s => {
        totalStudents++;
        Object.values(s.exams || {}).forEach(e => { if (e?.taken) totalExamsTaken++; });
        Object.values(s.keywords || {}).forEach(clsKws => {
          totalKeywords += Object.values(clsKws || {}).filter(v => (v || '').trim().length > 0).length;
        });
      });
    });
    stats.innerHTML = `
      <div class="stat-card">
        <div class="label">Estudiantes activos</div>
        <div class="value">${totalStudents}</div>
        <div class="sub">en ${activeGrades} grado(s)</div>
      </div>
      <div class="stat-card">
        <div class="label">Exámenes rendidos</div>
        <div class="value">${totalExamsTaken}</div>
        <div class="sub">mini + finales</div>
      </div>
      <div class="stat-card">
        <div class="label">Palabras investigadas</div>
        <div class="value">${totalKeywords}</div>
        <div class="sub">definiciones escritas</div>
      </div>
      <div class="stat-card">
        <div class="label">Grado seleccionado</div>
        <div class="value" style="font-size:1.4rem">${escapeHTML(GRADES[state.selectedGrade]?.label || 'Todos')}</div>
        <div class="sub">${state.selectedGrade === 'all' ? 'Vista general' : 'Detalle por estudiante'}</div>
      </div>
    `;
  }

  function renderGradeSelector() {
    const sel = document.getElementById('grade-selector');
    const options = [{ id: 'all', label: '🌐 Todos' }];
    Object.entries(GRADES).forEach(([gid, g]) => {
      if (!g.ready) return;
      options.push({ id: gid, label: g.label });
    });
    sel.innerHTML = options.map(o => `
      <button class="chip ${state.selectedGrade === o.id ? 'active' : ''}" data-grade="${o.id}">${escapeHTML(o.label)}</button>
    `).join('');
    sel.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.selectedGrade = chip.getAttribute('data-grade');
        state.selectedStudent = null;
        renderGradeSelector();
        renderStudents();
        renderStats();
      });
    });
    document.getElementById('grade-count').textContent = options.length - 1 + ' disponibles';
  }

  function renderStudents() {
    const area = document.getElementById('students-area');
    if (state.selectedGrade === 'all') {
      const allData = state.data || {};
      const blocks = Object.entries(GRADES)
        .filter(([_, g]) => g.ready)
        .map(([gid, g]) => {
          const gd = allData[gid];
          const students = gd?.students || [];
          if (students.length === 0) return '';
          return `
            <div style="margin-bottom:1.5rem">
              <h3 style="margin-bottom:0.7rem;color:var(--primary-light)">${escapeHTML(g.label)} <span class="badge badge-primary">${students.length} estudiantes</span></h3>
              ${renderStudentsTable(students, gid)}
            </div>
          `;
        }).join('');
      area.innerHTML = blocks || '<div class="empty-state"><div class="icon">📭</div><h3>Sin datos aún</h3><p>Los estudiantes aún no han guardado progreso.</p></div>';
      return;
    }
    const gd = state.data?.[state.selectedGrade];
    const students = gd?.students || [];
    if (students.length === 0) {
      area.innerHTML = '<div class="empty-state"><div class="icon">👥</div><h3>Sin estudiantes aún</h3><p>Cuando un estudiante ingrese a este grado, aparecerá aquí.</p></div>';
      return;
    }
    area.innerHTML = renderStudentsTable(students, state.selectedGrade);
    attachTableHandlers();
  }

  function renderStudentsTable(students, gradeId) {
    return `
      <div style="overflow-x:auto">
        <table class="students-table">
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Última actividad</th>
              <th>Progreso</th>
              <th>Exámenes</th>
              <th>Palabras</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${students.map(s => {
              const classes = Object.keys(s.progress || {}).length;
              const totalCls = 6;
              const pct = Math.round((classes / totalCls) * 100);
              const examCount = Object.values(s.exams || {}).filter(e => e?.taken).length;
              const kwCount = Object.values(s.keywords || {}).reduce((acc, kws) => acc + Object.values(kws || {}).filter(v => (v || '').trim().length > 0).length, 0);
              return `
                <tr data-student-key="${escapeHTML(s.key)}">
                  <td><strong>${escapeHTML(s.nombre)} ${escapeHTML(s.apellido)}</strong></td>
                  <td>${fmtDate(s.last_active)}</td>
                  <td class="progress-cell">
                    <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
                    <small style="color:var(--text-mute)">${pct}% · ${classes}/${totalCls} clases</small>
                  </td>
                  <td>${examCount > 0 ? `<span class="badge badge-success">${examCount}</span>` : '<span style="color:var(--text-faint)">0</span>'}</td>
                  <td>${kwCount}</td>
                  <td class="actions">
                    <button class="btn btn-sm btn-secondary view-btn" data-key="${escapeHTML(s.key)}">👁️ Ver</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
      <div id="student-detail"></div>
    `;
  }

  function attachTableHandlers() {
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.getAttribute('data-key');
        showStudentDetail(key);
      });
    });
    document.querySelectorAll('.students-table tbody tr').forEach(tr => {
      tr.addEventListener('click', () => {
        const key = tr.getAttribute('data-student-key');
        showStudentDetail(key);
      });
    });
  }

  function showStudentDetail(key) {
    let gd, s;
    if (state.selectedGrade === 'all') {
      for (const [gid, data] of Object.entries(state.data || {})) {
        const found = (data.students || []).find(x => x.key === key);
        if (found) { gd = gid; s = found; break; }
      }
    } else {
      gd = state.selectedGrade;
      s = (state.data?.[gd]?.students || []).find(x => x.key === key);
    }
    if (!s) return;
    const detail = document.getElementById('student-detail');
    const classes = Object.entries(s.progress || {});
    const exams = Object.entries(s.exams || {});
    const kws = Object.entries(s.keywords || {});
    const tasks = Object.entries(s.tasks || {});
    detail.innerHTML = `
      <div class="student-detail">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
          <div style="font-size:2.5rem">🎓</div>
          <div>
            <h3 style="font-size:1.4rem;background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;color:transparent">${escapeHTML(s.nombre)} ${escapeHTML(s.apellido)}</h3>
            <p style="color:var(--text-mute);font-size:0.88rem">${escapeHTML(GRADES[gd]?.label || gd)} · creado ${fmtDate(s.created_at)}</p>
          </div>
          <button class="btn btn-ghost btn-sm" style="margin-left:auto" id="close-detail">✕ Cerrar</button>
        </div>

        ${classes.length > 0 ? `
          <div class="field">
            <div class="field-label">📊 Progreso por clase</div>
            ${classes.map(([cid, cp]) => `
              <div style="background:var(--surface);padding:0.8rem;border-radius:var(--radius-sm);margin-bottom:0.5rem">
                <strong>${escapeHTML(cid)}</strong> · ${(cp.visited_slides || []).length} pantallas visitadas · ${Object.keys(cp.exercises || {}).length} ejercicios respondidos
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${exams.length > 0 ? `
          <div class="field">
            <div class="field-label">🎯 Exámenes</div>
            ${exams.map(([cid, ex]) => `
              <div style="background:var(--surface);padding:0.8rem;border-radius:var(--radius-sm);margin-bottom:0.5rem;display:flex;align-items:center;gap:0.8rem">
                <span style="flex:1"><strong>${escapeHTML(cid)}</strong> · ${fmtDate(ex.at)}</span>
                <span class="badge ${ex.score / (ex.total || 1) >= 0.6 ? 'badge-success' : 'badge-warning'}">${ex.score || 0}/${ex.total || 0}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${kws.length > 0 ? `
          <div class="field">
            <div class="field-label">🔑 Definiciones de palabras clave</div>
            ${kws.map(([cid, kwsObj]) => Object.entries(kwsObj).filter(([_, v]) => (v || '').trim().length > 0).map(([term, def]) => `
              <div style="background:var(--surface);padding:0.8rem;border-radius:var(--radius-sm);margin-bottom:0.5rem">
                <strong style="color:var(--primary-light)">${escapeHTML(term)}</strong>
                <span style="color:var(--text-mute);font-size:0.82rem"> · ${escapeHTML(cid)}</span>
                <p style="margin-top:0.3rem;color:var(--text-soft)">${escapeHTML(def)}</p>
              </div>
            `).join('')).join('')}
          </div>
        ` : ''}

        ${tasks.length > 0 ? `
          <div class="field">
            <div class="field-label">📝 Tareas</div>
            ${tasks.map(([cid, tksObj]) => Object.entries(tksObj).map(([tid, t]) => `
              <div style="background:var(--surface);padding:0.8rem;border-radius:var(--radius-sm);margin-bottom:0.5rem">
                <strong>${escapeHTML(tid)}</strong> <span class="badge ${t.done ? 'badge-success' : 'badge-warning'}">${t.done ? '✓ hecha' : 'pendiente'}</span>
                <span style="color:var(--text-mute);font-size:0.82rem"> · ${escapeHTML(cid)}</span>
                ${t.notes ? `<p style="margin-top:0.3rem;color:var(--text-soft)">${escapeHTML(t.notes)}</p>` : ''}
              </div>
            `).join('')).join('')}
          </div>
        ` : ''}

        <details>
          <summary style="cursor:pointer;color:var(--text-soft);font-weight:600;padding:0.5rem 0">🗂️ Ver JSON completo</summary>
          <pre>${escapeHTML(JSON.stringify(s, null, 2))}</pre>
        </details>
      </div>
    `;
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('close-detail').addEventListener('click', () => { detail.innerHTML = ''; });
  }

  async function loadAll() {
    const res = await API.adminData();
    if (!res.ok) {
      if (res.status === 401) { location.href = '/admin'; return; }
      Toast.show('Error cargando datos: ' + (res.error || ''), 'error');
      return;
    }
    state.data = res.data;
    renderStats();
    renderGradeSelector();
    renderStudents();
  }

  async function loadConfig() {
    const res = await API.adminConfigGet();
    if (!res.ok) return;
    const cfg = res.data;
    document.getElementById('cfg-password').value = cfg.admin?.password || '';
    document.getElementById('cfg-form-url').value = cfg.google_forms?.form_url || '';
    document.getElementById('cfg-enabled').value = String(cfg.google_forms?.enabled || false);
    const f = cfg.google_forms?.fields || {};
    document.getElementById('cfg-f-nombre').value = f.nombre || '';
    document.getElementById('cfg-f-apellido').value = f.apellido || '';
    document.getElementById('cfg-f-grado').value = f.grado || '';
    document.getElementById('cfg-f-clase').value = f.clase || '';
    document.getElementById('cfg-f-tipo').value = f.tipo || '';
    document.getElementById('cfg-f-contenido').value = f.contenido || '';
    document.getElementById('cfg-f-calificacion').value = f.calificacion || '';
  }

  function attachHandlers() {
    document.getElementById('refresh-btn').addEventListener('click', loadAll);
    document.getElementById('logout-btn').addEventListener('click', async () => {
      await API.adminLogout();
      location.href = '/admin';
    });

    document.getElementById('config-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const cfg = {
        admin: { password: document.getElementById('cfg-password').value },
        google_forms: {
          enabled: document.getElementById('cfg-enabled').value === 'true',
          form_url: document.getElementById('cfg-form-url').value,
          fields: {
            nombre: document.getElementById('cfg-f-nombre').value,
            apellido: document.getElementById('cfg-f-apellido').value,
            grado: document.getElementById('cfg-f-grado').value,
            clase: document.getElementById('cfg-f-clase').value,
            tipo: document.getElementById('cfg-f-tipo').value,
            contenido: document.getElementById('cfg-f-contenido').value,
            calificacion: document.getElementById('cfg-f-calificacion').value,
          },
        },
      };
      const res = await API.adminConfig(cfg);
      if (res.ok) Toast.show('✅ Configuración guardada', 'success');
      else Toast.show('Error: ' + (res.error || ''), 'error');
    });

    document.getElementById('export-btn').addEventListener('click', async () => {
      const btn = document.getElementById('export-btn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> Exportando...';
      const records = [];
      Object.entries(state.data || {}).forEach(([gid, gd]) => {
        (gd.students || []).forEach(s => {
          const baseRecord = {
            nombre: s.nombre,
            apellido: s.apellido,
            grado: GRADES[gid]?.label || gid,
          };
          Object.entries(s.keywords || {}).forEach(([cid, kws]) => {
            Object.entries(kws).forEach(([term, def]) => {
              if (!def || !def.trim()) return;
              records.push({ ...baseRecord, clase: cid, tipo: 'Palabra clave', contenido: `${term}: ${def}`, calificacion: '' });
            });
          });
          Object.entries(s.exams || {}).forEach(([cid, ex]) => {
            if (!ex.taken) return;
            records.push({ ...baseRecord, clase: cid, tipo: cid.includes('final') ? 'Examen final' : 'Mini-examen', contenido: '', calificacion: `${ex.score}/${ex.total}` });
          });
          Object.entries(s.tasks || {}).forEach(([cid, tks]) => {
            Object.entries(tks).forEach(([tid, t]) => {
              records.push({ ...baseRecord, clase: cid, tipo: 'Tarea', contenido: `${tid}${t.notes ? ': ' + t.notes : ''}`, calificacion: t.done ? 'Hecha' : 'Pendiente' });
            });
          });
        });
      });
      if (records.length === 0) {
        Toast.show('No hay datos para exportar', 'warn');
        btn.disabled = false;
        btn.innerHTML = '📤 Exportar todo a Google Forms';
        return;
      }
      const res = await API.exportGoogleForms(records);
      if (res.ok) {
        Toast.show(`✅ Exportados: ${res.data.sent} registros${res.data.errors?.length ? ' · Errores: ' + res.data.errors.length : ''}`, 'success', 5000);
      } else {
        Toast.show('Error: ' + (res.error || ''), 'error', 6000);
      }
      btn.disabled = false;
      btn.innerHTML = '📤 Exportar todo a Google Forms';
    });
  }

  document.getElementById('server-info').textContent = `📡 ${location.hostname}:${location.port || 80}`;
  attachHandlers();
  await loadAll();
  await loadConfig();
  setInterval(loadAll, 30000);
})();
