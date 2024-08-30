'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Container } from '@mantine/core';
import { useChat } from 'ai/react';
import Chat from '@/components/Chat/Chat';

export default function UserStories() {
  const { user, error, isLoading } = useUser();

  console.log({ user, error, isLoading });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <Container size="md">
        <h1>User Stories</h1>
        {/* @ts-ignore */}
        <Chat />
      </Container>
    )
  );
}
