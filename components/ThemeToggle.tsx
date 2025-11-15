import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';
  return (
    <button
      id="theme-toggle"
      data-testid="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 shadow hover:shadow-md backdrop-blur border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.66-19.95l-1.41-1.41-1.8 1.79 1.42 1.42 1.79-1.8zM17.24 19.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM20 11v2h3v-2h-3zM4.22 19.78l1.42 1.42 1.79-1.8-1.41-1.41-1.8 1.79zM12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.64 13a1 1 0 00-1.05-.14A8 8 0 1111.1 3.41a1 1 0 00-.14-1.05A1 1 0 009 2a10 10 0 1013 13 1 1 0 00-.36-2z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
