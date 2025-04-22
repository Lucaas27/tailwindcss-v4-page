import { ThemeMode } from "@/constants/themes.constants";


export type ThemeProviderState = {
    resolvedTheme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
};
