import { ThemeMode } from "@/constants/themes.constants";
import { ThemeProviderContext } from "@/contexts/theme-provider-context";
import * as React from "react";
import { useEffect, useState } from "react";

export type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: ThemeMode;
    storageKey?: string;
};

export function ThemeProvider({
    children,
    defaultTheme = ThemeMode.DARK,
    storageKey = "ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeMode>(() => (localStorage.getItem(storageKey) as ThemeMode) || defaultTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        

        root.classList.remove("light", "dark");

        root.classList.add(theme);
    }, [theme]);

    const value = {
        resolvedTheme: theme,
        setTheme: (theme: ThemeMode) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        }
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}
