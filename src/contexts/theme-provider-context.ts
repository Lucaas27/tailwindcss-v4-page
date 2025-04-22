import { ThemeMode } from "@/constants/themes.constants";
import { ThemeProviderState } from "@/types/themes";
import { createContext } from "react";

const initialState: ThemeProviderState = {
    resolvedTheme: ThemeMode.DARK,
    setTheme: () => null
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
