'use client';

import { ActionIcon, TextInput, rem, useMantineTheme } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { ChatRequestOptions } from 'ai';
import { FormEvent } from 'react';

type Props = {
  handleSubmit: () => void;
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Chat({ handleSubmit, input, handleInputChange }: Props) {
  const theme = useMantineTheme();

  return (
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
    />
  );
}
