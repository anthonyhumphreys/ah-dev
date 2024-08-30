'use client';
import { Text, Avatar, Group, Paper } from '@mantine/core';
import { Message } from 'ai/react';
import classes from './Message.module.css';

type Props = {
  message: Message;
};

export function Message({ message }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      className={message.role === 'user' ? classes.userMessage : classes.assistantMessage}
      mb="sm"
      style={{ width: 'fit-content' }}
    >
      <Group>
        {/* <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            alt=""
            radius="xl"
          /> */}
        <div>
          <Text size="sm" fw="bold">
            {message.role === 'user' ? 'User: ' : 'AI Scrum Assistant: '}
          </Text>
          <Text size="xs" c="dimmed">
            {message.createdAt?.toLocaleDateString()}
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        {message.content}
      </Text>
    </Paper>
  );
}
