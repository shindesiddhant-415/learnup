/* ===================================================
   gamification.js – Points, levels, badges, streaks
   =================================================== */

import { Store } from './store.js';

// ── Level thresholds ───────────────────────────────
const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 800, 1200, 1700, 2300, 3000, 3800,
  4700, 5700, 6800, 8000, 9500, 11000, 13000, 15500, 18500, 22000,
];

export const Gamification = {
  // Calculate level from points
  getLevel(points) {
    let level = 1;
    for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
      if (points >= LEVEL_THRESHOLDS[i]) level = i + 1;
      else break;
    }
    return level;
  },

  // Progress within current level (0..1)
  getLevelProgress(points) {
    const level = this.getLevel(points);
    const current = LEVEL_THRESHOLDS[level - 1] || 0;
    const next = LEVEL_THRESHOLDS[level] || current + 1000;
    return (points - current) / (next - current);
  },

  // Points until next level
  pointsToNextLevel(points) {
    const level = this.getLevel(points);
    const next = LEVEL_THRESHOLDS[level] || (LEVEL_THRESHOLDS[level - 1] || 0) + 1000;
    return Math.max(0, next - points);
  },

  // Calculate quiz score points
  calculateQuizPoints(correct, total, timeTakenSecs) {
    const accuracy = correct / total;
    let base = correct * 20;
    // Accuracy bonus
    if (accuracy >= 1)        base += 50;
    else if (accuracy >= 0.9) base += 30;
    else if (accuracy >= 0.8) base += 15;
    // Speed bonus
    if (timeTakenSecs < 60) base += 25;
    else if (timeTakenSecs < 120) base += 10;
    return base;
  },

  // Submit quiz and process rewards — returns { points, newBadges, levelUp }
  submitQuiz(userId, quizId, correct, total, timeTakenSecs) {
    const points = this.calculateQuizPoints(correct, total, timeTakenSecs);
    Store.addScore(userId, quizId, correct, total, points);

    const user = Store.getUser(userId);
    const oldLevel = user.level;
    const newLevel = this.getLevel(user.points);
    if (newLevel !== oldLevel) {
      Store.updateUser(userId, { level: newLevel });
    }

    // Update streak
    Store.updateUser(userId, { streak: user.streak + 1 });

    // Check badge awards
    const newBadges = [];
    const updatedUser = Store.getUser(userId);

    // First Step
    if (updatedUser.quizzesTaken >= 1) {
      if (Store.awardBadge(userId, 'b1')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b1'));
    }
    // Streak Master (5-day)
    if (updatedUser.streak >= 5) {
      if (Store.awardBadge(userId, 'b2')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b2'));
    }
    // Quiz Whiz (90%+ on 5 quizzes)
    const scores = Store.getScoresByUser(userId);
    const high = scores.filter(s => s.score / s.total >= 0.9).length;
    if (high >= 5) {
      if (Store.awardBadge(userId, 'b3')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b3'));
    }
    // Scholar (20 quizzes)
    if (updatedUser.quizzesTaken >= 20) {
      if (Store.awardBadge(userId, 'b4')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b4'));
    }
    // Speed Demon
    if (timeTakenSecs < 60) {
      if (Store.awardBadge(userId, 'b5')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b5'));
    }
    // Perfect Score
    if (correct === total) {
      if (Store.awardBadge(userId, 'b6')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b6'));
    }
    // Social Star (top 3)
    const lb = Store.getLeaderboard();
    const rank = lb.findIndex(u => u.id === userId);
    if (rank >= 0 && rank < 3) {
      if (Store.awardBadge(userId, 'b7')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b7'));
    }
    // Legend (level 15)
    if (newLevel >= 15) {
      if (Store.awardBadge(userId, 'b8')) newBadges.push(Store.getAllBadges().find(b => b.id === 'b8'));
    }

    return {
      points,
      newBadges,
      levelUp: newLevel > oldLevel,
      newLevel,
      correct,
      total,
    };
  },
};
