'use client';

import { Container } from '@mantine/core';
import { useChat } from 'ai/react';
import Chat from '@/components/Chat/Chat';

export default function UserStories() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialInput: '',
  });

  const createdUserStories = messages.map((message, i) => (
    <div key={i}>
      <p>{message}</p>
    </div>
  ));

  return (
    <Container size="md">
      <h1>User Stories</h1>
      {/* @ts-ignore */}
      <Chat handleSubmit={handleSubmit} input={input} handleInputChange={handleInputChange} />
    </Container>
  );
}
