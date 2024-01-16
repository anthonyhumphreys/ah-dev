import Chat from '@/components/Chat/Chat';
import { Container } from '@mantine/core';

export default function UserStories() {
  return (
    <Container size="md">
      <h1>User Stories</h1>
      <Chat />
    </Container>
  );
}
