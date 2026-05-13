import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ExternalLinkIcon,
  Gamepad2Icon,
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
    href: 'https://www.lexio.app/',
    status: 'Live',
  },
  {
    icon: Gamepad2Icon,
    title: 'GMprentice',
    description:
      'Practice tabletop GMing with AI adventurers, character tools, dice, initiative, and session flow.',
    href: 'https://www.gmprentice.app/',
    status: 'Beta',
  },
  {
    icon: SparklesIcon,
    title: 'JobMatch AI',
    description:
      'An AI-powered job board that parses a CV, searches for matching roles, and learns from feedback.',
    href: 'https://personal-job-board-ivory.vercel.app/',
    status: 'Live',
  },
  {
    icon: WorkflowIcon,
    title: 'Spark',
    description:
      'AI-assisted architecture planning for mapping dependencies and validating technical decisions.',
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
      <div className="max-w-3xl">
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Products And Experiments
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Current Lexio products and experiments: small, focused software that tests product ideas,
          AI workflows, and developer-facing tools in the real world.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map(({ icon: Icon, title, description, href, status }) => (
          <a href={href} key={title} className="block">
            <Card className="h-full transition-transform hover:-translate-y-1">
              <CardHeader>
                <Icon aria-hidden="true" className="text-primary" />
                <CardAction>
                  <ExternalLinkIcon aria-hidden="true" className="text-muted-foreground" />
                </CardAction>
                <Badge variant="secondary" className="w-fit">
                  {status}
                </Badge>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Product thinking, technical judgement, and delivery pressure in one small box.
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </main>
  );
}
