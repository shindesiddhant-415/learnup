/* ===================================================
   quizList.js – Browse available quizzes
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { renderSidebar } from '../components/sidebar.js';

export function renderQuizList(container) {
  const user = Store.getCurrentUser();
  if (!user) { Router.navigate('/login'); return; }

  const sidebar = renderSidebar('quizzes');
  const quizzes = Store.getQuizzes();
  const scores = Store.getScoresByUser(user.id);
  const takenIds = scores.map(s => s.quizId);

  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard-layout';

  const main = document.createElement('main');
  main.className = 'dashboard-main';
  main.innerHTML = `
    <div class="dashboard-header animate-fade-in">
      <h1>📝 Available Quizzes</h1>
    </div>
    <div class="features-grid">
      ${quizzes.map((q, i) => {
        const taken = takenIds.includes(q.id);
        const score = scores.find(s => s.quizId === q.id);
        return `
          <div class="feature-card animate-fade-in-up delay-${i % 6 + 1}" style="cursor:pointer;" id="quiz-card-${q.id}">
            <div class="flex items-center justify-between" style="margin-bottom: var(--space-md);">
              <span class="badge ${q.difficulty === 'Easy' ? 'badge-success' : q.difficulty === 'Medium' ? 'badge-warning' : 'badge-danger'}">${q.difficulty}</span>
              ${taken ? '<span class="badge badge-accent">✓ Completed</span>' : ''}
            </div>
            <h3 style="margin-bottom: var(--space-sm);">${q.title}</h3>
            <div class="flex items-center gap-sm" style="margin-bottom: var(--space-md);">
              <span class="chip">${q.category}</span>
              <span class="chip">${q.questions.length} Questions</span>
            </div>
            ${taken && score ? `
              <div class="flex items-center justify-between" style="font-size:var(--font-sm);">
                <span style="color:var(--text-muted);">Your score: ${Math.round((score.score/score.total)*100)}%</span>
                <span style="color:var(--primary-light);">+${score.points} pts</span>
              </div>
            ` : `
              <a href="#/quiz/${q.id}" class="btn btn-primary btn-sm w-full">Start Quiz →</a>
            `}
          </div>
        `;
      }).join('')}
    </div>
  `;

  wrapper.appendChild(sidebar);
  wrapper.appendChild(main);
  container.innerHTML = '';
  container.appendChild(wrapper);
}
