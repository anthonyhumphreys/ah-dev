'use client';

import { Button } from '@/components/ui/button';
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const nextTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark';
  const label = `Switch theme: ${nextTheme}`;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label}
      onClick={() => setTheme(nextTheme)}
    >
      {theme === 'system' || !theme ? (
        <MonitorIcon aria-hidden="true" />
      ) : theme === 'dark' ? (
        <MoonIcon aria-hidden="true" />
      ) : (
        <SunIcon aria-hidden="true" />
      )}
    </Button>
  );
}
