import { Card, Container, SimpleGrid, Text, Title, rem, useMantineTheme } from '@mantine/core';
import {
  IconDeviceGamepad2,
  IconRocket,
  IconSparkles,
  IconTopologyStar3,
} from '@tabler/icons-react';
import classes from './ProjectList.module.css';

interface ProjectProps {
  icon: React.FC<any>;
  title: string;
  description: string;
  href: string;
  status: string;
}

export const projectList = [
  {
    icon: IconRocket,
    title: 'Lexio',
    description:
      'Subscription apps and bespoke builds for developers, creators, prototypes, and integrations.',
    href: 'https://www.lexio.app/',
    status: 'Live',
  },
  {
    icon: IconDeviceGamepad2,
    title: 'GMprentice',
    description:
      'Practice tabletop GMing with AI adventurers, character tools, dice, initiative, and session flow.',
    href: 'https://www.gmprentice.app/',
    status: 'Beta',
  },
  {
    icon: IconSparkles,
    title: 'JobMatch AI',
    description:
      'An AI-powered job board that parses a CV, searches for matching roles, and learns from feedback.',
    href: 'https://personal-job-board-ivory.vercel.app/',
    status: 'Live',
  },
  {
    icon: IconTopologyStar3,
    title: 'Spark',
    description:
      'AI-assisted architecture planning for mapping dependencies and validating technical decisions.',
    href: 'https://www.lexio.app/',
    status: 'Coming soon',
  },
];

export function Project({ icon: Icon, title, description, href, status }: ProjectProps) {
  const theme = useMantineTheme();
  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      component="a"
      href={href}
    >
      <Icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="xs" fw={800} c="teal" mt="md" tt="uppercase">
        {status}
      </Text>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
}

export function ProjectGrid() {
  const features = projectList.map((feature, index) => <Project {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Products and experiments
      </Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Current Lexio products and experiments: small, focused software that tests product ideas,
          AI workflows, and developer-facing tools in the real world.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
