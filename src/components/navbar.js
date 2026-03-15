/* ===================================================
   navbar.js – Top navigation bar component
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { Gamification } from '../data/gamification.js';

export function renderNavbar() {
  const user = Store.getCurrentUser();

  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'main-navbar';

  // Logo
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = `<div class="logo-icon">L</div><span>Learn<span class="text-gradient">Up</span></span>`;
  logo.addEventListener('click', () => Router.navigate('/'));

  // Nav links
  const links = document.createElement('ul');
  links.className = 'nav-links';

  if (user) {
    const dashPath = user.role === 'teacher' ? '/teacher' : '/student';
    links.innerHTML = `
      <li><a href="#${dashPath}" id="nav-dash">Dashboard</a></li>
      <li><a href="#/leaderboard" id="nav-lb">Leaderboard</a></li>
      <li><a href="#/profile" id="nav-profile">Profile</a></li>
    `;
  } else {
    links.innerHTML = `
      <li><a href="#/" id="nav-home">Home</a></li>
      <li><a href="#/login" id="nav-login">Login</a></li>
      <li><a href="#/register" id="nav-register">Sign Up</a></li>
    `;
  }

  // Right section
  const right = document.createElement('div');
  right.className = 'nav-right';

  if (user && user.role === 'student') {
    right.innerHTML = `
      <div class="points-pill">⚡ ${user.points.toLocaleString()} pts</div>
      <div class="avatar" style="background:${user.avatar}">${user.name.charAt(0)}</div>
    `;
  } else if (user) {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'btn btn-secondary btn-sm';
    logoutBtn.textContent = 'Logout';
    logoutBtn.addEventListener('click', () => { Store.logout(); Router.navigate('/'); });
    const av = document.createElement('div');
    av.className = 'avatar';
    av.style.background = user.avatar;
    av.textContent = user.name.charAt(0);
    right.appendChild(av);
    right.appendChild(logoutBtn);
  }

  // Hamburger
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.id = 'hamburger-btn';
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  hamburger.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.toggle('open');
  });

  nav.appendChild(logo);
  nav.appendChild(links);
  nav.appendChild(right);
  nav.appendChild(hamburger);

  // Mobile nav overlay
  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.id = 'mobile-nav';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = '✕';
  closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.appendChild(closeBtn);

  if (user) {
    const dashPath = user.role === 'teacher' ? '/teacher' : '/student';
    ['Dashboard|' + dashPath, 'Leaderboard|/leaderboard', 'Profile|/profile'].forEach(item => {
      const [label, path] = item.split('|');
      const a = document.createElement('a');
      a.href = '#' + path;
      a.textContent = label;
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
      mobileNav.appendChild(a);
    });
    const logoutLink = document.createElement('a');
    logoutLink.href = '#';
    logoutLink.textContent = 'Logout';
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      Store.logout();
      Router.navigate('/');
      mobileNav.classList.remove('open');
    });
    mobileNav.appendChild(logoutLink);
  } else {
    ['Home|/', 'Login|/login', 'Sign Up|/register'].forEach(item => {
      const [label, path] = item.split('|');
      const a = document.createElement('a');
      a.href = '#' + path;
      a.textContent = label;
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
      mobileNav.appendChild(a);
    });
  }

  return { nav, mobileNav };
}
