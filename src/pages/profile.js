import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { Gamification } from '../data/gamification.js';
import { renderSidebar } from '../components/sidebar.js';

export function renderProfile(container) {
  const user = Store.getCurrentUser();
  if (!user) { Router.navigate('/login'); return; }
  const sidebar = renderSidebar('profile');
  const allBadges = Store.getAllBadges();
  const userBadges = Store.getUserBadges(user.id);
  const scores = Store.getScoresByUser(user.id);
  const accuracy = user.quizzesTotal > 0 ? Math.round((user.quizzesCorrect / user.quizzesTotal) * 100) : 0;
  const levelProgress = Gamification.getLevelProgress(user.points);
  const lb = Store.getLeaderboard();
  const rank = lb.findIndex(u => u.id === user.id) + 1;

  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard-layout';
  const main = document.createElement('main');
  main.className = 'dashboard-main';

  main.innerHTML = `<div class="profile-page">
    <div class="profile-header-card animate-fade-in">
      <div class="avatar avatar-xl" style="background:${user.avatar};position:relative;z-index:1;">${user.name.charAt(0)}</div>
      <div class="profile-info">
        <h1>${user.name}</h1>
        <div class="profile-role">${user.role === 'teacher' ? '👩‍🏫 Teacher' : '🎓 Student'} · ${user.email}</div>
        ${user.role === 'student' ? `<div class="profile-stats">
          <div class="profile-stat"><div class="p-stat-val text-gradient">${user.points.toLocaleString()}</div><div class="p-stat-label">Points</div></div>
          <div class="profile-stat"><div class="p-stat-val">Lv ${user.level}</div><div class="p-stat-label">Level</div></div>
          <div class="profile-stat"><div class="p-stat-val" style="color:var(--warning);">🔥 ${user.streak}</div><div class="p-stat-label">Streak</div></div>
          <div class="profile-stat"><div class="p-stat-val">#${rank || '—'}</div><div class="p-stat-label">Rank</div></div>
        </div>` : ''}
      </div>
    </div>

    ${user.role === 'student' ? `
    <div class="stats-row">
      <div class="stat-card animate-fade-in-up delay-1"><div class="stat-label">Quizzes Taken</div><div class="stat-value">${user.quizzesTaken}</div></div>
      <div class="stat-card animate-fade-in-up delay-2"><div class="stat-label">Accuracy</div><div class="stat-value" style="color:var(--success);">${accuracy}%</div></div>
      <div class="stat-card animate-fade-in-up delay-3"><div class="stat-label">Level Progress</div><div class="stat-value">${Math.round(levelProgress*100)}%</div>
        <div class="progress-bar" style="margin-top:var(--space-sm);"><div class="progress-bar-fill" style="width:${Math.round(levelProgress*100)}%;"></div></div></div>
    </div>

    <div class="card animate-fade-in-up delay-3" style="margin-bottom:var(--space-xl);">
      <h3 style="font-weight:700;margin-bottom:var(--space-lg);">🏅 Badge Collection (${userBadges.length}/${allBadges.length})</h3>
      <div class="badges-grid">
        ${allBadges.map(b => {
          const earned = userBadges.find(ub => ub.id === b.id);
          return `<div class="badge-card ${earned?'':'locked'}"><div class="badge-emoji">${b.emoji}</div><div class="badge-name">${b.name}</div><div style="font-size:var(--font-xs);color:var(--text-muted);margin-top:4px;">${b.desc}</div></div>`;
        }).join('')}
      </div>
    </div>

    <div class="card animate-fade-in-up delay-4">
      <h3 style="font-weight:700;margin-bottom:var(--space-lg);">📊 Quiz History</h3>
      ${scores.length > 0 ? `<div class="table-wrap"><table class="table"><thead><tr><th>Quiz</th><th>Score</th><th>Points</th><th>Date</th></tr></thead><tbody>
        ${[...scores].sort((a,b)=>b.date.localeCompare(a.date)).map(s => {
          const quiz = Store.getQuiz(s.quizId);
          const pct = Math.round((s.score/s.total)*100);
          return `<tr><td>${quiz?.title||'Quiz'}</td><td><span class="badge ${pct>=80?'badge-success':pct>=60?'badge-warning':'badge-danger'}">${pct}%</span></td><td style="color:var(--primary-light);">+${s.points}</td><td style="color:var(--text-muted);">${s.date}</td></tr>`;
        }).join('')}
      </tbody></table></div>` : '<div class="empty-state"><div class="empty-icon">📊</div><p>No quiz history yet.</p></div>'}
    </div>` : ''}

    <div class="flex justify-center mt-xl">
      <button class="btn btn-danger" id="logout-btn">🚪 Logout</button>
    </div>
  </div>`;

  wrapper.appendChild(sidebar);
  wrapper.appendChild(main);
  container.innerHTML = '';
  container.appendChild(wrapper);

  document.getElementById('logout-btn')?.addEventListener('click', () => { Store.logout(); Router.navigate('/'); });
}
