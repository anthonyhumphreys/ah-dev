'use client';

import FeatureCard, { Feature } from '../_components/FeatureCard';
import { IconChecklist, IconLayoutKanban, IconUsersGroup } from '@tabler/icons-react';
import { Container, Group, Badge, Title, SimpleGrid, Text } from '@mantine/core';
import classes from './page.module.css';

const listOfFeatures: Feature[] = [
  {
    title: 'User Personas',
    description:
      'Generate user personas for your product based on your target audience and their needs',
    icon: IconUsersGroup,
    slug: 'user-personas',
  },
  {
    title: 'User Stories',
    description:
      'Generate user stories for your product based on your requirements and user personas',
    icon: IconLayoutKanban,
    slug: 'user-stories',
  },
  {
    title: 'Acceptance Criteria',
    description:
      'Write testable acceptance criteria for your user stories in gherkin syntax with Given-When-Then',
    icon: IconChecklist,
    slug: 'acceptance-criteria',
  },
];

export default function AIScrumAssistant() {
  console.log('browser?', typeof window === 'undefined');
  console.log('API Key', process.env.OPEN_AI_API_KEY);
  return (
    <Container size="md" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Powered by OpenAI&apos;s GPT-3.5-Turbo
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        AI Scrum Assistant
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Save time and effort by automating the creation of user personas, user stories, and
        acceptance criteria. Using AI, generate new ideas, or clarify existing ones. This might even
        help find edge cases or potential use cases you hadn&apos;t even considered.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {listOfFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
