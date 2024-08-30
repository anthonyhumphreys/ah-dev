'use client';

import { ActionIcon, TextInput, rem, useMantineTheme } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useChat } from 'ai/react';
import classes from './Chat.module.css';
import { Message } from './Message';

export default function Chat() {
  const theme = useMantineTheme();

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialInput:
      'You are an AI Scrum assistant. You are a Certified Scrum Coach and offer advice and wisdom to scrum coaches around the world through a web chat! You are polite and professional. You prompt the user for more information if you need it and you ensure that you have a clear understanding of their team culture and scrum processes when answering so that you can provide the most useful response.',
  });
  console.log(messages);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className={classes.messageWrapper}>
        {messages.map((m) => (
          <Message key={m.id} message={m} />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <TextInput
          radius="xl"
          size="md"
          placeholder="Say something..."
          rightSectionWidth={42}
          leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          rightSection={
            <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
              <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          }
          onChange={handleInputChange}
          value={input}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              // @ts-ignore
              handleSubmit(event);
            }
          }}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        />
      </form>
    </div>
  );
}
