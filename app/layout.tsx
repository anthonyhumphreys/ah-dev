import { HeaderWithProjectsMenu } from '@/components/Header/Header';
import { SiteShortcuts } from '@/components/SiteShortcuts/SiteShortcuts';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const siteUrl = 'https://anthonyhumphreys.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Anthony Humphreys | Product Engineering, AI and Mobile Platforms',
    template: '%s | Anthony Humphreys',
  },
  description:
    'Anthony Humphreys is a product-minded senior developer building AI systems, mobile platforms, research tools, and digital services from discovery to shipped product.',
  applicationName: 'Anthony Humphreys Portfolio',
  authors: [{ name: 'Anthony Humphreys', url: siteUrl }],
  creator: 'Anthony Humphreys',
  publisher: 'Anthony Humphreys',
  keywords: [
    'Anthony Humphreys',
    'senior developer',
    'product engineering',
    'AI systems',
    'mobile platforms',
    'React Native',
    'Next.js',
    'research software',
    'Lancaster University',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Anthony Humphreys',
    title: 'Anthony Humphreys | Product Engineering, AI and Mobile Platforms',
    description:
      'Product-minded senior developer building AI systems, mobile platforms, research tools, and digital services.',
  },
  twitter: {
    card: 'summary',
    title: 'Anthony Humphreys | Product Engineering, AI and Mobile Platforms',
    description:
      'Product-minded senior developer building AI systems, mobile platforms, research tools, and digital services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  themeColor: '#fdfefe',
};

export default function RootLayout({ children }: { children: any }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anthony Humphreys',
    url: siteUrl,
    jobTitle: 'Product-minded senior developer',
    sameAs: ['https://github.com/anthonyhumphreys', 'https://twitter.com/aphumphreys'],
    knowsAbout: [
      'Product engineering',
      'AI systems',
      'Mobile platforms',
      'Research software',
      'React Native',
      'Next.js',
      'Cloud delivery',
    ],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Product engineering, AI systems, mobile platforms, and research tools',
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={cn('font-sans', geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="fixed top-3 left-3 z-50 -translate-y-24 rounded-lg bg-foreground px-3 py-2 text-sm font-semibold text-background transition-transform focus-visible:translate-y-0"
          >
            Skip to main content
          </a>
          <HeaderWithProjectsMenu />
          {children}
          <SiteShortcuts />
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
