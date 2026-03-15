/* ===================================================
   studentDashboard.js – Student dashboard
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { Gamification } from '../data/gamification.js';
import { renderSidebar } from '../components/sidebar.js';

export function renderStudentDashboard(container) {
  const user = Store.getCurrentUser();
  if (!user) { Router.navigate('/login'); return; }

  const sidebar = renderSidebar('dash');
  const scores = Store.getScoresByUser(user.id);
  const userBadges = Store.getUserBadges(user.id);
  const allBadges = Store.getAllBadges();
  const levelProgress = Gamification.getLevelProgress(user.points);
  const pointsToNext = Gamification.pointsToNextLevel(user.points);
  const accuracy = user.quizzesTotal > 0 ? Math.round((user.quizzesCorrect / user.quizzesTotal) * 100) : 0;

  // Available quizzes the user hasn't taken
  const takenQuizIds = scores.map(s => s.quizId);
  const availableQuizzes = Store.getQuizzes().filter(q => !takenQuizIds.includes(q.id));
  const recentScores = [...scores].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard-layout';

  const main = document.createElement('main');
  main.className = 'dashboard-main';
  main.innerHTML = `
    <div class="dashboard-header animate-fade-in">
      <div>
        <h1>Welcome back, <span class="text-gradient">${user.name.split(' ')[0]}</span>! 👋</h1>
        <p class="text-sm text-muted">Keep up the great work — you're on a ${user.streak}-day streak! 🔥</p>
      </div>
      <a href="#/quizzes" class="btn btn-primary" id="dash-take-quiz">📝 Take a Quiz</a>
    </div>

    <!-- Stats Row -->
    <div class="stats-row">
      <div class="stat-card animate-fade-in-up delay-1">
        <div class="stat-label">Total Points</div>
        <div class="stat-value text-gradient">${user.points.toLocaleString()}</div>
        <div class="flex items-center gap-sm" style="margin-top:var(--space-sm);">
          <span class="badge badge-primary">Level ${user.level}</span>
          <span style="font-size:var(--font-xs); color:var(--text-muted);">${pointsToNext} pts to next</span>
        </div>
        <div class="progress-bar" style="margin-top: var(--space-sm);">
          <div class="progress-bar-fill" style="width: ${Math.round(levelProgress * 100)}%;"></div>
        </div>
      </div>
      <div class="stat-card animate-fade-in-up delay-2">
        <div class="stat-label">Quizzes Taken</div>
        <div class="stat-value">${user.quizzesTaken}</div>
        <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:var(--space-sm);">Accuracy: ${accuracy}%</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-3">
        <div class="stat-label">Current Streak</div>
        <div class="stat-value" style="color: var(--warning);">🔥 ${user.streak}</div>
        <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:var(--space-sm);">days in a row</div>
      </div>
      <div class="stat-card animate-fade-in-up delay-4">
        <div class="stat-label">Badges Earned</div>
        <div class="stat-value">${userBadges.length}<span style="font-size:var(--font-lg); color:var(--text-muted);">/${allBadges.length}</span></div>
        <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:var(--space-sm);">${allBadges.length - userBadges.length} more to unlock</div>
      </div>
    </div>

    <!-- Dashboard Grid -->
    <div class="dashboard-grid">
      <!-- Available Quizzes -->
      <div class="card animate-fade-in-up delay-2">
        <div class="flex items-center justify-between" style="margin-bottom: var(--space-lg);">
          <h3 style="font-weight:700;">📝 Available Quizzes</h3>
          <a href="#/quizzes" class="text-sm" style="color:var(--primary-light);">View all →</a>
        </div>
        ${availableQuizzes.length > 0 ? availableQuizzes.slice(0, 3).map(q => `
          <div class="flex items-center justify-between" style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
            <div>
              <div style="font-weight:600; font-size:var(--font-sm);">${q.title}</div>
              <div class="flex gap-sm" style="margin-top:4px;">
                <span class="badge badge-accent">${q.category}</span>
                <span class="badge ${q.difficulty === 'Easy' ? 'badge-success' : q.difficulty === 'Medium' ? 'badge-warning' : 'badge-danger'}">${q.difficulty}</span>
              </div>
            </div>
            <a href="#/quiz/${q.id}" class="btn btn-sm btn-primary">Start</a>
          </div>
        `).join('') : '<div class="empty-state"><div class="empty-icon">🎉</div><p>You\'ve completed all quizzes!</p></div>'}
      </div>

      <!-- Recent Activity -->
      <div class="card animate-fade-in-up delay-3">
        <h3 style="font-weight:700; margin-bottom: var(--space-lg);">📊 Recent Activity</h3>
        ${recentScores.length > 0 ? recentScores.map(s => {
          const quiz = Store.getQuiz(s.quizId);
          const pct = Math.round((s.score / s.total) * 100);
          return `
            <div class="flex items-center justify-between" style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
              <div>
                <div style="font-weight:600; font-size:var(--font-sm);">${quiz ? quiz.title : 'Quiz'}</div>
                <div style="font-size:var(--font-xs); color:var(--text-muted);">${s.date}</div>
              </div>
              <div class="flex items-center gap-sm">
                <span class="badge ${pct >= 80 ? 'badge-success' : pct >= 60 ? 'badge-warning' : 'badge-danger'}">${pct}%</span>
                <span style="font-size:var(--font-xs); color:var(--primary-light);">+${s.points} pts</span>
              </div>
            </div>
          `;
        }).join('') : '<div class="empty-state"><div class="empty-icon">📊</div><p>No activity yet. Take a quiz!</p></div>'}
      </div>

      <!-- Badges Showcase -->
      <div class="card animate-fade-in-up delay-4" style="grid-column: 1 / -1;">
        <h3 style="font-weight:700; margin-bottom: var(--space-lg);">🏅 Badge Collection</h3>
        <div class="badges-grid">
          ${allBadges.map(b => {
            const earned = userBadges.find(ub => ub.id === b.id);
            return `
              <div class="badge-card ${earned ? '' : 'locked'}">
                <div class="badge-emoji">${b.emoji}</div>
                <div class="badge-name">${b.name}</div>
                <div style="font-size:var(--font-xs); color:var(--text-muted); margin-top:4px;">${b.desc}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  wrapper.appendChild(sidebar);
  wrapper.appendChild(main);
  container.innerHTML = '';
  container.appendChild(wrapper);
}
