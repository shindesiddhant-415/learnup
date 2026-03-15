/* ===================================================
   login.js – Login page
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { showToast } from '../components/toast.js';

export function renderLogin(container) {
  container.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <h1>Welcome back 👋</h1>
        <p class="auth-subtitle">Sign in to continue your learning journey</p>
        <form class="auth-form" id="login-form">
          <div class="input-group">
            <label for="login-email">Email</label>
            <input class="input" type="email" id="login-email" placeholder="you@example.com" required />
          </div>
          <div class="input-group">
            <label for="login-password">Password</label>
            <input class="input" type="password" id="login-password" placeholder="Enter your password" required />
          </div>
          <button type="submit" class="btn btn-primary w-full" id="login-submit">Sign In</button>
        </form>
        <div class="auth-footer">
          Don't have an account? <a href="#/register">Create one</a>
        </div>
        <div style="margin-top: var(--space-lg); padding-top: var(--space-lg); border-top: 1px solid var(--border);">
          <p style="font-size: var(--font-xs); color: var(--text-muted); margin-bottom: var(--space-sm);">Demo accounts (password: demo123)</p>
          <div class="flex gap-sm" style="flex-wrap:wrap;">
            <button class="chip demo-login" data-email="alex@demo.com" id="demo-alex">🎓 Alex (Student)</button>
            <button class="chip demo-login" data-email="maya@demo.com" id="demo-maya">🎓 Maya (Student)</button>
            <button class="chip demo-login" data-email="patel@demo.com" id="demo-patel">👩‍🏫 Dr. Patel (Teacher)</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Login form handler
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = Store.login(email, password);
    if (user) {
      showToast(`Welcome back, ${user.name}!`, 'success');
      Router.navigate(user.role === 'teacher' ? '/teacher' : '/student');
    } else {
      showToast('Invalid email or password', 'error');
    }
  });

  // Demo login chips
  document.querySelectorAll('.demo-login').forEach(chip => {
    chip.style.cursor = 'pointer';
    chip.addEventListener('click', () => {
      const email = chip.dataset.email;
      const user = Store.login(email, 'demo123');
      if (user) {
        showToast(`Logged in as ${user.name}`, 'success');
        Router.navigate(user.role === 'teacher' ? '/teacher' : '/student');
      }
    });
  });
}
