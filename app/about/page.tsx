import { Container, Text, Title } from '@mantine/core';
import classes from './about.module.css';

export default function About() {
  return (
    <Container>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Anthony Humphreys
      </Title>

      <Text className={classes.description} ta="center" mt="md">
        I am a Senior Developer at Lancaster University, working as part of the dynamic IT
        Partnering and Innovation team. Within this role, I look after the development of the
        University&apos;s mobile app, contribute to several key services, and engage in a diverse
        array of innovation projects. These initiatives span from providing research support to
        delving into cutting-edge technologies like Augmented Reality and Generative AI.
      </Text>

      <Text className={classes.description} ta="center" mt="md">
        My expertise lies in crafting seamless solutions using React, React Native, C#/.NET, and AWS
        technologies. I maintain a perpetual enthusiasm for learning and growth. Currently, I am
        actively pursuing the AWS Application Architect Certification pathway to further deepen my
        cloud computing skills. Additionally, I hold a certification as a Scrum Coach, reflecting my
        commitment and passion for promoting Agile practices.
      </Text>
    </Container>
  );
}
