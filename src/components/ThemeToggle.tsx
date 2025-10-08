import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'auto') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('auto');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
      title={`Поточна тема: ${theme === 'auto' ? 'Авто' : theme === 'light' ? 'Світла' : 'Темна'}`}
      aria-label="Перемикач теми"
    >
      {/* Іконка сонця (світла тема) */}
      <svg
        className={`w-5 h-5 transition-all ${
          resolvedTheme === 'light' ? 'text-yellow-400 scale-110' : 'text-gray-400 scale-90'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Іконка місяця (темна тема) */}
      <svg
        className={`w-5 h-5 transition-all ${
          resolvedTheme === 'dark' ? 'text-blue-400 scale-110' : 'text-gray-400 scale-90'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      {/* Індикатор авто-режиму */}
      {theme === 'auto' && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
      )}

      <span className="text-xs text-gray-300 hidden sm:inline">
        {theme === 'auto' ? 'Авто' : theme === 'light' ? 'Світла' : 'Темна'}
      </span>
    </button>
  );
};

export default ThemeToggle;
