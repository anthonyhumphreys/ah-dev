import { Container, Text, Title } from '@mantine/core';
import classes from './about.module.css';

export default function About() {
  return (
    <Container size="md">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Anthony Humphreys
      </Title>

      <Text className={classes.description} ta="center" mt="md">
        I'm a Senior Developer at Lancaster University, working within the IT Partnering and
        Innovation team. I lead development on the University's mobile app ecosystem, contribute to
        core student-facing services, and support a wide range of innovation projects across the
        institution. My work sits at the intersection of software engineering, research support, and
        forward-looking technologies including AI, augmented reality, and modern cloud platforms.
      </Text>

      <Text className={classes.description} ta="center" mt="md">
        I specialize in building robust, user-centred systems using React, React Native, C#/.NET,
        and cloud-native architectures. Much of my work blends product thinking with hands-on
        engineering, helping modernise services, introduce scalable patterns, and deliver clean,
        maintainable solutions.
      </Text>

      <Text className={classes.description} ta="center" mt="md">
        I'm committed to continual development — I hold an AWS Solutions Architect Professional
        certification pathway. I'm also a certified Scrum Coach, improving delivery practices,
        technical quality, and collaboration across the development lifecycle.
      </Text>
    </Container>
  );
}
