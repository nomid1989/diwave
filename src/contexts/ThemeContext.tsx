import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'auto';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem('diwave-theme') as Theme;
    return stored || 'auto';
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');

  // Визначення теми на основі часу доби (6:00-18:00 = світла, інше = темна)
  const getThemeByTime = (): ResolvedTheme => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  };

  // Визначення теми на основі системних налаштувань
  const getSystemTheme = (): ResolvedTheme => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Вирішення фактичної теми
  const resolveTheme = (currentTheme: Theme): ResolvedTheme => {
    if (currentTheme === 'auto') {
      // Спочатку перевіряємо час доби, потім системні налаштування
      const timeBasedTheme = getThemeByTime();
      const systemTheme = getSystemTheme();
      // Пріоритет: час доби > системні налаштування
      return timeBasedTheme || systemTheme;
    }
    return currentTheme;
  };

  useEffect(() => {
    const resolved = resolveTheme(theme);
    setResolvedTheme(resolved);

    // Додаємо клас до html для CSS
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);

    // Зберігаємо вибір користувача
    localStorage.setItem('diwave-theme', theme);
  }, [theme]);

  // Автоматичне оновлення теми кожну годину для режиму 'auto'
  useEffect(() => {
    if (theme !== 'auto') return;

    const interval = setInterval(() => {
      const resolved = resolveTheme('auto');
      setResolvedTheme(resolved);
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(resolved);
    }, 60 * 60 * 1000); // Кожну годину

    return () => clearInterval(interval);
  }, [theme]);

  // Слухаємо зміни системних налаштувань
  useEffect(() => {
    if (theme !== 'auto') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const resolved = resolveTheme('auto');
      setResolvedTheme(resolved);
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(resolved);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
