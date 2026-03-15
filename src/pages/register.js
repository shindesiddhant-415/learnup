/* ===================================================
   register.js – Registration page
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { showToast } from '../components/toast.js';

export function renderRegister(container) {
  container.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <h1>Create Account ✨</h1>
        <p class="auth-subtitle">Join LearnUp and start your gamified learning journey</p>
        <form class="auth-form" id="register-form">
          <div class="input-group">
            <label for="reg-name">Full Name</label>
            <input class="input" type="text" id="reg-name" placeholder="John Doe" required />
          </div>
          <div class="input-group">
            <label for="reg-email">Email</label>
            <input class="input" type="email" id="reg-email" placeholder="you@example.com" required />
          </div>
          <div class="input-group">
            <label for="reg-password">Password</label>
            <input class="input" type="password" id="reg-password" placeholder="Min 6 characters" required minlength="6" />
          </div>
          <div class="input-group">
            <label>I am a</label>
            <div class="role-selector" id="role-selector">
              <button type="button" class="role-option active" data-role="student" id="role-student">🎓 Student</button>
              <button type="button" class="role-option" data-role="teacher" id="role-teacher">👩‍🏫 Teacher</button>
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-full" id="register-submit">Create Account</button>
        </form>
        <div class="auth-footer">
          Already have an account? <a href="#/login">Sign in</a>
        </div>
      </div>
    </div>
  `;

  // Role selector
  let selectedRole = 'student';
  document.querySelectorAll('.role-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.role-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedRole = btn.dataset.role;
    });
  });

  // Register form handler
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;

    if (!name || !email || password.length < 6) {
      showToast('Please fill all fields correctly', 'error');
      return;
    }

    const user = Store.register(name, email, password, selectedRole);
    if (user) {
      showToast(`Welcome, ${user.name}! Your account is ready.`, 'success');
      Router.navigate(user.role === 'teacher' ? '/teacher' : '/student');
    } else {
      showToast('Email already registered', 'error');
    }
  });
}
