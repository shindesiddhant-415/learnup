/* ===================================================
   store.js – LocalStorage-based mock data layer
   Seeds demo data on first run. Provides CRUD helpers.
   =================================================== */

const STORAGE_KEY = 'learnup_data';

// Pre-built avatar colours
const AVATAR_COLORS = [
  '#6C5CE7','#00CEC9','#FD79A8','#FDCB6E','#74B9FF',
  '#FF6B6B','#A29BFE','#00D2A0','#E17055','#636E72',
];

// ── Seed data ──────────────────────────────────────
function getDefaultData() {
  return {
    users: [
      { id: 'u1', name: 'Alex Johnson',  email: 'alex@demo.com',   password: 'demo123', role: 'student', avatar: AVATAR_COLORS[0], points: 2450, level: 8, streak: 12, badges: ['b1','b2','b3','b5'], quizzesTaken: 18, quizzesCorrect: 142, quizzesTotal: 180 },
      { id: 'u2', name: 'Maya Chen',     email: 'maya@demo.com',   password: 'demo123', role: 'student', avatar: AVATAR_COLORS[1], points: 3120, level: 10, streak: 24, badges: ['b1','b2','b3','b4','b5','b6'], quizzesTaken: 25, quizzesCorrect: 210, quizzesTotal: 250 },
      { id: 'u3', name: 'Sam Williams',  email: 'sam@demo.com',    password: 'demo123', role: 'student', avatar: AVATAR_COLORS[2], points: 1870, level: 6, streak: 5,  badges: ['b1','b2'], quizzesTaken: 12, quizzesCorrect: 89, quizzesTotal: 120 },
      { id: 'u4', name: 'Dr. Patel',     email: 'patel@demo.com',  password: 'demo123', role: 'teacher', avatar: AVATAR_COLORS[3], points: 0, level: 0, streak: 0, badges: [], quizzesTaken: 0, quizzesCorrect: 0, quizzesTotal: 0 },
      { id: 'u5', name: 'Lisa Wang',     email: 'lisa@demo.com',   password: 'demo123', role: 'student', avatar: AVATAR_COLORS[4], points: 980,  level: 4, streak: 3,  badges: ['b1'], quizzesTaken: 8, quizzesCorrect: 58, quizzesTotal: 80 },
      { id: 'u6', name: 'Prof. Kumar',   email: 'kumar@demo.com',  password: 'demo123', role: 'teacher', avatar: AVATAR_COLORS[5], points: 0, level: 0, streak: 0, badges: [], quizzesTaken: 0, quizzesCorrect: 0, quizzesTotal: 0 },
      { id: 'u7', name: 'Jordan Lee',    email: 'jordan@demo.com', password: 'demo123', role: 'student', avatar: AVATAR_COLORS[6], points: 1520, level: 5, streak: 8, badges: ['b1','b2','b3'], quizzesTaken: 14, quizzesCorrect: 105, quizzesTotal: 140 },
      { id: 'u8', name: 'Priya Sharma',  email: 'priya@demo.com',  password: 'demo123', role: 'student', avatar: AVATAR_COLORS[7], points: 2780, level: 9, streak: 18, badges: ['b1','b2','b3','b4','b5'], quizzesTaken: 22, quizzesCorrect: 187, quizzesTotal: 220 },
    ],

    badges: [
      { id: 'b1', name: 'First Step',    emoji: '🎯', desc: 'Complete your first quiz' },
      { id: 'b2', name: 'Streak Master', emoji: '🔥', desc: 'Maintain a 5-day streak' },
      { id: 'b3', name: 'Quiz Whiz',     emoji: '🧠', desc: 'Score 90%+ on 5 quizzes' },
      { id: 'b4', name: 'Scholar',       emoji: '📚', desc: 'Complete 20 quizzes' },
      { id: 'b5', name: 'Speed Demon',   emoji: '⚡', desc: 'Finish a quiz in under 60s' },
      { id: 'b6', name: 'Perfect Score', emoji: '💎', desc: 'Get 100% on any quiz' },
      { id: 'b7', name: 'Social Star',   emoji: '⭐', desc: 'Reach top 3 on leaderboard' },
      { id: 'b8', name: 'Legend',         emoji: '🏆', desc: 'Reach level 15' },
    ],

    quizzes: [
      {
        id: 'q1', title: 'JavaScript Basics', category: 'Programming', difficulty: 'Easy',
        createdBy: 'u4', createdAt: '2026-03-10',
        questions: [
          { q: 'What keyword declares a constant in JavaScript?', options: ['var', 'let', 'const', 'define'], answer: 2 },
          { q: 'Which method converts JSON to a JS object?', options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.decode()'], answer: 0 },
          { q: 'What does "===" check for?', options: ['Value only', 'Type only', 'Value and type', 'Reference'], answer: 2 },
          { q: 'Which is NOT a JS data type?', options: ['string', 'boolean', 'float', 'undefined'], answer: 2 },
          { q: 'What does Array.push() do?', options: ['Remove first', 'Add to end', 'Sort array', 'Reverse array'], answer: 1 },
        ],
      },
      {
        id: 'q2', title: 'World Geography', category: 'Geography', difficulty: 'Medium',
        createdBy: 'u6', createdAt: '2026-03-08',
        questions: [
          { q: 'What is the largest continent by area?', options: ['Africa', 'North America', 'Asia', 'Europe'], answer: 2 },
          { q: 'Which river is the longest?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], answer: 1 },
          { q: 'Which country has the most time zones?', options: ['Russia', 'USA', 'France', 'China'], answer: 2 },
          { q: 'What is the smallest country?', options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'], answer: 1 },
          { q: 'Mount Everest is in which mountain range?', options: ['Alps', 'Andes', 'Rockies', 'Himalayas'], answer: 3 },
        ],
      },
      {
        id: 'q3', title: 'Science Fundamentals', category: 'Science', difficulty: 'Easy',
        createdBy: 'u4', createdAt: '2026-03-12',
        questions: [
          { q: 'What gas do plants absorb from air?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], answer: 2 },
          { q: 'What is the chemical symbol for water?', options: ['O2', 'H2O', 'CO2', 'HO'], answer: 1 },
          { q: 'What planet is known as the Red Planet?', options: ['Jupiter', 'Venus', 'Mars', 'Saturn'], answer: 2 },
          { q: 'What force keeps us on the ground?', options: ['Magnetism', 'Friction', 'Gravity', 'Inertia'], answer: 2 },
          { q: 'How many bones are in an adult human body?', options: ['106', '206', '306', '186'], answer: 1 },
        ],
      },
      {
        id: 'q4', title: 'Advanced Mathematics', category: 'Math', difficulty: 'Hard',
        createdBy: 'u6', createdAt: '2026-03-14',
        questions: [
          { q: 'What is the derivative of sin(x)?', options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'], answer: 0 },
          { q: 'What is ∫ 2x dx?', options: ['x²', 'x² + C', '2x²', '2x² + C'], answer: 1 },
          { q: 'What is the value of e (approx.)?', options: ['2.718', '3.14', '1.414', '1.618'], answer: 0 },
          { q: 'What is log₂(8)?', options: ['2', '3', '4', '8'], answer: 1 },
          { q: 'What is the sum of interior angles of a hexagon?', options: ['540°', '720°', '360°', '900°'], answer: 1 },
        ],
      },
    ],

    scores: [
      { id: 's1', userId: 'u1', quizId: 'q1', score: 4, total: 5, points: 80,  date: '2026-03-11' },
      { id: 's2', userId: 'u2', quizId: 'q1', score: 5, total: 5, points: 120, date: '2026-03-11' },
      { id: 's3', userId: 'u1', quizId: 'q2', score: 3, total: 5, points: 60,  date: '2026-03-12' },
      { id: 's4', userId: 'u3', quizId: 'q3', score: 4, total: 5, points: 80,  date: '2026-03-13' },
      { id: 's5', userId: 'u2', quizId: 'q3', score: 5, total: 5, points: 120, date: '2026-03-13' },
      { id: 's6', userId: 'u7', quizId: 'q1', score: 3, total: 5, points: 60,  date: '2026-03-12' },
      { id: 's7', userId: 'u8', quizId: 'q2', score: 5, total: 5, points: 120, date: '2026-03-14' },
      { id: 's8', userId: 'u5', quizId: 'q3', score: 3, total: 5, points: 60,  date: '2026-03-14' },
    ],

    currentUser: null,
  };
}

// ── Helpers ────────────────────────────────────────
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return null;
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getData() {
  let data = load();
  if (!data) {
    data = getDefaultData();
    save(data);
  }
  return data;
}

// ── Public API ─────────────────────────────────────
export const Store = {
  // Reset to demo data
  reset() {
    const data = getDefaultData();
    save(data);
    return data;
  },

  // ── Auth ──
  login(email, password) {
    const data = getData();
    const user = data.users.find(u => u.email === email && u.password === password);
    if (!user) return null;
    data.currentUser = user.id;
    save(data);
    return user;
  },

  logout() {
    const data = getData();
    data.currentUser = null;
    save(data);
  },

  getCurrentUser() {
    const data = getData();
    if (!data.currentUser) return null;
    return data.users.find(u => u.id === data.currentUser) || null;
  },

  register(name, email, password, role) {
    const data = getData();
    if (data.users.find(u => u.email === email)) return null;
    const newUser = {
      id: 'u' + Date.now(),
      name, email, password, role,
      avatar: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
      points: 0, level: 1, streak: 0, badges: [],
      quizzesTaken: 0, quizzesCorrect: 0, quizzesTotal: 0,
    };
    data.users.push(newUser);
    data.currentUser = newUser.id;
    save(data);
    return newUser;
  },

  // ── Users ──
  getUser(id) {
    return getData().users.find(u => u.id === id) || null;
  },

  getStudents() {
    return getData().users.filter(u => u.role === 'student');
  },

  updateUser(id, updates) {
    const data = getData();
    const idx = data.users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    Object.assign(data.users[idx], updates);
    save(data);
    return data.users[idx];
  },

  // ── Quizzes ──
  getQuizzes() { return getData().quizzes; },

  getQuiz(id) { return getData().quizzes.find(q => q.id === id) || null; },

  getQuizzesByCreator(userId) {
    return getData().quizzes.filter(q => q.createdBy === userId);
  },

  addQuiz(quiz) {
    const data = getData();
    quiz.id = 'q' + Date.now();
    quiz.createdAt = new Date().toISOString().split('T')[0];
    data.quizzes.push(quiz);
    save(data);
    return quiz;
  },

  deleteQuiz(id) {
    const data = getData();
    data.quizzes = data.quizzes.filter(q => q.id !== id);
    data.scores = data.scores.filter(s => s.quizId !== id);
    save(data);
  },

  // ── Scores ──
  getScores() { return getData().scores; },

  getScoresByUser(userId) {
    return getData().scores.filter(s => s.userId === userId);
  },

  getScoresByQuiz(quizId) {
    return getData().scores.filter(s => s.quizId === quizId);
  },

  addScore(userId, quizId, score, total, points) {
    const data = getData();
    const s = {
      id: 's' + Date.now(),
      userId, quizId, score, total, points,
      date: new Date().toISOString().split('T')[0],
    };
    data.scores.push(s);

    // Update user stats
    const userIdx = data.users.findIndex(u => u.id === userId);
    if (userIdx !== -1) {
      data.users[userIdx].quizzesTaken += 1;
      data.users[userIdx].quizzesCorrect += score;
      data.users[userIdx].quizzesTotal += total;
      data.users[userIdx].points += points;
    }
    save(data);
    return s;
  },

  // ── Badges ──
  getAllBadges() { return getData().badges; },

  getUserBadges(userId) {
    const data = getData();
    const user = data.users.find(u => u.id === userId);
    if (!user) return [];
    return data.badges.filter(b => user.badges.includes(b.id));
  },

  awardBadge(userId, badgeId) {
    const data = getData();
    const user = data.users.find(u => u.id === userId);
    if (!user || user.badges.includes(badgeId)) return false;
    user.badges.push(badgeId);
    save(data);
    return true;
  },

  // ── Leaderboard ──
  getLeaderboard() {
    return getData().users
      .filter(u => u.role === 'student')
      .sort((a, b) => b.points - a.points);
  },
};
