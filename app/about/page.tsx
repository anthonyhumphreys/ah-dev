import { Container, Text, Title } from '@mantine/core';
import classes from './about.module.css';

export default function About() {
  return (
    <Container>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Anthony Humphreys
      </Title>

      <Text className={classes.description} ta="center" mt="md">
        I am a Senior Developer at Lancaster Universty with the{' '}
        <a href="https://lancaster.ac.uk/iss/itpi">IT Partnering and Innovation</a> Team. I work on
        the University&apos;s mobile app, a number of other key services, and a whole host of
        innovation projects ranging from research support to Augmented Reality and Generative AI.
      </Text>

      <Text className={classes.description} ta="center" mt="md">
        My key skills are in React, React Native, C#/.net and AWS but I am always looking to learn
        new things. I am currently working through the AWS Application Architect Certification
        pathway. I am also a certified Scrum Coach, with a passion for Agile practices.
      </Text>
    </Container>
  );
}
