/* ===================================================
   sidebar.js – Dashboard sidebar component
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';

export function renderSidebar(activeId) {
  const user = Store.getCurrentUser();
  if (!user) return '';

  const studentLinks = [
    { id: 'dash', icon: '📊', label: 'Dashboard', path: '/student' },
    { id: 'quizzes', icon: '📝', label: 'Take Quiz', path: '/quizzes' },
    { id: 'lb', icon: '🏆', label: 'Leaderboard', path: '/leaderboard' },
    { id: 'profile', icon: '👤', label: 'Profile', path: '/profile' },
  ];

  const teacherLinks = [
    { id: 'dash', icon: '📊', label: 'Dashboard', path: '/teacher' },
    { id: 'create', icon: '➕', label: 'Create Quiz', path: '/create-quiz' },
    { id: 'lb', icon: '🏆', label: 'Leaderboard', path: '/leaderboard' },
    { id: 'profile', icon: '👤', label: 'Profile', path: '/profile' },
  ];

  const links = user.role === 'teacher' ? teacherLinks : studentLinks;

  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  // User info at top
  const userSection = document.createElement('div');
  userSection.style.cssText = 'padding: var(--space-md) var(--space-lg); margin-bottom: var(--space-md);';
  userSection.innerHTML = `
    <div class="flex items-center gap-md" style="margin-bottom: var(--space-md);">
      <div class="avatar" style="background:${user.avatar}">${user.name.charAt(0)}</div>
      <div>
        <div style="font-weight:600; font-size: var(--font-sm);">${user.name}</div>
        <div style="font-size: var(--font-xs); color: var(--text-muted); text-transform:capitalize;">${user.role}</div>
      </div>
    </div>
  `;
  aside.appendChild(userSection);

  // Section header
  const section = document.createElement('div');
  section.className = 'sidebar-section';
  section.textContent = 'Navigation';
  aside.appendChild(section);

  // Links
  const nav = document.createElement('ul');
  nav.className = 'sidebar-nav';

  links.forEach(link => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = `sidebar-link${activeId === link.id ? ' active' : ''}`;
    btn.innerHTML = `<span>${link.icon}</span> ${link.label}`;
    btn.addEventListener('click', () => Router.navigate(link.path));
    li.appendChild(btn);
    nav.appendChild(li);
  });

  aside.appendChild(nav);

  // Logout at bottom
  const logoutSection = document.createElement('div');
  logoutSection.style.cssText = 'margin-top: auto; padding: var(--space-lg) var(--space-md); position: absolute; bottom: var(--space-lg); left: 0; right: 0;';
  const logoutBtn = document.createElement('button');
  logoutBtn.className = 'sidebar-link';
  logoutBtn.innerHTML = '<span>🚪</span> Logout';
  logoutBtn.addEventListener('click', () => { Store.logout(); Router.navigate('/'); });
  logoutSection.appendChild(logoutBtn);
  aside.appendChild(logoutSection);

  return aside;
}
