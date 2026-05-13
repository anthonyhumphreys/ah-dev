'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function ColorSchemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-center gap-2">
      <Button type="button" variant="outline" onClick={() => setTheme('light')}>
        Light
      </Button>
      <Button type="button" variant="outline" onClick={() => setTheme('dark')}>
        Dark
      </Button>
      <Button type="button" variant="outline" onClick={() => setTheme('system')}>
        System
      </Button>
    </div>
  );
}
