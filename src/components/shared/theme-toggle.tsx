import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/hooks/useTheme';
import { Themes } from '@/constants/themes.constants';
import { Button } from '@/components/ui/button/INDEX';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-accent">
        <Button variant="ghost" size="sm">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(Themes.LIGHT)}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Themes.DARK)}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Themes.SYSTEM)}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
