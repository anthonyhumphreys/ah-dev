'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';
import { toast } from 'sonner';
import { BriefcaseBusinessIcon, FileTextIcon, MailIcon, RocketIcon } from 'lucide-react';
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

const actions = [
  {
    label: 'Explore Product Work',
    description: 'Jump to products and experiments',
    href: '/#products',
    icon: RocketIcon,
  },
  {
    label: 'Review Experience',
    description: 'See capabilities and delivery range',
    href: '/#experience',
    icon: BriefcaseBusinessIcon,
  },
  {
    label: 'Open Writing',
    description: 'Read notes and markdown posts',
    href: '/blog',
    icon: FileTextIcon,
  },
  {
    label: 'Start A Conversation',
    description: 'Go to contact options',
    href: '/contact',
    icon: MailIcon,
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
        toast.success('Senior mode unlocked', {
          description: 'Useful thing remains real.',
        });
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
        <CommandEmpty>No matching action. Very rude of entropy.</CommandEmpty>
        <CommandGroup heading="Portfolio">
          {commandItems.map(({ label, description, href, icon: Icon }) => (
            <CommandItem
              key={href}
              value={`${label} ${description}`}
              onSelect={() => runAction(href)}
            >
              <Icon aria-hidden="true" />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span>{label}</span>
                <span className="text-xs text-muted-foreground">{description}</span>
              </span>
              <CommandShortcut>Go</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
