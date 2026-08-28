/* ==========================================================================
   Horário Dinâmico EPD - Main Application Logic
   ========================================================================== */

// Global Application State
let state = {
  currentPreset: 'ajustado',
  slots: [],
  teachers: [],
  history: [],
  redoStack: [],
  activeView: 'grid',
  filters: {
    search: '',
    dept: 'ALL',
    prof: 'ALL'
  },
  draggedSlotId: null,
  selectedSlotForSwap: null // Click-to-swap support
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadSavedStateOrPreset('ajustado');
  setupKeyboardShortcuts();
});

// Load State or Preset
function loadSavedStateOrPreset(presetKey) {
  const saved = localStorage.getItem('epd_schedule_app_state_v1');
  if (saved && presetKey === 'saved') {
    try {
      const parsed = JSON.parse(saved);
      state.slots = parsed.slots || [];
      state.teachers = parsed.teachers || DEFAULT_TEACHERS;
      state.currentPreset = parsed.currentPreset || 'ajustado';
    } catch (e) {
      loadPresetData(presetKey);
    }
  } else {
    loadPresetData(presetKey);
  }
  
  populateTeacherFilter();
  renderApp();
}

function loadPresetData(presetKey) {
  state.currentPreset = presetKey;
  state.history = [];
  state.redoStack = [];
  state.teachers = JSON.parse(JSON.stringify(DEFAULT_TEACHERS));
  
  if (presetKey === 'original') {
    state.slots = JSON.parse(JSON.stringify(PRESET_ORIGINAL));
  } else {
    state.slots = JSON.parse(JSON.stringify(PRESET_AJUSTADO));
  }
  
  saveToLocalStorage();
}

function switchPreset(presetKey) {
  if (state.currentPreset === presetKey) return;
  saveHistoryState();
  loadPresetData(presetKey);
  
  document.getElementById('preset-ajustado-btn').classList.toggle('active', presetKey === 'ajustado');
  document.getElementById('preset-original-btn').classList.toggle('active', presetKey === 'original');
  
  showToast(`Preset carregado: ${presetKey === 'ajustado' ? 'Horário Ajustado (IA)' : 'Horário Original 2026.3'}`, 'success');
}

function saveToLocalStorage() {
  localStorage.setItem('epd_schedule_app_state_v1', JSON.stringify({
    currentPreset: state.currentPreset,
    slots: state.slots,
    teachers: state.teachers
  }));
}

// History Undo / Redo
function saveHistoryState() {
  state.history.push(JSON.stringify({
    slots: state.slots,
    teachers: state.teachers
  }));
  if (state.history.length > 25) state.history.shift();
  state.redoStack = [];
}

function undo() {
  if (state.history.length === 0) {
    showToast('Nenhuma ação para desfazer.', 'warning');
    return;
  }
  state.redoStack.push(JSON.stringify({
    slots: state.slots,
    teachers: state.teachers
  }));
  const prev = JSON.parse(state.history.pop());
  state.slots = prev.slots;
  state.teachers = prev.teachers;
  saveToLocalStorage();
  renderApp();
  showToast('Ação desfeita.', 'info');
}

function redo() {
  if (state.redoStack.length === 0) {
    showToast('Nenhuma ação para refazer.', 'warning');
    return;
  }
  state.history.push(JSON.stringify({
    slots: state.slots,
    teachers: state.teachers
  }));
  const next = JSON.parse(state.redoStack.pop());
  state.slots = next.slots;
  state.teachers = next.teachers;
  saveToLocalStorage();
  renderApp();
  showToast('Ação refeita.', 'info');
}

function confirmResetSchedule() {
  if (confirm('Tem certeza que deseja redefinir o horário para a versão padrão inicial? Todas as suas alterações manuais serão perdidas.')) {
    loadPresetData(state.currentPreset);
    showToast('Horário redefinido com sucesso.', 'info');
  }
}

// Populate Teacher Select Options
function populateTeacherFilter() {
  const profSelect = document.getElementById('prof-filter');
  const editProfSelect = document.getElementById('edit-professor');
  
  let htmlFilter = '<option value="ALL">Todos os Professores</option>';
  let htmlEdit = '<option value="">(Sem Professor EPD)</option>';
  
  state.teachers.forEach(t => {
    htmlFilter += `<option value="${t.name}">${t.name}</option>`;
    htmlEdit += `<option value="${t.name}">${t.name}</option>`;
  });
  
  profSelect.innerHTML = htmlFilter;
  editProfSelect.innerHTML = htmlEdit;
  
  profSelect.value = state.filters.prof;
}

// Search and Filters
function handleSearchFilter() {
  state.filters.search = document.getElementById('search-input').value.trim().toLowerCase();
  state.filters.dept = document.getElementById('dept-filter').value;
  state.filters.prof = document.getElementById('prof-filter').value;
  renderApp(false);
}

function switchView(viewMode) {
  state.activeView = viewMode;
  document.getElementById('tab-grid').classList.toggle('active', viewMode === 'grid');
  document.getElementById('tab-prof').classList.toggle('active', viewMode === 'prof');
  document.getElementById('tab-list').classList.toggle('active', viewMode === 'list');
  renderApp(false);
}

// Auditor Engine & Constraint Checks
function runAuditor() {
  let teacherConflicts = 0;
  let prereqViolations = 0;
  let count1719 = 0;
  
  // Reset flags
  state.slots.forEach(s => {
    s._conflictTeacher = false;
    s._conflictPrereq = false;
    s._warning1719 = false;
  });

  // Map slot index: (day, slot, teacher)
  const teacherScheduleMap = {};
  
  // Map code -> earliest period
  const coursePeriodMap = {};
  state.slots.forEach(s => {
    if (s.code && s.code !== 'CUSTOM') {
      if (!coursePeriodMap[s.code] || s.period < coursePeriodMap[s.code]) {
        coursePeriodMap[s.code] = s.period;
      }
    }
    
    // Check 17/19 for EPD
    if (s.slot === '17/19' && s.dept === 'EPD') {
      s._warning1719 = true;
      count1719++;
    }
  });

  // 1. Check Teacher Conflicts & Allowed Days
  state.slots.forEach(s => {
    if (s.professor) {
      const key = `${s.day}_${s.slot}_${s.professor}`;
      if (!teacherScheduleMap[key]) {
        teacherScheduleMap[key] = [];
      }
      teacherScheduleMap[key].push(s);

      // Check Teacher Day Restrictions
      const teacherObj = state.teachers.find(t => t.name.toLowerCase() === s.professor.toLowerCase());
      if (teacherObj && teacherObj.allowedDays && teacherObj.allowedDays.length > 0) {
        if (!teacherObj.allowedDays.includes(s.day)) {
          s._conflictTeacher = true;
        }
      }
    }
  });

  // Flag overlapping teacher slots
  Object.values(teacherScheduleMap).forEach(group => {
    if (group.length > 1) {
      group.forEach(s => {
        s._conflictTeacher = true;
      });
      teacherConflicts += (group.length - 1);
    }
  });

  // Count total teacher conflict items
  const teacherConflictCount = state.slots.filter(s => s._conflictTeacher).length;

  // 2. Check Prerequisite Violations
  state.slots.forEach(s => {
    if (s.prereqs && s.prereqs.length > 0) {
      s.prereqs.forEach(reqCode => {
        const reqPeriod = coursePeriodMap[reqCode];
        if (reqPeriod !== undefined && reqPeriod >= s.period) {
          s._conflictPrereq = true;
          prereqViolations++;
        }
      });
    }
  });

  // Update UI KPI counters
  document.getElementById('kpi-teacher-conflicts').textContent = teacherConflictCount;
  document.getElementById('kpi-prereq-violations').textContent = prereqViolations;
  document.getElementById('kpi-1719-count').textContent = count1719;
  document.getElementById('kpi-total-slots').textContent = state.slots.length;
}

// Render Main Application Container
function renderApp(shouldRunAuditor = true) {
  if (shouldRunAuditor) runAuditor();
  
  const container = document.getElementById('main-content');
  
  if (state.activeView === 'grid') {
    container.innerHTML = renderGridView();
  } else if (state.activeView === 'prof') {
    container.innerHTML = renderProfView();
  } else if (state.activeView === 'list') {
    container.innerHTML = renderListView();
  }

  attachDragAndDropEvents();
}

// RENDER VIEW 1: HORÁRIO 2026.3 PERIOD GRID MODEL
function renderGridView() {
  let html = `<div class="period-grid-view">`;
  
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const slotsTimes = ['17/19', '19/21', '21/23'];

  // Render 10 Period blocks
  for (let p = 1; p <= 10; p++) {
    // Filter slots in period p
    const periodSlots = state.slots.filter(s => s.period === p);
    
    html += `
      <div class="period-block" id="period-block-${p}">
        <div class="period-header">
          <div class="period-title">
            <span class="period-badge">P${p}</span>
            <span class="period-name">Período ${p}</span>
          </div>
          <div class="period-stats">
            ${periodSlots.length} disciplina(s) alocadas
          </div>
        </div>

        <table class="period-table">
          <thead>
            <tr>
              <th>Turno</th>
              ${days.map(d => `<th>${d}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
    `;

    slotsTimes.forEach(time => {
      const isShift1719 = time === '17/19';
      html += `
        <tr>
          <td class="slot-time-col ${isShift1719 ? 'shift-1719' : ''}">
            ${time}
          </td>
      `;

      days.forEach(day => {
        // Find matching slots in this cell
        const matching = periodSlots.filter(s => s.day === day && s.slot === time);
        
        // Filter search & dept
        const visibleMatching = matching.filter(s => matchesFilter(s));

        html += `
          <td>
            <div class="slot-dropzone ${matching.length === 0 ? 'empty-slot' : ''}" 
                 data-period="${p}" 
                 data-day="${day}" 
                 data-slot="${time}"
                 onclick="handleSlotClick(${p}, '${day}', '${time}', ${matching.length > 0 ? `'${matching[0].id}'` : 'null'})">
        `;

        if (matching.length === 0) {
          html += `<span>+</span>`;
        } else {
          matching.forEach(s => {
            const isHidden = !matchesFilter(s);
            if (!isHidden) {
              html += renderDisciplineCard(s);
            }
          });
        }

        html += `
            </div>
          </td>
        `;
      });

      html += `</tr>`;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

// Render Single Discipline Card
function renderDisciplineCard(s) {
  const isSelected = state.selectedSlotForSwap === s.id;
  const classes = [
    'discipline-card',
    s._conflictTeacher ? 'conflict-teacher' : '',
    s._conflictPrereq ? 'conflict-prereq' : '',
    s._warning1719 ? 'warning-1719' : '',
    isSelected ? 'selected-for-swap' : ''
  ].filter(Boolean).join(' ');

  const titleText = s.name || s.text || s.code;

  return `
    <div class="${classes}" 
         data-id="${s.id}" 
         data-dept="${s.dept || 'OUTRO'}"
         draggable="true"
         onclick="event.stopPropagation(); handleCardClick('${s.id}')"
         title="${titleText} | Prof: ${s.professor || 'N/A'} | Pré-req: ${s.prereqs ? s.prereqs.join(', ') : 'Nenhum'}">
      <div class="card-top">
        <span class="code-badge">${s.code || 'EPD'}</span>
        <span class="dept-pill">${s.dept || 'DEP'}</span>
      </div>
      <div class="card-title">${titleText}</div>
      <div class="card-bottom">
        <span class="prof-tag">
          ${s.professor ? `<i class="fa-solid fa-user-tie"></i> ${s.professor}` : ''}
        </span>
        ${s._conflictTeacher ? '<i class="fa-solid fa-triangle-exclamation warning-icon" style="color: var(--danger)" title="Conflito de Docente!"></i>' : ''}
        ${s._conflictPrereq ? '<i class="fa-solid fa-code-fork warning-icon" style="color: var(--warning)" title="Violação de Pré-requisito!"></i>' : ''}
      </div>
    </div>
  `;
}

// Filter Matching Test
function matchesFilter(s) {
  if (state.filters.dept !== 'ALL' && s.dept !== state.filters.dept) return false;
  if (state.filters.prof !== 'ALL' && s.professor !== state.filters.prof) return false;
  if (state.filters.search) {
    const q = state.filters.search;
    const codeMatch = (s.code || '').toLowerCase().includes(q);
    const nameMatch = (s.name || s.text || '').toLowerCase().includes(q);
    const profMatch = (s.professor || '').toLowerCase().includes(q);
    if (!codeMatch && !nameMatch && !profMatch) return false;
  }
  return true;
}

// RENDER VIEW 2: PROFESSOR MATRIX
function renderProfView() {
  let html = `<div class="period-grid-view">`;
  
  state.teachers.forEach(t => {
    const tSlots = state.slots.filter(s => s.professor && s.professor.toLowerCase() === t.name.toLowerCase());
    
    html += `
      <div class="period-block">
        <div class="period-header">
          <div class="period-title">
            <span class="period-badge" style="background: #a855f7;"><i class="fa-solid fa-user-tie"></i></span>
            <span class="period-name">${t.name}</span>
          </div>
          <div class="period-stats">
            ${tSlots.length} aula(s) | Dias permitidos: ${t.allowedDays ? t.allowedDays.join(', ') : 'Todos'}
          </div>
        </div>
        <div style="padding: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
    `;

    if (tSlots.length === 0) {
      html += `<p style="color: var(--text-muted); font-size: 0.85rem;">Nenhuma disciplina atribuída a este professor.</p>`;
    } else {
      tSlots.forEach(s => {
        html += `
          <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; width: 220px;">
            <div style="font-weight: 700; font-size: 0.85rem;">${s.code} - P${s.period}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin: 4px 0;">${s.name}</div>
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--primary);"><i class="fa-regular fa-clock"></i> ${s.day} (${s.slot})</div>
          </div>
        `;
      });
    }

    html += `
        </div>
      </div>
    `;
  });

  html += `</div>`;
  return html;
}

// RENDER VIEW 3: COMPACT GENERAL TABLE
function renderListView() {
  let html = `
    <div class="period-block" style="padding: 1rem;">
      <table class="period-table" style="table-layout: auto;">
        <thead>
          <tr>
            <th style="width: auto;">Código</th>
            <th style="width: auto;">Nome da Disciplina</th>
            <th style="width: auto;">Dept</th>
            <th style="width: auto;">Período</th>
            <th style="width: auto;">Dia</th>
            <th style="width: auto;">Turno</th>
            <th style="width: auto;">Professor</th>
            <th style="width: auto;">Pré-requisitos</th>
            <th style="width: auto;">Ações</th>
          </tr>
        </thead>
        <tbody>
  `;

  const sorted = [...state.slots].sort((a, b) => a.period - b.period);
  
  sorted.forEach(s => {
    if (!matchesFilter(s)) return;
    html += `
      <tr>
        <td style="font-weight: 700;">${s.code || '-'}</td>
        <td>${s.name || s.text}</td>
        <td><span class="dept-pill">${s.dept}</span></td>
        <td style="text-align: center;">P${s.period}</td>
        <td>${s.day}</td>
        <td>${s.slot}</td>
        <td>${s.professor || '-'}</td>
        <td style="font-size: 0.75rem; color: var(--text-muted);">${s.prereqs ? s.prereqs.join(', ') : '-'}</td>
        <td>
          <button class="btn" style="padding: 4px 8px; font-size: 0.75rem;" onclick="openEditCourseModal('${s.id}')">
            <i class="fa-solid fa-pen"></i> Editar
          </button>
        </td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;
  return html;
}

// DRAG AND DROP & SWAP HANDLERS
function attachDragAndDropEvents() {
  const cards = document.querySelectorAll('.discipline-card');
  const dropzones = document.querySelectorAll('.slot-dropzone');

  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      state.draggedSlotId = card.getAttribute('data-id');
      card.classList.add('dragging');
      e.dataTransfer.setData('text/plain', state.draggedSlotId);
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      state.draggedSlotId = null;
    });
  });

  dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      
      const draggedId = e.dataTransfer.getData('text/plain') || state.draggedSlotId;
      if (!draggedId) return;

      const targetPeriod = parseInt(zone.getAttribute('data-period'));
      const targetDay = zone.getAttribute('data-day');
      const targetSlot = zone.getAttribute('data-slot');

      executeMoveOrSwap(draggedId, targetPeriod, targetDay, targetSlot);
    });
  });
}

// Core Move / Swap Executor Logic
function executeMoveOrSwap(draggedId, targetPeriod, targetDay, targetSlot) {
  const draggedIndex = state.slots.findIndex(s => s.id === draggedId);
  if (draggedIndex === -1) return;

  const draggedObj = state.slots[draggedIndex];

  // If dropping in exact same slot, do nothing
  if (draggedObj.period === targetPeriod && draggedObj.day === targetDay && draggedObj.slot === targetSlot) {
    return;
  }

  saveHistoryState();

  // Find if target slot is occupied
  const occupiedIndex = state.slots.findIndex(s => s.period === targetPeriod && s.day === targetDay && s.slot === targetSlot);

  if (occupiedIndex !== -1 && occupiedIndex !== draggedIndex) {
    // SWAP: Exchange coordinates
    const targetObj = state.slots[occupiedIndex];
    
    const tempP = draggedObj.period;
    const tempD = draggedObj.day;
    const tempS = draggedObj.slot;

    draggedObj.period = targetObj.period;
    draggedObj.day = targetObj.day;
    draggedObj.slot = targetObj.slot;

    targetObj.period = tempP;
    targetObj.day = tempD;
    targetObj.slot = tempS;

    showToast(`Troca realizada: ${draggedObj.code} ⇄ ${targetObj.code}`, 'success');
  } else {
    // MOVE to empty slot
    draggedObj.period = targetPeriod;
    draggedObj.day = targetDay;
    draggedObj.slot = targetSlot;

    showToast(`Disciplina ${draggedObj.code} movida para P${targetPeriod} (${targetDay} ${targetSlot})`, 'info');
  }

  saveToLocalStorage();
  state.selectedSlotForSwap = null;
  renderApp();
}

// Click-to-Move / Click-to-Swap Support
function handleCardClick(slotId) {
  if (!state.selectedSlotForSwap) {
    state.selectedSlotForSwap = slotId;
    renderApp(false);
    showToast('Disciplina selecionada! Clique no slot de destino para Mover ou Trocar.', 'info');
  } else if (state.selectedSlotForSwap === slotId) {
    state.selectedSlotForSwap = null;
    renderApp(false);
  } else {
    // Swap selected with clicked
    const firstObj = state.slots.find(s => s.id === state.selectedSlotForSwap);
    const secondObj = state.slots.find(s => s.id === slotId);
    
    if (firstObj && secondObj) {
      executeMoveOrSwap(firstObj.id, secondObj.period, secondObj.day, secondObj.slot);
    }
  }
}

function handleSlotClick(period, day, slot, occupiedSlotId) {
  if (state.selectedSlotForSwap) {
    executeMoveOrSwap(state.selectedSlotForSwap, period, day, slot);
  } else if (occupiedSlotId) {
    openEditCourseModal(occupiedSlotId);
  }
}

// MODAL CONTROLS: Edit Course
function openEditCourseModal(slotId) {
  const s = state.slots.find(x => x.id === slotId);
  if (!s) return;

  document.getElementById('edit-slot-id').value = s.id;
  document.getElementById('edit-code').value = s.code || '';
  document.getElementById('edit-name').value = s.name || s.text || '';
  document.getElementById('edit-dept').value = s.dept || 'EPD';
  document.getElementById('edit-period').value = s.period;
  document.getElementById('edit-day').value = s.day;
  document.getElementById('edit-slot').value = s.slot;
  document.getElementById('edit-professor').value = s.professor || '';
  document.getElementById('edit-prereqs').value = s.prereqs ? s.prereqs.join(', ') : '';

  openModal('modal-edit-course');
}

function saveCourseEdit(e) {
  e.preventDefault();
  const id = document.getElementById('edit-slot-id').value;
  const s = state.slots.find(x => x.id === id);
  if (!s) return;

  saveHistoryState();

  s.code = document.getElementById('edit-code').value.trim().toUpperCase();
  s.name = document.getElementById('edit-name').value.trim();
  s.dept = document.getElementById('edit-dept').value.trim().toUpperCase();
  s.period = parseInt(document.getElementById('edit-period').value);
  s.day = document.getElementById('edit-day').value;
  s.slot = document.getElementById('edit-slot').value;
  s.professor = document.getElementById('edit-professor').value;
  
  const prereqsStr = document.getElementById('edit-prereqs').value.trim();
  s.prereqs = prereqsStr ? prereqsStr.split(',').map(p => p.trim().toUpperCase()) : [];

  closeModal('modal-edit-course');
  saveToLocalStorage();
  renderApp();
  showToast('Disciplina atualizada com sucesso!', 'success');
}

function deleteCurrentCourse() {
  const id = document.getElementById('edit-slot-id').value;
  if (!id) return;

  if (confirm('Tem certeza que deseja excluir esta disciplina do horário?')) {
    saveHistoryState();
    state.slots = state.slots.filter(x => x.id !== id);
    closeModal('modal-edit-course');
    saveToLocalStorage();
    renderApp();
    showToast('Disciplina excluída.', 'info');
  }
}

function openAddCourseModal() {
  const newId = 'custom_' + Date.now();
  state.slots.push({
    id: newId,
    code: 'EPD000',
    name: 'Nova Disciplina',
    dept: 'EPD',
    period: 1,
    day: 'Segunda',
    slot: '19/21',
    professor: '',
    prereqs: []
  });
  openEditCourseModal(newId);
}

// MODAL CONTROLS: Constraint Manager
function openConstraintManager() {
  renderTeachersConstraintList();
  openModal('modal-constraint-manager');
}

function renderTeachersConstraintList() {
  const container = document.getElementById('teachers-list-container');
  const daysList = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  let html = '';
  state.teachers.forEach(t => {
    html += `
      <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="font-size: 0.9rem; color: var(--primary);"><i class="fa-solid fa-user-tie"></i> ${t.name}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${t.notes || ''}</span>
        </div>
        <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 6px;">Dias Permitidos:</div>
        <div class="days-checkbox-group">
    `;

    daysList.forEach(d => {
      const isChecked = t.allowedDays && t.allowedDays.includes(d);
      html += `
        <label class="day-checkbox">
          <input type="checkbox" data-teacher="${t.id}" data-day="${d}" ${isChecked ? 'checked' : ''}>
          <span>${d.substring(0, 3)}</span>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function saveTeacherConstraints() {
  saveHistoryState();
  const checkboxes = document.querySelectorAll('#teachers-list-container input[type="checkbox"]');
  
  // Reset allowedDays
  state.teachers.forEach(t => t.allowedDays = []);

  checkboxes.forEach(cb => {
    if (cb.checked) {
      const tId = cb.getAttribute('data-teacher');
      const day = cb.getAttribute('data-day');
      const tObj = state.teachers.find(x => x.id === tId);
      if (tObj) {
        if (!tObj.allowedDays) tObj.allowedDays = [];
        tObj.allowedDays.push(day);
      }
    }
  });

  saveToLocalStorage();
  closeModal('modal-constraint-manager');
  renderApp();
  showToast('Restrições de docentes salvas e recalculadas!', 'success');
}

function addNewTeacher() {
  const input = document.getElementById('new-teacher-name');
  const name = input.value.trim();
  if (!name) return;

  state.teachers.push({
    id: 't_' + Date.now(),
    name: name,
    allowedDays: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    notes: 'Personalizado'
  });

  input.value = '';
  populateTeacherFilter();
  renderTeachersConstraintList();
  showToast(`Professor ${name} adicionado!`, 'success');
}

// Modal Helpers
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : type === 'danger' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Theme Toggle
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  const btn = document.getElementById('theme-toggle-btn');
  btn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
      undo();
    } else if (e.ctrlKey && e.key === 'y') {
      e.preventDefault();
      redo();
    }
  });
}

// EXPORT TO EXCEL MATCHING HORÁRIO 2026.3 FORMAT
function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    showToast('Biblioteca SheetJS não carregada.', 'danger');
    return;
  }

  const wb = XLSX.utils.book_new();
  const wsData = [];

  // Header Title
  wsData.push(['GRADE DE HORÁRIOS - ENGENHARIA DE PRODUÇÃO (EPD)', '', '', '', '', '', '', '']);
  wsData.push([]);

  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const slotsTimes = ['17/19', '19/21', '21/23'];

  // For each period
  for (let p = 1; p <= 10; p++) {
    wsData.push([`PERÍODO ${p}`, 'Turno', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']);
    
    slotsTimes.forEach(time => {
      const row = [p, time];
      days.forEach(day => {
        const matches = state.slots.filter(s => s.period === p && s.day === day && s.slot === time);
        if (matches.length > 0) {
          const text = matches.map(s => `${s.code} - ${s.name}${s.professor ? ` (${s.professor})` : ''}`).join(' / ');
          row.push(text);
        } else {
          row.push('');
        }
      });
      wsData.push(row);
    });

    wsData.push([]); // blank separator row
  }

  const ws = XLSX.utils.aoa_to_sheet(wsData);
  XLSX.utils.book_append_sheet(wb, ws, 'Horário EPD');

  // Export File
  XLSX.writeFile(wb, `Horario_Engenharia_Producao_2026.xlsx`);
  showToast('Planilha Excel exportada com sucesso!', 'success');
}
