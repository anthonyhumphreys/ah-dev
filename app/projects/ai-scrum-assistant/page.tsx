import { Container, rem } from '@mantine/core';
import { IconMessage } from '@tabler/icons-react';
import { InputWithButton } from '@/components/InputWithButton/InputWithButton';
import { FeaturesCards } from '@/components/AIScrumAssistant/FeaturesCards/FeaturesCards';

export default function AIScrumAssistant() {
  console.log('browser?', typeof window === 'undefined');
  console.log('API Key', process.env.OPEN_AI_API_KEY);
  return (
    <>
      <FeaturesCards />
    </>
  );
}
