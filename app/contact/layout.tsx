'use client';

import { Container } from '@mantine/core';

export default function RootLayout({ children }: { children: any }) {
  return <Container size="sm">{children}</Container>;
}
