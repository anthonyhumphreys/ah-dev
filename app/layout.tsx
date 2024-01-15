import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { theme } from '../theme';
import { HeaderWithProjectsMenu } from '@/components/Header/Header';

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
          {children}
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
