import { buttonVariants } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
};

export default function Login() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <h1 className="text-4xl font-black leading-none tracking-tight md:text-5xl">Sign in</h1>
      <a href="/api/auth/login" className={buttonVariants({ className: 'mt-8' })}>
        Log in
      </a>
    </main>
  );
}
