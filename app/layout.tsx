import { HeaderWithProjectsMenu } from '@/components/Header/Header';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { theme } from '../theme';

export const metadata = {
  title: 'Anthony Humphreys | Product Engineering, AI and Mobile Platforms',
  description:
    'A showcase of software products, AI systems, mobile platforms, research tools, and digital services built by Anthony Humphreys.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        {/* <link rel="shortcut icon" href="/favicon.jpeg" /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <HeaderWithProjectsMenu />
          {children}
        </MantineProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
