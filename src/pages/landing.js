/* ===================================================
   landing.js – Landing / Home page
   =================================================== */

import { Router } from '../router.js';

export function renderLanding(container) {
  container.innerHTML = `
    <!-- Hero Section -->
    <section class="landing-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text animate-fade-in-up">
            <div class="badge badge-primary" style="margin-bottom: var(--space-md);">🚀 Gamified Learning Platform</div>
            <h1>Learn Smarter,<br><span class="text-gradient">Level Up Faster</span></h1>
            <p>Transform your learning experience with quizzes, badges, streaks, and leaderboards. Compete with friends and track your progress — all while having fun.</p>
            <div class="hero-actions">
              <a href="#/register" class="btn btn-primary btn-lg" id="hero-cta-signup">Get Started Free</a>
              <a href="#/login" class="btn btn-secondary btn-lg" id="hero-cta-login">Sign In</a>
            </div>
            <div class="hero-stats">
              <div class="hero-stat animate-fade-in delay-2">
                <div class="stat-num text-gradient">10K+</div>
                <div class="stat-text">Active Learners</div>
              </div>
              <div class="hero-stat animate-fade-in delay-3">
                <div class="stat-num text-gradient">500+</div>
                <div class="stat-text">Quizzes</div>
              </div>
              <div class="hero-stat animate-fade-in delay-4">
                <div class="stat-num text-gradient">95%</div>
                <div class="stat-text">Satisfaction</div>
              </div>
            </div>
          </div>
          <div class="hero-visual animate-fade-in delay-2">
            <div class="hero-card-stack">
              <div class="float-card">
                <div style="font-size:1.5rem; margin-bottom: var(--space-sm);">🏆</div>
                <div style="font-weight:700; margin-bottom: 4px;">Quiz Master</div>
                <div style="font-size:var(--font-xs); color:var(--text-secondary);">Score 90%+ on 5 quizzes</div>
                <div class="progress-bar" style="margin-top: var(--space-sm);">
                  <div class="progress-bar-fill" style="width:75%;"></div>
                </div>
              </div>
              <div class="float-card">
                <div class="flex items-center gap-sm" style="margin-bottom: var(--space-sm);">
                  <div class="avatar avatar-sm" style="background:#6C5CE7;">A</div>
                  <div>
                    <div style="font-weight:600; font-size:var(--font-sm);">Alex Johnson</div>
                    <div style="font-size:var(--font-xs); color:var(--accent);">🔥 12-day streak</div>
                  </div>
                </div>
                <div class="flex items-center gap-sm">
                  <span class="badge badge-accent">Level 8</span>
                  <span class="badge badge-primary">2,450 pts</span>
                </div>
              </div>
              <div class="float-card">
                <div style="font-size:var(--font-xs); color:var(--text-muted); margin-bottom: var(--space-sm);">LEADERBOARD</div>
                <div class="flex items-center justify-between" style="margin-bottom:6px;">
                  <div class="flex items-center gap-sm">
                    <span style="font-weight:700;">🥇</span>
                    <span style="font-size:var(--font-sm);">Maya Chen</span>
                  </div>
                  <span style="font-size:var(--font-sm); color:var(--primary-light); font-weight:600;">3,120 pts</span>
                </div>
                <div class="flex items-center justify-between" style="margin-bottom:6px;">
                  <div class="flex items-center gap-sm">
                    <span style="font-weight:700;">🥈</span>
                    <span style="font-size:var(--font-sm);">Priya Sharma</span>
                  </div>
                  <span style="font-size:var(--font-sm); color:var(--primary-light); font-weight:600;">2,780 pts</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-sm">
                    <span style="font-weight:700;">🥉</span>
                    <span style="font-size:var(--font-sm);">Alex Johnson</span>
                  </div>
                  <span style="font-size:var(--font-sm); color:var(--primary-light); font-weight:600;">2,450 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="animate-fade-in">Why <span class="text-gradient">LearnUp</span>?</h2>
        <div class="features-grid">
          <div class="feature-card animate-fade-in-up delay-1">
            <div class="feature-icon" style="background: rgba(108,92,231,0.15);">🎯</div>
            <h3>Interactive Quizzes</h3>
            <p>Engage with beautifully crafted quizzes across multiple subjects. Timed challenges keep you focused and competitive.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-2">
            <div class="feature-icon" style="background: rgba(0,206,201,0.15);">🏅</div>
            <h3>Earn Badges & Rewards</h3>
            <p>Unlock achievements as you progress. From "First Step" to "Legend" — collect them all and showcase your skills.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-3">
            <div class="feature-icon" style="background: rgba(253,121,168,0.15);">🔥</div>
            <h3>Streak Tracking</h3>
            <p>Build daily learning habits with streak tracking. Maintain your streak to earn bonus points and special badges.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-4">
            <div class="feature-icon" style="background: rgba(116,185,255,0.15);">📊</div>
            <h3>Progress Analytics</h3>
            <p>Track your learning journey with detailed analytics. See your strengths, weaknesses, and improvement over time.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-5">
            <div class="feature-icon" style="background: rgba(0,210,160,0.15);">🏆</div>
            <h3>Leaderboards</h3>
            <p>Compete with fellow learners on global leaderboards. Rise through the ranks and claim your spot at the top.</p>
          </div>
          <div class="feature-card animate-fade-in-up delay-6">
            <div class="feature-icon" style="background: rgba(253,203,110,0.15);">👩‍🏫</div>
            <h3>Teacher Dashboard</h3>
            <p>Teachers can create quizzes, manage students, and track class performance with powerful analytics tools.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box animate-fade-in-up">
          <h2>Ready to <span class="text-gradient">Level Up</span>?</h2>
          <p>Join thousands of learners who are already transforming their education journey.</p>
          <a href="#/register" class="btn btn-primary btn-lg" id="cta-bottom-signup">Start Learning Now</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>© 2026 LearnUp. Built with ❤️ for learners everywhere.</p>
      </div>
    </footer>
  `;
}
