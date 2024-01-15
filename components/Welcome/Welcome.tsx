import { Title, Text, Anchor, Container } from '@mantine/core';
import classes from './Welcome.module.css';
import { SocialButtons } from '../SocialButtons/SocialButtons';

export function Welcome() {
  return (
    <Container size="md">
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'pink' }}>
          AH Dev
        </Text>
      </Title>
      <Text ta="center" size="xl" maw={580} mx="auto" mt="xl">
        A home for my blog, some personal projects, and a place to learn about me. You can learn
        about how this site was built by checking out{' '}
        <Anchor href="" size="xl">
          this page{' '}
        </Anchor>
        or you can find me on the following platforms:
      </Text>
      <SocialButtons />
    </Container>
  );
}
