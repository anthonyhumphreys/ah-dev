import {
  Card,
  Container,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconBrain } from '@tabler/icons-react';
import classes from './ProjectList.module.css';

interface ProjectProps {
  icon: React.FC<any>;
  title: string;
  description: string;
  slug: string;
}

export const projectList = [
  {
    icon: IconBrain,
    title: 'AI Scrum Assistant',
    description:
      'A collection of tools to help scrum coaches, all wrapped up in a helpful AI Asssitant.',
    slug: 'ai-scrum-assistant',
  },
];

export function Project({ icon: Icon, title, description, slug }: ProjectProps) {
  const theme = useMantineTheme();
  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      component="a"
      href={`projects/${slug}`}
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

export function ProjectGrid() {
  const features = projectList.map((feature, index) => <Project {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Current Projects
      </Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          I like to work on some projects in my spare time, trying out new technologies and thinking
          about how they can be used to solve problems. Here are some of the projects I&apos;m
          currently working on.
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
