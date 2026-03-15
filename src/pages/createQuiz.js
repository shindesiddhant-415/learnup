/* ===================================================
   createQuiz.js – Teacher quiz builder
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { showToast } from '../components/toast.js';
import { renderSidebar } from '../components/sidebar.js';

export function renderCreateQuiz(container) {
  const user = Store.getCurrentUser();
  if (!user || user.role !== 'teacher') { Router.navigate('/login'); return; }

  const sidebar = renderSidebar('create');
  let questions = [{ q: '', options: ['', '', '', ''], answer: 0 }];

  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard-layout';

  const main = document.createElement('main');
  main.className = 'dashboard-main';

  function render() {
    main.innerHTML = `
      <div class="create-quiz-page">
        <div class="dashboard-header animate-fade-in">
          <h1>➕ Create New Quiz</h1>
        </div>

        <div class="card" style="margin-bottom: var(--space-xl);">
          <div class="auth-form">
            <div class="input-group">
              <label for="quiz-title">Quiz Title</label>
              <input class="input" type="text" id="quiz-title" placeholder="e.g. JavaScript Fundamentals" required />
            </div>
            <div class="flex gap-md">
              <div class="input-group" style="flex:1;">
                <label for="quiz-category">Category</label>
                <input class="input" type="text" id="quiz-category" placeholder="e.g. Programming" required />
              </div>
              <div class="input-group" style="flex:1;">
                <label for="quiz-difficulty">Difficulty</label>
                <select class="input" id="quiz-difficulty">
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div id="questions-container">
          ${questions.map((q, qi) => `
            <div class="question-builder animate-fade-in-up">
              <div class="flex items-center justify-between">
                <div class="question-num">Question ${qi + 1}</div>
                ${questions.length > 1 ? `<button class="btn btn-sm btn-danger remove-q-btn" data-qi="${qi}">Remove</button>` : ''}
              </div>
              <div class="input-group" style="margin-top:var(--space-md);">
                <input class="input question-input" type="text" placeholder="Enter question..." data-qi="${qi}" value="${q.q}" />
              </div>
              <div style="margin-top:var(--space-md); display:flex; flex-direction:column; gap:var(--space-sm);">
                ${q.options.map((opt, oi) => `
                  <div class="flex items-center gap-sm">
                    <button class="btn btn-icon btn-sm correct-btn ${q.answer === oi ? 'btn-accent' : 'btn-secondary'}" data-qi="${qi}" data-oi="${oi}" title="Mark as correct answer">
                      ${q.answer === oi ? '✓' : String.fromCharCode(65 + oi)}
                    </button>
                    <input class="input option-input" type="text" placeholder="Option ${String.fromCharCode(65 + oi)}" data-qi="${qi}" data-oi="${oi}" value="${opt}" />
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="flex gap-md mt-lg">
          <button class="btn btn-secondary" id="add-question-btn">+ Add Question</button>
          <button class="btn btn-primary" id="publish-quiz-btn">📤 Publish Quiz</button>
        </div>
      </div>
    `;

    // Sync inputs
    main.querySelectorAll('.question-input').forEach(input => {
      input.addEventListener('input', (e) => {
        questions[parseInt(e.target.dataset.qi)].q = e.target.value;
      });
    });

    main.querySelectorAll('.option-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const qi = parseInt(e.target.dataset.qi);
        const oi = parseInt(e.target.dataset.oi);
        questions[qi].options[oi] = e.target.value;
      });
    });

    main.querySelectorAll('.correct-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qi = parseInt(btn.dataset.qi);
        const oi = parseInt(btn.dataset.oi);
        questions[qi].answer = oi;
        render();
      });
    });

    main.querySelectorAll('.remove-q-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        questions.splice(parseInt(btn.dataset.qi), 1);
        render();
      });
    });

    document.getElementById('add-question-btn')?.addEventListener('click', () => {
      questions.push({ q: '', options: ['', '', '', ''], answer: 0 });
      render();
    });

    document.getElementById('publish-quiz-btn')?.addEventListener('click', () => {
      const title = document.getElementById('quiz-title')?.value?.trim();
      const category = document.getElementById('quiz-category')?.value?.trim();
      const difficulty = document.getElementById('quiz-difficulty')?.value;

      if (!title || !category) { showToast('Please fill in quiz title and category', 'error'); return; }

      for (let i = 0; i < questions.length; i++) {
        if (!questions[i].q.trim()) {
          showToast(`Question ${i + 1} is empty`, 'error');
          return;
        }
        for (let j = 0; j < questions[i].options.length; j++) {
          if (!questions[i].options[j].trim()) {
            showToast(`Option ${String.fromCharCode(65 + j)} in Question ${i + 1} is empty`, 'error');
            return;
          }
        }
      }

      Store.addQuiz({ title, category, difficulty, createdBy: user.id, questions });
      showToast('Quiz published successfully! 🎉', 'success');
      Router.navigate('/teacher');
    });
  }

  wrapper.appendChild(sidebar);
  wrapper.appendChild(main);
  container.innerHTML = '';
  container.appendChild(wrapper);
  render();
}
