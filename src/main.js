/* ===================================================
   main.js – App entry point
   =================================================== */

import './styles/global.css';
import { Router } from './router.js';
import { Store } from './data/store.js';
import { renderNavbar } from './components/navbar.js';
import { renderLanding } from './pages/landing.js';
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';
import { renderStudentDashboard } from './pages/studentDashboard.js';
import { renderTeacherDashboard } from './pages/teacherDashboard.js';
import { renderQuizList } from './pages/quizList.js';
import { renderQuiz } from './pages/quiz.js';
import { renderCreateQuiz } from './pages/createQuiz.js';
import { renderLeaderboard } from './pages/leaderboard.js';
import { renderProfile } from './pages/profile.js';

const app = document.getElementById('app');

function renderPage(renderFn, params = {}) {
  app.innerHTML = '';
  // Add navbar
  const { nav, mobileNav } = renderNavbar();
  app.appendChild(nav);
  app.appendChild(mobileNav);
  // Page content container
  const pageContainer = document.createElement('div');
  pageContainer.id = 'page-content';
  app.appendChild(pageContainer);
  renderFn(pageContainer, params);
  // Scroll to top
  window.scrollTo(0, 0);
}

function renderPageNoNav(renderFn, params = {}) {
  app.innerHTML = '';
  const pageContainer = document.createElement('div');
  pageContainer.id = 'page-content';
  app.appendChild(pageContainer);
  renderFn(pageContainer, params);
  window.scrollTo(0, 0);
}

// Register routes
Router
  .on('/', () => {
    const user = Store.getCurrentUser();
    if (user) {
      Router.navigate(user.role === 'teacher' ? '/teacher' : '/student');
    } else {
      renderPage(renderLanding);
    }
  })
  .on('/login', () => renderPageNoNav(renderLogin))
  .on('/register', () => renderPageNoNav(renderRegister))
  .on('/student', () => renderPage(renderStudentDashboard))
  .on('/teacher', () => renderPage(renderTeacherDashboard))
  .on('/quizzes', () => renderPage(renderQuizList))
  .on('/quiz/:id', (params) => renderPage(renderQuiz, params))
  .on('/create-quiz', () => renderPage(renderCreateQuiz))
  .on('/leaderboard', () => renderPage(renderLeaderboard))
  .on('/profile', () => renderPage(renderProfile))
  .notFound(() => {
    app.innerHTML = `<div class="empty-state" style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;">
      <div class="empty-icon">🔍</div>
      <h2>Page Not Found</h2>
      <p class="text-muted">The page you're looking for doesn't exist.</p>
      <a href="#/" class="btn btn-primary mt-lg">Go Home</a>
    </div>`;
  });

// Initialise store (seeds demo data if first run)
Store.getLeaderboard();

// Start router
Router.start();
