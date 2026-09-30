'use client';

import { Button } from '@/components/ui/button';
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const mounted = useMounted();

  const currentTheme = mounted && theme ? theme : 'system';
  const nextTheme =
    currentTheme === 'dark' ? 'light' : currentTheme === 'light' ? 'system' : 'dark';
  const label = `Theme: ${currentTheme}. Switch to ${nextTheme}.`;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label}
      title={label}
      onClick={() => setTheme(nextTheme)}
    >
      {currentTheme === 'dark' ? (
        <MoonIcon aria-hidden="true" />
      ) : currentTheme === 'light' ? (
        <SunIcon aria-hidden="true" />
      ) : (
        <MonitorIcon aria-hidden="true" />
      )}
    </Button>
  );
}
