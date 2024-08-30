'use client';
import FeatureCard, { Feature } from '../_components/FeatureCard';
import {
  IconAlphabetGreek,
  IconBuildingMonument,
  IconChecklist,
  IconLayoutKanban,
  IconQuestionMark,
  IconServer,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Container, Group, Badge, Title, SimpleGrid, Text } from '@mantine/core';
import classes from './page.module.css';

const listOfFeatures: Feature[] = [
  {
    title: 'Code Review',
    description: 'Share a link to a PR and get a detailed code review from an AI Senior Developer.',
    icon: IconChecklist,
    slug: 'code-review',
  },
  {
    title: 'Architecture Review',
    description:
      'Describe the problem you are facing and your proposed solution, and get feedback on your architecture.',
    icon: IconServer,
    slug: 'architecture-review',
  },
  {
    title: 'Socratic Coach',
    description:
      'Turn the tables - The AI Senior Developer will ask you questions to help you solve your problem.',
    icon: IconAlphabetGreek,
    slug: 'socratic-coach',
  },
];

export default function AISeniorDeveloper() {
  return (
    <Container size="md" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Powered by OpenAI&apos;s GPT-4o-mini
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Senior Developer as a Service (SDaaS)
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Senior Developer as a Service (SDaaS) is an on-demand AI-powered Senior Developer. Answer
        questions, review code, and more. Click on a feature below to get started.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {listOfFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
