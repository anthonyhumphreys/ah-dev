import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Code2Icon, MessageCircleIcon, RadioIcon, SendIcon } from 'lucide-react';

export const SocialProviderLinks = {
  Twitter: 'https://twitter.com/aphumphreys',
  GitHub: 'https://github.com/anthonyhumphreys',
  Discord: 'https://discord.gg/PAaPFVKbaF',
  Twitch: 'https://www.twitch.tv/anthonyhumphreys',
};

const socialIcons = {
  Twitter: SendIcon,
  GitHub: Code2Icon,
  Discord: MessageCircleIcon,
  Twitch: RadioIcon,
};

export function SocialButton({ channel }: { channel: keyof typeof SocialProviderLinks }) {
  const Icon = socialIcons[channel];

  return (
    <a
      className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-auto')}
      href={SocialProviderLinks[channel]}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon data-icon="inline-start" aria-hidden="true" />
      {channel}
    </a>
  );
}

export function SocialButtons() {
  return (
    <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto">
      {Object.keys(SocialProviderLinks).map((channel) => (
        <SocialButton key={channel} channel={channel as keyof typeof SocialProviderLinks} />
      ))}
    </div>
  );
}
