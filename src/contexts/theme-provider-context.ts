import { Themes } from '@/constants/themes.constants';
import { ThemeProviderState } from '@/types/themes';
import { createContext } from 'react';

const initialState: ThemeProviderState = {
  theme: Themes.SYSTEM,
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
