import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { ThemeMode } from "@/constants/themes.constants.ts";

export function ThemeToggle() {
    const {setTheme, resolvedTheme} = useTheme();

    const isDark = resolvedTheme === ThemeMode.DARK;

    const handleToggleTheme = () => {
        setTheme(isDark ? ThemeMode.LIGHT : ThemeMode.DARK);
    };

    return (

        <Button variant="ghost" size="sm" className="fix top-4 right-4 p-2 rounded-full bg-theme-accent"
                onClick={handleToggleTheme}>
            {
                resolvedTheme === ThemeMode.LIGHT
                    ? <Sun
                        className="h-8 w-8 transition-all duration-300"/>
                    : <Moon
                        className="h-8 w-8 transition-all duration-300"/>
            }

            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
