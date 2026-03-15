/* ===================================================
   quiz.js – Take a quiz page
   =================================================== */

import { Store } from '../data/store.js';
import { Router } from '../router.js';
import { Gamification } from '../data/gamification.js';
import { showToast } from '../components/toast.js';

export function renderQuiz(container, params) {
  const user = Store.getCurrentUser();
  if (!user) { Router.navigate('/login'); return; }

  const quizId = params.id;
  const quiz = Store.getQuiz(quizId);
  if (!quiz) {
    container.innerHTML = `<div class="empty-state" style="min-height:80vh;"><div class="empty-icon">❌</div><p>Quiz not found</p><a href="#/quizzes" class="btn btn-primary mt-lg">Back to Quizzes</a></div>`;
    return;
  }

  let currentQ = 0;
  let answers = new Array(quiz.questions.length).fill(-1);
  let startTime = Date.now();
  let timerInterval = null;
  let elapsedSecs = 0;

  function renderQuestion() {
    const q = quiz.questions[currentQ];
    const progress = ((currentQ + 1) / quiz.questions.length) * 100;

    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header animate-fade-in">
          <div>
            <h2 style="font-size:var(--font-lg); font-weight:700;">${quiz.title}</h2>
            <div class="quiz-progress">
              <span>Question ${currentQ + 1} of ${quiz.questions.length}</span>
            </div>
          </div>
          <div class="quiz-timer" id="quiz-timer">⏱ ${formatTime(elapsedSecs)}</div>
        </div>
        <div class="progress-bar" style="margin-bottom: var(--space-xl);">
          <div class="progress-bar-fill" style="width: ${progress}%;"></div>
        </div>
        <div class="quiz-question-card">
          <h2>${q.q}</h2>
          <div class="quiz-options" id="quiz-options">
            ${q.options.map((opt, i) => `
              <button class="quiz-option ${answers[currentQ] === i ? 'selected' : ''}" data-idx="${i}" id="option-${i}">
                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>
        <div class="quiz-nav">
          <button class="btn btn-secondary" id="quiz-prev" ${currentQ === 0 ? 'disabled style="opacity:0.4;"' : ''}>← Previous</button>
          ${currentQ < quiz.questions.length - 1
            ? '<button class="btn btn-primary" id="quiz-next">Next →</button>'
            : '<button class="btn btn-accent" id="quiz-submit">Submit Quiz ✓</button>'}
        </div>
      </div>
    `;

    // Timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      elapsedSecs = Math.floor((Date.now() - startTime) / 1000);
      const timerEl = document.getElementById('quiz-timer');
      if (timerEl) timerEl.innerHTML = `⏱ ${formatTime(elapsedSecs)}`;
    }, 1000);

    // Option click handlers
    document.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[currentQ] = parseInt(btn.dataset.idx);
        document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Navigation
    document.getElementById('quiz-prev')?.addEventListener('click', () => {
      if (currentQ > 0) { currentQ--; renderQuestion(); }
    });

    document.getElementById('quiz-next')?.addEventListener('click', () => {
      if (answers[currentQ] === -1) { showToast('Please select an answer', 'error'); return; }
      currentQ++;
      renderQuestion();
    });

    document.getElementById('quiz-submit')?.addEventListener('click', () => {
      if (answers.includes(-1)) { showToast('Please answer all questions', 'error'); return; }
      clearInterval(timerInterval);
      submitQuiz();
    });
  }

  function submitQuiz() {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    let correct = 0;
    quiz.questions.forEach((q, i) => { if (answers[i] === q.answer) correct++; });

    const result = Gamification.submitQuiz(user.id, quizId, correct, quiz.questions.length, totalTime);

    // Show results
    const pct = Math.round((correct / quiz.questions.length) * 100);
    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const dashoffset = circumference * (1 - pct / 100);

    let badgeHtml = '';
    if (result.newBadges.length > 0) {
      badgeHtml = `
        <div style="margin-top:var(--space-xl);">
          <h3 style="margin-bottom:var(--space-md);">🎉 New Badges Unlocked!</h3>
          <div class="flex justify-center gap-lg">
            ${result.newBadges.map(b => `
              <div class="badge-card animate-scale-in">
                <div class="badge-emoji">${b.emoji}</div>
                <div class="badge-name">${b.name}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-results animate-fade-in-up">
          <div class="score-circle">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle class="circle-bg" cx="80" cy="80" r="${radius}" stroke-width="10" />
              <circle class="circle-fill" cx="80" cy="80" r="${radius}" stroke-width="10"
                stroke="${pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)'}"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${dashoffset}"
                style="transform: rotate(-90deg); transform-origin: center;" />
            </svg>
            <div class="circle-text" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
              <div style="font-size:var(--font-3xl); font-weight:900;">${pct}%</div>
            </div>
          </div>
          <h2>${pct >= 80 ? 'Excellent! 🎉' : pct >= 60 ? 'Good Job! 👍' : 'Keep Trying! 💪'}</h2>
          <p class="text-muted">You answered ${correct} out of ${quiz.questions.length} correctly in ${formatTime(totalTime)}</p>

          <div class="rewards">
            <div class="reward-item">
              <div class="reward-icon">⚡</div>
              <div style="font-weight:700; color:var(--primary-light);">+${result.points} pts</div>
              <div class="text-muted">Points Earned</div>
            </div>
            ${result.levelUp ? `
              <div class="reward-item">
                <div class="reward-icon">🎊</div>
                <div style="font-weight:700; color:var(--accent);">Level ${result.newLevel}!</div>
                <div class="text-muted">Level Up!</div>
              </div>
            ` : ''}
          </div>

          ${badgeHtml}

          <div class="flex justify-center gap-md mt-xl">
            <a href="#/quizzes" class="btn btn-secondary">Browse Quizzes</a>
            <a href="#/student" class="btn btn-primary">Dashboard</a>
          </div>
        </div>
      </div>
    `;
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  renderQuestion();
}
