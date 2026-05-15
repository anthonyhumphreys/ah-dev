import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import {
  CloudIcon,
  CompassIcon,
  EyeIcon,
  GaugeIcon,
  GitBranchIcon,
  ShieldCheckIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Leadership',
  description:
    'How Anthony Humphreys thinks about technical leadership, AWS architecture, applied AI, and delivery judgement.',
};

const problemThemes = [
  'Translating vague ideas into practical technical options.',
  'Identifying risky assumptions early, before they become expensive folklore.',
  'Balancing user value, delivery speed, maintainability, security, and cost.',
  'Deciding what not to build yet.',
  'Connecting architecture choices to the service people actually have to run.',
];

const architectureTopics = [
  'Serverless and cloud-native systems',
  'Event-driven architecture',
  'Identity, permissions, and data flow',
  'Deployment, observability, and release confidence',
  'Reliability, failure modes, cost control, and operational support',
];

const principles = [
  {
    icon: CompassIcon,
    title: 'Start with the service shape, not the diagram.',
    copy: 'Architecture should make the service easier to build, run, secure, and evolve.',
  },
  {
    icon: GitBranchIcon,
    title: 'Optimise for the team that owns it.',
    copy: 'The best architecture is not always the most elegant one; it is the one that fits the people, constraints, budget, risk, and expected rate of change.',
  },
  {
    icon: GaugeIcon,
    title: 'Make failure boring.',
    copy: 'Good systems have failure modes that are understood, logged, recoverable, and unsurprising.',
  },
  {
    icon: CloudIcon,
    title: 'Cost is a design constraint.',
    copy: 'Especially with cloud and AI systems, usage and scaling costs should be visible and intentional.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security should be structural.',
    copy: 'Security works best when it is built into identity, permissions, data flow, deployment, and operational practice from the start.',
  },
];

export default function TechnicalLeadershipPage() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-6xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <div className="max-w-4xl border-b pb-10">
        <Badge variant="secondary" className="mb-5">
          Architecture, delivery, judgement
        </Badge>
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Technical Leadership
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">
          I work best where unclear goals need turning into useful systems, sensible architecture,
          and delivery plans that a real team can live with after the launch confetti has been
          vacuumed up.
        </p>
      </div>

      <section className="grid gap-8 border-b py-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <EyeIcon aria-hidden="true" className="text-primary" />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
            How I think about problems
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-lg leading-8 text-muted-foreground">
          <p>
            I start by separating the goal from the assumed solution. Sometimes the first proposed
            build is right. Sometimes it is just the meeting&apos;s favourite hat.
          </p>
          <p>
            Before choosing the architecture, I want to understand the user need, organisational
            constraints, risk profile, delivery timeline, and the team that will maintain the system
            afterwards. That context changes what good looks like.
          </p>
        </div>
      </section>

      <section className="grid gap-8 border-b py-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <CompassIcon aria-hidden="true" className="text-primary" />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight">Making choices clearer</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            The useful work is making choices explicit, risks visible, and delivery less theatrical.
          </p>
        </div>
        <div className="grid gap-3">
          {problemThemes.map((theme) => (
            <div className="border-l-3 border-accent bg-muted/45 p-4 text-sm" key={theme}>
              {theme}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-b py-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <CloudIcon aria-hidden="true" className="text-primary" />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight">Architecture judgement</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AWS Certified Solutions Architect - Professional, used as a way to reason about systems
            rather than a licence to recite service names at innocent bystanders.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Cloud architecture in delivery context</CardTitle>
            <CardDescription>
              The interesting questions are usually about ownership, risk, failure, change, and
              cost. The stack matters because those things matter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {architectureTopics.map((topic) => (
                <Badge variant="outline" key={topic}>
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-14">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight">Architecture principles</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            The principles I keep coming back to when technical choices need to become something
            people can build, run, secure, and improve.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, copy }) => (
            <Card key={title} className="h-full">
              <CardHeader>
                <Icon aria-hidden="true" className="mb-1 text-primary" />
                <CardTitle className="text-xl leading-tight">{title}</CardTitle>
                <CardDescription>{copy}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
