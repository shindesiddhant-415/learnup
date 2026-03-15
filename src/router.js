/* ===================================================
   router.js – Simple hash-based SPA router
   =================================================== */

import { Store } from './data/store.js';

const routes = {};
let notFoundHandler = null;

export const Router = {
  // Register a route
  on(path, handler) {
    routes[path] = handler;
    return this;
  },

  // 404 handler
  notFound(handler) {
    notFoundHandler = handler;
    return this;
  },

  // Navigate to a route
  navigate(path) {
    window.location.hash = path;
  },

  // Get current path
  currentPath() {
    return window.location.hash.slice(1) || '/';
  },

  // Resolve current route
  resolve() {
    const path = this.currentPath();
    const user = Store.getCurrentUser();

    // Auth guard: redirect to login if not logged in and accessing protected routes
    const publicPaths = ['/', '/login', '/register'];
    if (!publicPaths.includes(path) && !user) {
      this.navigate('/login');
      return;
    }

    // If logged in and hitting login/register, redirect to dashboard
    if (user && (path === '/login' || path === '/register')) {
      this.navigate(user.role === 'teacher' ? '/teacher' : '/student');
      return;
    }

    // Handle parameterised routes like /quiz/q1
    let handler = routes[path];
    let params = {};

    if (!handler) {
      // Try matching parameterised routes
      for (const [pattern, h] of Object.entries(routes)) {
        const regex = new RegExp('^' + pattern.replace(/:([^/]+)/g, '([^/]+)') + '$');
        const match = path.match(regex);
        if (match) {
          handler = h;
          const paramNames = [...pattern.matchAll(/:([^/]+)/g)].map(m => m[1]);
          paramNames.forEach((name, i) => { params[name] = match[i + 1]; });
          break;
        }
      }
    }

    if (handler) {
      handler(params);
    } else if (notFoundHandler) {
      notFoundHandler();
    }
  },

  // Start listening
  start() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  },
};
