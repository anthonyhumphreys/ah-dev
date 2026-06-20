import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ArrowUpRightIcon,
  Code2Icon,
  MessageCircleIcon,
  RadioIcon,
  SendIcon,
  type LucideIcon,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Socials',
  description: 'Social links for Anthony Humphreys: GitHub, Twitter, Discord, and Twitch.',
};

type SocialLink = {
  name: string;
  handle: string;
  href: string;
  description: string;
  note: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    handle: '@anthonyhumphreys',
    href: 'https://github.com/anthonyhumphreys',
    description: 'Repos, open-source work, experiments, and the receipts that the thing exists.',
    note: 'Best for code-shaped collaboration, technical context, and public project threads.',
    icon: Code2Icon,
  },
  {
    name: 'Twitter',
    handle: '@aphumphreys',
    href: 'https://twitter.com/aphumphreys',
    description: 'Short notes, build chatter, and low-ceremony replies.',
    note: 'Useful for quick questions, shared links, and pointing at something interesting.',
    icon: SendIcon,
  },
  {
    name: 'Discord',
    handle: 'Community invite',
    href: 'https://discord.gg/PAaPFVKbaF',
    description: 'More conversational space for project talk and community-shaped work.',
    note: 'Good when the conversation needs a bit more back-and-forth than a public post.',
    icon: MessageCircleIcon,
  },
  {
    name: 'Twitch',
    handle: 'anthonyhumphreys',
    href: 'https://www.twitch.tv/anthonyhumphreys',
    description: 'Occasional live builds, technical wandering, and working in public.',
    note: 'For watching the sausage get made, including the parts polite portfolios edit out.',
    icon: RadioIcon,
  },
];

const collaborationFits = [
  'Applied AI that has to survive contact with users',
  'Research, service, or platform ideas that need turning into software',
  'Open-source security, developer tooling, and agentic coding workflows',
  'Mobile, cloud, and product systems with awkward edges',
];

export default function Contact() {
  return (
    <main
      id="main-content"
      className="min-h-[calc(100vh-4rem)] bg-[radial-gradient(circle_at_12%_0,color-mix(in_oklab,var(--accent),transparent_84%),transparent_30rem),linear-gradient(180deg,color-mix(in_oklab,var(--muted),transparent_10%),transparent_36rem)]"
    >
      <section className="border-b">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl py-10 md:w-[calc(100%-3rem)] md:py-20">
          <div className="min-w-0">
            <Badge variant="secondary" className="mb-5">
              Socials
            </Badge>
            <h1 className="max-w-4xl text-balance text-4xl font-black leading-none tracking-tight sm:text-5xl md:text-7xl">
              Find me where the work is already happening
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8">
              I am not treating this page as an application inbox. If there is a project, prototype,
              research idea, open-source thread, or awkward software problem worth comparing notes
              on, pick the channel that fits and say hello.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="social-links-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-6xl py-8 md:w-[calc(100%-3rem)] md:py-14"
      >
        <div className="max-w-3xl">
          <h2 id="social-links-title" className="text-3xl font-extrabold tracking-tight">
            Social links
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            I reply fastest when there is a concrete question, repo, sketch, or constraint attached.
            Mystery messages are technically legal, which is not the same as kind.
          </p>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.36fr)] lg:items-start">
          <div className="grid gap-3">
            {socialLinks.map(({ name, handle, href, description, note, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 rounded-lg border bg-card p-4 text-left shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-accent/5 hover:shadow-md focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center md:p-5"
              >
                <span className="flex size-12 items-center justify-center rounded-lg border bg-background text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>

                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-xl font-extrabold tracking-tight text-foreground">
                      {name}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">{handle}</span>
                  </span>
                  <span className="mt-2 block text-base leading-7 text-foreground">
                    {description}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">{note}</span>
                </span>

                <span
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'sm' }),
                    'w-fit justify-self-start sm:justify-self-end'
                  )}
                  aria-hidden="true"
                >
                  Open
                  <ArrowUpRightIcon data-icon="inline-end" className="size-3.5" />
                </span>
              </a>
            ))}
          </div>

          <aside className="rounded-lg border bg-card/75 p-5 shadow-sm">
            <h3 className="text-xl font-extrabold tracking-tight">Good reasons to reach out</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {collaborationFits.map((fit) => (
                <li key={fit} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{fit}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
