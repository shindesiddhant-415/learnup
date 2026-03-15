import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { renderSidebar } from '../components/sidebar.js';

export function renderLeaderboard(container) {
  const user = Store.getCurrentUser();
  if (!user) { Router.navigate('/login'); return; }
  const sidebar = renderSidebar('lb');
  const lb = Store.getLeaderboard();
  const podiumOrder = [lb[1], lb[0], lb[2]].filter(Boolean);
  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard-layout';
  const main = document.createElement('main');
  main.className = 'dashboard-main';

  const medals = ['🥈','🥇','🥉'];
  const heights = [140,180,120];
  let podiumHtml = podiumOrder.map((p,i) => `
    <div class="podium-item">
      <div class="avatar avatar-lg" style="background:${p.avatar}">${p.name.charAt(0)}</div>
      <div class="podium-name">${p.name}</div>
      <div class="podium-points">${p.points.toLocaleString()} pts</div>
      <div class="podium-bar" style="height:${heights[i]}px;background:${i===1?'linear-gradient(180deg,#FFD700,#FFA500)':i===0?'var(--gradient-primary)':'var(--gradient-cool)'};">${medals[i]}</div>
    </div>`).join('');

  let rowsHtml = lb.map((s,i) => {
    const isMe = s.id === user.id;
    return `<tr style="${isMe?'background:rgba(108,92,231,0.1);':''}">
      <td style="font-weight:700;">${i<3?['🥇','🥈','🥉'][i]:i+1}</td>
      <td><div class="flex items-center gap-sm"><div class="avatar avatar-sm" style="background:${s.avatar}">${s.name.charAt(0)}</div><span ${isMe?'style="font-weight:700;color:var(--primary-light);"':''}>${s.name}${isMe?' (You)':''}</span></div></td>
      <td style="font-weight:600;color:var(--primary-light);">${s.points.toLocaleString()}</td>
      <td><span class="badge badge-accent">Lv ${s.level}</span></td>
      <td>🔥 ${s.streak}</td><td>${s.quizzesTaken}</td></tr>`;
  }).join('');

  main.innerHTML = `<div class="leaderboard-page">
    <div class="dashboard-header animate-fade-in"><h1>🏆 Leaderboard</h1><span class="badge badge-primary">${lb.length} Students</span></div>
    <div class="podium animate-fade-in-up">${podiumHtml}</div>
    <div class="card animate-fade-in-up delay-2"><h3 style="font-weight:700;margin-bottom:var(--space-lg);">Full Rankings</h3>
      <div class="table-wrap"><table class="table"><thead><tr><th>Rank</th><th>Student</th><th>Points</th><th>Level</th><th>Streak</th><th>Quizzes</th></tr></thead><tbody>${rowsHtml}</tbody></table></div></div></div>`;

  wrapper.appendChild(sidebar);
  wrapper.appendChild(main);
  container.innerHTML = '';
  container.appendChild(wrapper);
}
