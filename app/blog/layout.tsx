import { Container } from '@mantine/core';

export default function RootLayout({ children }: { children: any }) {
  return <Container size="lg">{children}</Container>;
}
