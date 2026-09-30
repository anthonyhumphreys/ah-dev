import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

const routes = [
  { label: 'Home', href: '/' },
  { label: 'Writing', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <div className="border-b pb-10">
        <Badge variant="secondary" className="mb-5">
          404
        </Badge>
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Nothing lives at this address
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
          There is no page here. It is either unbuilt, moved, or was only ever a meeting.
        </p>
      </div>

      <nav aria-label="Somewhere useful instead" className="py-10">
        <h2 className="text-xl font-extrabold tracking-tight">Try one of these</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {routes.map((route, index) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(buttonVariants({ variant: index === 0 ? 'default' : 'outline' }))}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          Or press{' '}
          <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            ⌘ K
          </kbd>{' '}
          or{' '}
          <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            Ctrl K
          </kbd>{' '}
          to search the site.
        </p>
      </nav>
    </main>
  );
}
