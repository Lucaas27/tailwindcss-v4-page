import { Themes } from '@/constants/themes.constants';
import { ThemeProviderContext } from '@/contexts/theme-provider-context';
import { ThemeMode } from '@/types/themes';
import { useEffect, useState } from 'react';

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = Themes.SYSTEM,
  storageKey = 'ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(() => (localStorage.getItem(storageKey) as ThemeMode) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === Themes.SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeMode) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
