import { Themes } from '@/constants/themes.constants';

export type ThemeMode = Themes.LIGHT | Themes.DARK | Themes.SYSTEM;

export type ThemeProviderState = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};
