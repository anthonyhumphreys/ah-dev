import { Button, ButtonProps, Group } from '@mantine/core';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useMemo } from 'react';
// import classes from './SocialButtons.module.css';

export const SocialProviderLinks = {
  Twitter: 'https://twitter.com/aphumphreys',
  GitHub: 'https://github.com/anthonyhumphreys',
  Discord: 'https://discord.gg/PAaPFVKbaF',
  Twitch: 'https://www.twitch.tv/anthonyhumphreys',
};

type SocialButtonProps = {
  channel: keyof typeof SocialProviderLinks;
};

export function SocialButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'a'> & SocialButtonProps
) {
  const Icon = useMemo(() => {
    switch (props.channel) {
      case 'Twitter':
        return <IconBrandTwitter style={{ width: '1rem', height: '1rem' }} />;
      case 'GitHub':
        return <IconBrandGithub style={{ width: '1rem', height: '1rem' }} />;
      case 'Discord':
        return <IconBrandDiscord style={{ width: '1rem', height: '1rem' }} />;
      case 'Twitch':
        return <IconBrandTwitch style={{ width: '1rem', height: '1rem' }} />;
      default:
        return <></>;
    }
  }, [props.channel]);
  return (
    <Button
      {...props}
      component="a"
      href={SocialProviderLinks[props.channel]}
      target="_blank"
      //   className={classes.discordButton}
      leftSection={Icon}
    />
  );
}

export function SocialButtons() {
  return (
    <Group justify="center" p="md">
      {Object.keys(SocialProviderLinks).map((channel) => (
        <SocialButton key={channel} channel={channel as keyof typeof SocialProviderLinks}>
          {channel}
        </SocialButton>
      ))}
    </Group>
  );
}
