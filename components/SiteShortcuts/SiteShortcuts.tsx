'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { toast } from 'sonner';
import {
  BriefcaseBusinessIcon,
  CloudIcon,
  FileTextIcon,
  LaptopIcon,
  MailIcon,
  RocketIcon,
  ShieldCheckIcon,
  type LucideIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

const konamiKeys = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

type Action = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  keywords?: string[];
};

const actions: Action[] = [
  {
    label: 'Explore builds',
    description: 'Jump to builds and experiments',
    href: '/#products',
    icon: RocketIcon,
    keywords: ['AI', 'projects', 'work'],
  },
  {
    label: 'See experience',
    description: 'See capabilities and recent work',
    href: '/#experience',
    icon: BriefcaseBusinessIcon,
  },
  {
    label: 'Open source: Anvil Registry',
    description: 'See open-source work',
    href: '/#open-source',
    icon: ShieldCheckIcon,
  },
  {
    label: 'Technical leadership',
    description: 'Read architecture and delivery principles',
    href: '/technical-leadership',
    icon: CloudIcon,
    keywords: ['architecture', 'AWS', 'cloud'],
  },
  {
    label: 'Writing',
    description: 'Read notes and markdown posts',
    href: '/blog',
    icon: FileTextIcon,
    keywords: ['blog', 'posts'],
  },
  {
    label: 'Uses',
    description: 'See the hardware and software behind the work',
    href: '/about/uses',
    icon: LaptopIcon,
    keywords: ['hardware', 'software', 'setup'],
  },
  {
    label: 'Contact',
    description: 'Go to contact options',
    href: '/contact',
    icon: MailIcon,
    keywords: ['socials', 'GitHub', 'Discord'],
  },
];

export function SiteShortcuts() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const sequenceRef = useRef<string[]>([]);

  const commandItems = useMemo(() => actions, []);

  useEffect(() => {
    const openPalette = () => setOpen(true);
    window.addEventListener('portfolio:open-command-palette', openPalette);

    return () => window.removeEventListener('portfolio:open-command-palette', openPalette);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
        return;
      }

      if (isTyping || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      sequenceRef.current = [...sequenceRef.current, key].slice(-konamiKeys.length);

      if (sequenceRef.current.join('|') === konamiKeys.join('|')) {
        sequenceRef.current = [];
        const showing = document.documentElement.classList.toggle('show-working');

        if (showing) {
          toast.success('Showing the working.', {
            description: 'Every box, outlined. Enter the code again to tidy up.',
          });
        } else {
          toast.success('Working tidied away.');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const runAction = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen} description="Search portfolio actions">
      <CommandInput placeholder="Search actions…" aria-label="Search portfolio actions" />
      <CommandList>
        <CommandEmpty>No match. Try ‘writing’, ‘AI’ or ‘contact’.</CommandEmpty>
        <CommandGroup heading="Portfolio">
          {commandItems.map(({ label, description, href, icon: Icon, keywords }) => (
            <CommandItem
              key={href}
              value={`${label} ${description}`}
              keywords={keywords}
              onSelect={() => runAction(href)}
            >
              <Icon aria-hidden="true" />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span>{label}</span>
                <span className="text-xs text-muted-foreground">{description}</span>
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
