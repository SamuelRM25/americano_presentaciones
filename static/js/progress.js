const Progress = (() => {
  const KEY = 'americano_progress';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch { return {}; }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function getClassState(gradeId, classId) {
    const all = load();
    const g = all[gradeId] || {};
    return g[classId] || {
      visited_slides: [],
      keywords: {},
      tasks: {},
      exercises: {},
      exam_score: null,
      exam_taken: false,
      completed: false,
      started_at: new Date().toISOString(),
    };
  }

  function setClassState(gradeId, classId, patch) {
    const all = load();
    if (!all[gradeId]) all[gradeId] = {};
    all[gradeId][classId] = { ...getClassState(gradeId, classId), ...patch };
    save(all);
  }

  function markVisited(gradeId, classId, slideId) {
    const state = getClassState(gradeId, classId);
    if (!state.visited_slides.includes(slideId)) {
      state.visited_slides.push(slideId);
      setClassState(gradeId, classId, { visited_slides: state.visited_slides });
    }
  }

  function setKeyword(gradeId, classId, term, definition) {
    const state = getClassState(gradeId, classId);
    state.keywords[term] = definition;
    setClassState(gradeId, classId, { keywords: state.keywords });
  }

  function setTask(gradeId, classId, taskId, payload) {
    const state = getClassState(gradeId, classId);
    state.tasks[taskId] = { ...(state.tasks[taskId] || {}), ...payload };
    setClassState(gradeId, classId, { tasks: state.tasks });
  }

  function setExercise(gradeId, classId, exId, payload) {
    const state = getClassState(gradeId, classId);
    state.exercises[exId] = { ...(state.exercises[exId] || {}), ...payload };
    setClassState(gradeId, classId, { exercises: state.exercises });
  }

  function setExam(gradeId, classId, score, total, answers) {
    setClassState(gradeId, classId, {
      exam_score: score,
      exam_total: total,
      exam_answers: answers,
      exam_taken: true,
      exam_at: new Date().toISOString(),
    });
  }

  function computeClassPercent(gradeId, classId, expected = {}) {
    const s = getClassState(gradeId, classId);
    const total = (expected.slides || 0) + (expected.keywords || 0) + (expected.tasks || 0) + (expected.exercises || 0);
    if (total === 0) return 0;
    const slides = (s.visited_slides?.length || 0);
    const keywords = Object.keys(s.keywords || {}).filter(k => (s.keywords[k] || '').trim().length > 0).length;
    const tasks = Object.values(s.tasks || {}).filter(t => t?.done).length;
    const exDone = Object.values(s.exercises || {}).filter(e => e?.answered).length;
    const sum = Math.min(slides, expected.slides || 0) + Math.min(keywords, expected.keywords || 0) + Math.min(tasks, expected.tasks || 0) + Math.min(exDone, expected.exercises || 0);
    return Math.round((sum / total) * 100);
  }

  function isClassCompleted(gradeId, classId) {
    const s = getClassState(gradeId, classId);
    return !!(s.exam_taken);
  }

  async function syncToServer(gradeId) {
    const s = Student.get();
    if (!s) return;
    const all = load();
    const gradeData = all[gradeId] || {};
    const flat = {
      grade: gradeId,
      nombre: s.nombre,
      apellido: s.apellido,
      progress: {},
      keywords: {},
      tasks: {},
      exams: {},
    };
    for (const [cid, c] of Object.entries(gradeData)) {
      flat.progress[cid] = {
        visited_slides: c.visited_slides,
        exercises: c.exercises,
      };
      flat.keywords[cid] = c.keywords;
      flat.tasks[cid] = c.tasks;
      flat.exams[cid] = {
        score: c.exam_score,
        total: c.exam_total,
        taken: c.exam_taken,
        at: c.exam_at,
      };
    }
    await API.studentSave(flat);
  }

  async function loadFromServer(gradeId) {
    const s = Student.get();
    if (!s) return null;
    const res = await API.studentLoad(gradeId, s.nombre, s.apellido);
    if (!res.ok || !res.data || res.data.exists === false) return null;
    const remote = res.data;
    const all = load();
    if (!all[gradeId]) all[gradeId] = {};
    for (const [cid, c] of Object.entries(remote.progress || {})) {
      if (!all[gradeId][cid]) all[gradeId][cid] = {};
      all[gradeId][cid].visited_slides = c.visited_slides || all[gradeId][cid].visited_slides || [];
      all[gradeId][cid].exercises = { ...(all[gradeId][cid].exercises || {}), ...(c.exercises || {}) };
    }
    for (const [cid, kws] of Object.entries(remote.keywords || {})) {
      if (!all[gradeId][cid]) all[gradeId][cid] = {};
      all[gradeId][cid].keywords = { ...(all[gradeId][cid].keywords || {}), ...kws };
    }
    for (const [cid, tks] of Object.entries(remote.tasks || {})) {
      if (!all[gradeId][cid]) all[gradeId][cid] = {};
      all[gradeId][cid].tasks = { ...(all[gradeId][cid].tasks || {}), ...tks };
    }
    for (const [cid, ex] of Object.entries(remote.exams || {})) {
      if (!all[gradeId][cid]) all[gradeId][cid] = {};
      all[gradeId][cid].exam_score = ex.score;
      all[gradeId][cid].exam_total = ex.total;
      all[gradeId][cid].exam_taken = ex.taken;
      all[gradeId][cid].exam_at = ex.at;
    }
    save(all);
    return all[gradeId];
  }

  return {
    load, save, getClassState, setClassState,
    markVisited, setKeyword, setTask, setExercise, setExam,
    computeClassPercent, isClassCompleted,
    syncToServer, loadFromServer,
  };
})();
