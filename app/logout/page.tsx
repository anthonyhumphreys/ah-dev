import { buttonVariants } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign out',
  robots: { index: false, follow: false },
};

export default function Logout() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <h1 className="text-4xl font-black leading-none tracking-tight md:text-5xl">Sign out</h1>
      <a href="/api/auth/logout" className={buttonVariants({ className: 'mt-8' })}>
        Log out
      </a>
    </main>
  );
}
