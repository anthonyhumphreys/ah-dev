'use client';
import { Card, rem, useMantineTheme, Text } from '@mantine/core';
import classes from './FeatureCard.module.css';

export type Feature = {
  title: string;
  description: string;
  icon: React.FC<any>;
  slug: string;
};

export default function FeatureCard({ title, description, icon: Icon, slug }: Feature) {
  const theme = useMantineTheme();

  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      component="a"
      href={`ai-scrum-assistant/${slug}`}
    >
      <Icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
}
