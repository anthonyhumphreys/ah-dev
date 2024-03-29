import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './CardGradient.module.css';

export default function CardGradient({
  id,
  title,
  summary,
}: {
  id: string;
  title: string;
  summary: string;
}) {
  return (
    <Link href={`/blog/posts/${id}`} style={{ textDecoration: 'none', color: 'unset' }}>
      <Paper withBorder radius="md" className={classes.card} mb="lg">
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        >
          <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          {title}
        </Text>
        <Text size="sm" mt="sm" c="dimmed">
          {summary}
        </Text>
      </Paper>
    </Link>
  );
}
