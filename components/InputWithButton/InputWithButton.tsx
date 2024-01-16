'use client';

import { ActionIcon, TextInput, TextInputProps, rem, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="md"
      rightSectionWidth={42}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}
