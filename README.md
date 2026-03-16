<p align="center">
  <img src="public/favicon.svg" alt="LearnUp Logo" width="80" />
</p>

<h1 align="center">LearnUp – Gamified Learning Platform</h1>

<p align="center">
  <strong>Learn Smarter, Level Up Faster 🚀</strong>
</p>

<p align="center">
  <a href="https://shindesiddhant-415.github.io/learnup">🔗 Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Get Started</a> •
  <a href="#-project-structure">Structure</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

---

## 📸 Overview

**LearnUp** is a modern, fully client-side gamified learning platform that transforms studying into an engaging, game-like experience. Students earn **points**, unlock **badges**, maintain **streaks**, climb **leaderboards**, and level up — all while taking interactive quizzes. Teachers get a dedicated dashboard to create quizzes and monitor student performance.

> 🎮 No backend required — everything runs in the browser using **LocalStorage**.

---

## ✨ Features

### 🎓 For Students
- **Interactive Quizzes** — Multiple-choice quizzes across categories like Programming, Science, Math, and Geography
- **Points & Leveling** — Earn points for every quiz; level up as you accumulate XP with 20 progressive tiers
- **Achievement Badges** — Unlock 8 unique badges (🎯 First Step, 🔥 Streak Master, 🧠 Quiz Whiz, 📚 Scholar, ⚡ Speed Demon, 💎 Perfect Score, ⭐ Social Star, 🏆 Legend)
- **Streak Tracking** — Build daily learning habits; bonus rewards for consistency
- **Progress Analytics** — Detailed stats: accuracy rate, quizzes completed, correct answers, and level progress
- **Global Leaderboard** — Compete with other learners in real-time rankings

### 👩‍🏫 For Teachers
- **Quiz Creator** — Build custom quizzes with multiple-choice questions, categories, and difficulty levels
- **Student Management** — View all enrolled students and their performance
- **Performance Analytics** — Track class-wide quiz scores and engagement metrics
- **Quiz Management** — Edit or delete quizzes as needed

### 🛡️ Platform Features
- **Role-Based Access** — Separate dashboards and permissions for students and teachers
- **Auth System** — Registration & login with auth guards on protected routes
- **Responsive Design** — Optimized for desktop, tablet, and mobile screens
- **Dark-Themed UI** — Modern glassmorphism design with smooth animations
- **SPA Navigation** — Seamless page transitions with a custom hash-based router
- **Demo Data** — Pre-seeded users and quizzes so you can explore instantly

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Bundler** | [Vite 5.4](https://vitejs.dev/) |
| **Language** | Vanilla JavaScript (ES6+ Modules) |
| **Styling** | Vanilla CSS with CSS Custom Properties |
| **Typography** | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| **Routing** | Custom hash-based SPA router |
| **Data Layer** | LocalStorage with seeded demo data |
| **Deployment** | GitHub Pages via `gh-pages` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/shindesiddhant-415/learnup.git

# Navigate to the project directory
cd learnup

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:5173** (or the next available port).

### Demo Credentials

| Role | Email | Password |
|---|---|---|
| 👨‍🎓 Student | `alex@demo.com` | `demo123` |
| 👨‍🎓 Student | `maya@demo.com` | `demo123` |
| 👩‍🏫 Teacher | `patel@demo.com` | `demo123` |
| 👩‍🏫 Teacher | `kumar@demo.com` | `demo123` |

> All demo accounts use the password **`demo123`**

---

## 📁 Project Structure

```
learnup/
├── index.html                  # Entry HTML
├── package.json                # Scripts & dependencies
├── vite.config.js              # Vite configuration
├── public/
│   └── favicon.svg             # App icon
└── src/
    ├── main.js                 # App entry point & route registration
    ├── router.js               # Hash-based SPA router with auth guards
    ├── components/
    │   ├── navbar.js           # Top navigation bar
    │   ├── sidebar.js          # Sidebar navigation component
    │   └── toast.js            # Toast notification component
    ├── data/
    │   ├── store.js            # LocalStorage data layer (CRUD + seeding)
    │   └── gamification.js     # Points, levels, badges & streak engine
    ├── pages/
    │   ├── landing.js          # Landing / marketing page
    │   ├── login.js            # Login form
    │   ├── register.js         # Registration form
    │   ├── studentDashboard.js # Student home dashboard
    │   ├── teacherDashboard.js # Teacher home dashboard
    │   ├── quizList.js         # Browse available quizzes
    │   ├── quiz.js             # Quiz-taking experience
    │   ├── createQuiz.js       # Quiz creation form (teachers)
    │   ├── leaderboard.js      # Global leaderboard
    │   └── profile.js          # User profile & stats
    └── styles/
        ├── variables.css       # CSS custom properties & design tokens
        ├── global.css          # Reset, base styles & animations
        ├── components.css      # Reusable component styles
        └── pages.css           # Page-specific layouts
```

---

## ⚙️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## 🎮 Gamification System

### Points & Scoring

| Action | Points |
|---|---|
| Correct answer | 20 pts each |
| 80%+ accuracy bonus | +15 pts |
| 90%+ accuracy bonus | +30 pts |
| Perfect score bonus | +50 pts |
| Speed bonus (< 60s) | +25 pts |
| Speed bonus (< 120s) | +10 pts |

### Level Progression

The platform features **20 progressive levels** with increasing XP thresholds:

| Level | XP Required | Level | XP Required |
|---|---|---|---|
| Lv. 1 | 0 | Lv. 11 | 4,700 |
| Lv. 5 | 800 | Lv. 15 | 9,500 |
| Lv. 10 | 3,800 | Lv. 20 | 22,000 |

### Badges

| Badge | Name | Requirement |
|---|---|---|
| 🎯 | First Step | Complete your first quiz |
| 🔥 | Streak Master | Maintain a 5-day streak |
| 🧠 | Quiz Whiz | Score 90%+ on 5 quizzes |
| 📚 | Scholar | Complete 20 quizzes |
| ⚡ | Speed Demon | Finish a quiz in under 60 seconds |
| 💎 | Perfect Score | Get 100% on any quiz |
| ⭐ | Social Star | Reach top 3 on the leaderboard |
| 🏆 | Legend | Reach level 15 |

---

## 🌐 Deployment

The project is configured for **GitHub Pages** deployment:

```bash
# Build and deploy in one command
npm run deploy
```

This runs `vite build` and then publishes the `dist/` folder using the `gh-pages` package.

**Live URL:** [https://shindesiddhant-415.github.io/learnup](https://shindesiddhant-415.github.io/learnup)

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ for learners everywhere<br/>
  <strong>© 2026 LearnUp</strong>
</p>
