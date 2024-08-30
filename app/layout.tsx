import { HeaderWithProjectsMenu } from '@/components/Header/Header';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { theme } from '../theme';

export const metadata = {
  title: 'AnthonyHumphreys.dev',
  description: 'Innovation, Technology, and Beyond',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
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
          <UserProvider>{children}</UserProvider>
        </MantineProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
