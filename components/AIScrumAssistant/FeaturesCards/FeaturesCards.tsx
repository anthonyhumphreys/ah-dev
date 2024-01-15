'use client';

import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconChecklist, IconLayoutKanban, IconUsersGroup } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const listOfFeatures = [
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

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = listOfFeatures.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      component="a"
      href={`ai-scrum-assistant/${feature.slug}`}
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

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
        {features}
      </SimpleGrid>
    </Container>
  );
}
