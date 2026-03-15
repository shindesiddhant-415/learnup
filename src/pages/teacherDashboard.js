/* ===================================================
   teacherDashboard.js – Teacher dashboard
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { renderSidebar } from '../components/sidebar.js';
import { showToast } from '../components/toast.js';

export function renderTeacherDashboard(container) {
  const user = Store.getCurrentUser();
  if (!user || user.role !== 'teacher') { Router.navigate('/login'); return; }

  const sidebar = renderSidebar('dash');
  const myQuizzes = Store.getQuizzesByCreator(user.id);
  const allStudents = Store.getStudents();
  const allScores = Store.getScores();

  // Stats
  const totalStudents = allStudents.length;
  const totalQuizzes = myQuizzes.length;
  const totalAttempts = allScores.filter(s => myQuizzes.some(q => q.id === s.quizId)).length;
  const avgScore = totalAttempts > 0
    ? Math.round(allScores.filter(s => myQuizzes.some(q => q.id === s.quizId)).reduce((sum, s) => sum + (s.score / s.total) * 100, 0) / totalAttempts)
    : 0;

  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard-layout';

  const main = document.createElement('main');
  main.className = 'dashboard-main';
  main.innerHTML = `
    <div class="dashboard-header animate-fade-in">
      <div>
        <h1>Teacher Dashboard 👩‍🏫</h1>
        <p class="text-sm text-muted">Manage quizzes and track student performance</p>
      </div>
      <a href="#/create-quiz" class="btn btn-primary" id="teacher-create-quiz">➕ Create Quiz</a>
    </div>

    <!-- Stats Row -->
    <div class="stats-row">
      <div class="stat-card animate-fade-in-up delay-1">
        <div class="stat-label">My Quizzes</div>
        <div class="stat-value text-gradient">${totalQuizzes}</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-2">
        <div class="stat-label">Total Students</div>
        <div class="stat-value">${totalStudents}</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-3">
        <div class="stat-label">Total Attempts</div>
        <div class="stat-value">${totalAttempts}</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-4">
        <div class="stat-label">Avg Score</div>
        <div class="stat-value" style="color: var(--success);">${avgScore}%</div>
      </div>
    </div>

    <div class="dashboard-grid">
      <!-- My Quizzes -->
      <div class="card animate-fade-in-up delay-2">
        <div class="flex items-center justify-between" style="margin-bottom:var(--space-lg);">
          <h3 style="font-weight:700;">📝 My Quizzes</h3>
        </div>
        ${myQuizzes.length > 0 ? myQuizzes.map(q => {
          const attempts = allScores.filter(s => s.quizId === q.id).length;
          return `
            <div class="flex items-center justify-between" style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
              <div>
                <div style="font-weight:600; font-size:var(--font-sm);">${q.title}</div>
                <div class="flex gap-sm" style="margin-top:4px;">
                  <span class="badge badge-accent">${q.category}</span>
                  <span class="badge badge-primary">${q.questions.length} Qs</span>
                  <span class="chip">${attempts} attempts</span>
                </div>
              </div>
              <button class="btn btn-sm btn-danger delete-quiz-btn" data-id="${q.id}">🗑️</button>
            </div>
          `;
        }).join('') : '<div class="empty-state"><div class="empty-icon">📝</div><p>No quizzes yet. Create your first quiz!</p></div>'}
      </div>

      <!-- Top Students -->
      <div class="card animate-fade-in-up delay-3">
        <h3 style="font-weight:700; margin-bottom: var(--space-lg);">🏆 Top Students</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr><th>Rank</th><th>Student</th><th>Points</th><th>Level</th></tr>
            </thead>
            <tbody>
              ${Store.getLeaderboard().slice(0, 8).map((s, i) => `
                <tr>
                  <td>${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</td>
                  <td>
                    <div class="flex items-center gap-sm">
                      <div class="avatar avatar-sm" style="background:${s.avatar}">${s.name.charAt(0)}</div>
                      ${s.name}
                    </div>
                  </td>
                  <td style="font-weight:600; color:var(--primary-light);">${s.points.toLocaleString()}</td>
                  <td><span class="badge badge-accent">Lv ${s.level}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="card animate-fade-in-up delay-4" style="grid-column: 1 / -1;">
        <h3 style="font-weight:700; margin-bottom:var(--space-lg);">📊 Recent Quiz Activity</h3>
        <div class="table-wrap">
          <table class="table">
            <thead><tr><th>Student</th><th>Quiz</th><th>Score</th><th>Points</th><th>Date</th></tr></thead>
            <tbody>
              ${[...allScores].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,10).map(s => {
                const student = Store.getUser(s.userId);
                const quiz = Store.getQuiz(s.quizId);
                const pct = Math.round((s.score/s.total)*100);
                return `
                  <tr>
                    <td>
                      <div class="flex items-center gap-sm">
                        <div class="avatar avatar-sm" style="background:${student?.avatar||'#666'}">${student?.name?.charAt(0)||'?'}</div>
                        ${student?.name||'Unknown'}
                      </div>
                    </td>
                    <td>${quiz?.title||'Deleted Quiz'}</td>
                    <td><span class="badge ${pct>=80?'badge-success':pct>=60?'badge-warning':'badge-danger'}">${pct}%</span></td>
                    <td style="color:var(--primary-light);">+${s.points}</td>
                    <td style="color:var(--text-muted);">${s.date}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  wrapper.appendChild(sidebar);
  wrapper.appendChild(main);
  container.innerHTML = '';
  container.appendChild(wrapper);

  // Delete quiz buttons
  container.querySelectorAll('.delete-quiz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Delete this quiz?')) {
        Store.deleteQuiz(btn.dataset.id);
        showToast('Quiz deleted', 'info');
        renderTeacherDashboard(container);
      }
    });
  });
}
