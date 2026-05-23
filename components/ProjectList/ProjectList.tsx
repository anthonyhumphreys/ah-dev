import { Badge } from '@/components/ui/badge';
import {
  ExternalLinkIcon,
  Gamepad2Icon,
  PackageIcon,
  RocketIcon,
  SparklesIcon,
  WorkflowIcon,
} from 'lucide-react';

export const projectList = [
  {
    icon: RocketIcon,
    title: 'Lexio',
    description:
      'Subscription apps and bespoke builds for developers, creators, prototypes, and integrations.',
    note: 'Keeping small builds tied to a real user job, a testable assumption, and practical routes to market.',
    href: 'https://www.lexio.app/',
    status: 'Live',
  },
  {
    icon: Gamepad2Icon,
    title: 'GMprentice',
    description:
      'Practice tabletop GMing with AI adventurers, character tools, dice, initiative, and session flow.',
    note: 'Focused on rehearsal and feedback for live facilitation, not another content generator with initiative tracking.',
    href: 'https://www.gmprentice.app/',
    status: 'Beta',
  },
  {
    icon: SparklesIcon,
    title: 'JobMatch AI',
    description:
      'An AI-powered job board that parses a CV, searches for matching roles, and learns from feedback.',
    note: 'Testing whether matching, explanations, and feedback loops can make job search less hostile to humans.',
    href: 'https://personal-job-board-ivory.vercel.app/',
    status: 'Live',
  },
  {
    icon: PackageIcon,
    title: 'Anvil Registry',
    description:
      'Open-source npm registry gateway and Node devcontainer base image for safer dependency installs.',
    note: 'Built from a spec with Codex goal mode, keeping deterministic policy in charge while optional AI review adds context.',
    href: 'https://anvil-registry.vercel.app/',
    status: 'Open source',
  },
  {
    icon: WorkflowIcon,
    title: 'Spark',
    description:
      'AI-assisted architecture planning for mapping dependencies and validating technical decisions.',
    note: 'Making dependencies, assumptions, and trade-offs visible before the build gets ideas above its station.',
    href: 'https://www.lexio.app/',
    status: 'Coming soon',
  },
];

export function ProjectGrid() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-6xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <div className="max-w-3xl border-b pb-10">
        <Badge variant="secondary" className="mb-5">
          Lexio and experiments
        </Badge>
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Builds and experiments
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Current Lexio builds and experiments: small, focused software that tests AI workflows,
          developer-facing tools, and useful ideas in the real world.
        </p>
      </div>

      <div className="mt-6 flex flex-col">
        {projectList.map(({ icon: Icon, title, description, href, status, note }, index) => (
          <a
            href={href}
            key={title}
            className="group grid gap-5 border-b py-7 text-foreground transition-colors hover:bg-muted/35 md:grid-cols-[3rem_1fr_auto]"
          >
            <span className="font-mono text-sm font-black text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <Icon aria-hidden="true" className="text-primary" />
                <Badge variant="secondary" className="w-fit">
                  {status}
                </Badge>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-none tracking-tight">{title}</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                {description}
              </p>
              <p className="mt-4 max-w-3xl rounded-lg border bg-accent/10 px-3 py-2 text-sm font-medium leading-6">
                {note}
              </p>
            </div>
            <ExternalLinkIcon
              aria-hidden="true"
              className="text-muted-foreground transition-transform group-hover:translate-x-1"
            />
          </a>
        ))}
      </div>
    </main>
  );
}
