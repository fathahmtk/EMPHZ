
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

export type Theme = 'default' | 'teal-green' | 'teal-blue';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('default');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && ['default', 'teal-green', 'teal-blue'].includes(storedTheme)) {
      setThemeState(storedTheme as Theme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  useEffect(() => {
    // Apply initial theme when the component mounts
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
