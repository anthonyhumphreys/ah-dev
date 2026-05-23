'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { CommandIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'Work', href: '/#products' },
  { label: 'Open Source', href: '/#open-source' },
  { label: 'Technical Leadership', href: '/technical-leadership' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function HeaderWithProjectsMenu() {
  const openCommandPalette = () =>
    window.dispatchEvent(new Event('portfolio:open-command-palette'));

  return (
    <header className="sticky top-0 z-40 border-b bg-background/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-[calc(100%-2rem)] max-w-6xl items-center justify-between gap-4 md:w-[calc(100%-3rem)]">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm font-extrabold tracking-tight text-foreground underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Anthony Humphreys
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'text-muted-foreground hover:text-foreground'
              )}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Open command palette"
            className="hidden md:inline-flex"
            onClick={openCommandPalette}
          >
            <CommandIcon aria-hidden="true" />
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              render={<Button type="button" variant="outline" size="icon" className="md:hidden" />}
            >
              <MenuIcon aria-hidden="true" />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,85vw)]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Move around Anthony Humphreys&apos; portfolio.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <SheetClose key={item.label} render={<Link href={item.href} />}>
                    <span
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'lg' }),
                        'w-full justify-start'
                      )}
                    >
                      {item.label}
                    </span>
                  </SheetClose>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="justify-between"
                  onClick={openCommandPalette}
                >
                  Command Palette
                  <kbd className="text-xs text-muted-foreground">⌘ K</kbd>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
