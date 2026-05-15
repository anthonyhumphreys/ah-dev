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
      <div className="max-w-3xl">
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Builds And Experiments
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Current Lexio builds and experiments: small, focused software that tests AI workflows,
          developer-facing tools, and useful ideas in the real world.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map(({ icon: Icon, title, description, href, status, note }) => (
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
              <CardContent className="text-sm leading-6 text-muted-foreground">{note}</CardContent>
            </Card>
          </a>
        ))}
      </div>
    </main>
  );
}
