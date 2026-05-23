import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRightIcon,
  BrainIcon,
  BriefcaseBusinessIcon,
  CloudIcon,
  CompassIcon,
  ExternalLinkIcon,
  Gamepad2Icon,
  GaugeIcon,
  MapIcon,
  PackageIcon,
  RocketIcon,
  SatelliteIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SparklesIcon,
  UsersIcon,
} from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { SocialButtons } from '../SocialButtons/SocialButtons';

type PostPreview = {
  title: string;
  id: string;
  summary: string;
};

const strengths = [
  'Useful software',
  'AI systems',
  'Mobile platforms',
  'Research tools',
  'Service design',
  'AWS delivery',
];

const highlights = [
  {
    icon: SmartphoneIcon,
    title: 'Student-facing mobile platforms',
    copy: 'Modernising iLancaster with React Native, Expo, faster check-in flows, safety features, digital passes, and data-informed iteration.',
  },
  {
    icon: BrainIcon,
    title: 'Applied AI that has to behave',
    copy: 'Building tools like LUCA that support real student workflows: CV review, interview practice, job description analysis, and progress tracking.',
  },
  {
    icon: BriefcaseBusinessIcon,
    title: 'Research and innovation delivery',
    copy: 'Turning academic and partner ideas into usable software: maps, public platforms, data tools, admin systems, and prototypes.',
  },
  {
    icon: CloudIcon,
    title: 'Architecture that can be owned',
    copy: 'Taking ideas from discovery and workshops through implementation, deployment, feedback, and maintenance without losing the people who run it.',
  },
];

const deliveryCards = [
  {
    icon: CompassIcon,
    title: 'Problem framing',
    copy: 'Turning uncertain ideas into practical options, including what to test first and what to leave alone for now.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'AWS architecture',
    copy: 'Designing secure, cost-aware, maintainable cloud systems with reliability, migration, permissions, and operational support in view.',
  },
  {
    icon: GaugeIcon,
    title: 'Delivery judgement',
    copy: 'Keeping implementation, observability, release confidence, handover, and day-two ownership connected from the start.',
  },
  {
    icon: BrainIcon,
    title: 'Applied AI systems',
    copy: 'Building AI features around usefulness, trust, evaluation, privacy, and cost instead of letting the demo write cheques the service cannot cash.',
  },
];

const products = [
  {
    icon: RocketIcon,
    title: 'Lexio',
    type: 'Software studio',
    href: 'https://www.lexio.app/',
    copy: 'A home for subscription apps and bespoke builds for developers, creators, internal tools, prototypes, and integrations.',
    note: 'Keeping small builds tied to a real user job, a testable assumption, and enough restraint that the experiment can actually ship.',
  },
  {
    icon: Gamepad2Icon,
    title: 'GMprentice',
    type: 'AI tool',
    href: 'https://www.gmprentice.app/',
    copy: 'A sandbox for tabletop GMs to practise with AI adventurers: party generation, character voice, dice, initiative, secrets, and session flow.',
    note: 'Focused on rehearsal and feedback for live facilitation, not another content generator wearing a wizard hat.',
  },
  {
    icon: SparklesIcon,
    title: 'JobMatch AI',
    type: 'Personal workflow tool',
    href: 'https://personal-job-board-ivory.vercel.app/',
    copy: 'An AI-powered job board that parses a CV, learns preferences, searches for relevant roles, and improves from user feedback.',
    note: 'Testing whether matching, explanations, and feedback loops can make job search less like feeding a CV into a paper shredder.',
  },
];

const openSourceWork = [
  {
    icon: ShieldCheckIcon,
    title: 'Policy before package installs',
    copy: 'A TypeScript npm registry gateway that evaluates package metadata, tarballs, provenance, low-adoption signals, lifecycle scripts, and overrides before install traffic reaches developers or CI.',
  },
  {
    icon: PackageIcon,
    title: 'Node Base safety harness',
    copy: 'A companion Node devcontainer image for unknown repositories, with ignore-scripts safe mode, observed install mode, lifecycle reports, and explicit handling for install-time behaviour.',
  },
  {
    icon: BrainIcon,
    title: 'AI kept in its lane',
    copy: 'Optional LLM review adds structured risk context, but deterministic policy stays the enforcement authority. Decorative security can stay outside where it belongs.',
  },
];

const universityWork = [
  {
    icon: BrainIcon,
    title: 'LUCA',
    type: 'Careers AI assistant',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_innovationhub-lancasteruniversity-stemeducation-activity-7439319152944676864-chvI',
    copy: 'A Lancaster University careers pilot for independent employability practice: CV and cover letter review, interview modes, feedback reports, and LinkedIn recommendations.',
    note: 'Applying AI in a university service context, balancing usefulness, trust, safety, evaluation, privacy, and operational cost.',
  },
  {
    icon: SmartphoneIcon,
    title: 'iLancaster',
    type: 'Mobile platform',
    href: 'https://www.linkedin.com/pulse/ilancaster-evolving-together-through-co-production-zzsle',
    copy: 'A daily companion for campus life, evolved through co-production and data: Expo migration, performance work, check-in improvements, digital passes, safety tooling, and support visibility.',
    note: 'Maintaining and evolving a high-visibility student platform where reliability, accessibility, release confidence, and institutional service ownership matter as much as feature delivery.',
  },
  {
    icon: MapIcon,
    title: 'IceHunter front-end',
    type: 'Research interface',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_lancasteruniversity-innovation-icehunter-activity-7452265127137107968-YQ5Q',
    copy: 'A map interface for iceberg detection research, turning satellite radar and AI outputs into accessible location data for potential maritime use.',
    note: 'Translating specialist research outputs into a usable interface where uncertainty, map interaction, and public-facing interpretation need careful handling.',
  },
  {
    icon: PackageIcon,
    title: 'Sustainable packaging tool',
    type: 'Research tool',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_lancaster-team-developing-programme-to-help-activity-7396521023522852864-hgzr',
    copy: 'A web tool helping eCommerce businesses make data-driven packaging decisions that balance cost, compliance, and environmental impact.',
    note: 'Turning research and compliance complexity into decision support that helps businesses compare trade-offs instead of drowning in inputs.',
  },
  {
    icon: SatelliteIcon,
    title: 'AuroraWatch UK refresh',
    type: 'Public science platform',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_aurorawatchuk-aurora-scienceforeveryone-activity-7426595855639482368-S0qd',
    copy: 'A modernisation project for a public-facing aurora platform built around real-time and historical data, alerts, and wider access to science.',
    note: 'Modernising a public science service around access, data clarity, reliability, and a wider audience than the people already fluent in the domain.',
  },
  {
    icon: UsersIcon,
    title: 'Prob_AI research hub',
    type: 'Research web platform',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_innovationhub-probai-partnerships-activity-7332661773864488964-16S8',
    copy: 'A public site for an EPSRC-funded AI research hub, built with Next.js, Mantine UI, AWS, university content integrations, and a lightweight admin workflow.',
    note: 'Making collaboration, content ownership, AWS hosting, and long-term maintenance practical for a distributed programme.',
  },
];

const principles = [
  'Start with the shape of the problem before picking the stack.',
  'Design for the people who will actually use and maintain the thing.',
  'Use AI where it expands capability, not where it decorates a demo.',
  'Keep systems understandable enough that future teams can safely change them.',
  'Prefer evidence from users, data, and delivery over theatre. Theatre has excellent lighting and terrible uptime.',
];

function SectionIntro({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{copy}</p>
    </div>
  );
}

function EvidenceNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-3xl rounded-lg border bg-accent/10 px-3 py-2 text-sm font-medium leading-6 text-foreground">
      {children}
    </p>
  );
}

export function Welcome({ posts = [] }: { posts?: PostPreview[] }) {
  return (
    <main
      id="main-content"
      className="overflow-x-hidden bg-[radial-gradient(circle_at_12%_0,color-mix(in_oklab,var(--accent),transparent_82%),transparent_28rem),linear-gradient(180deg,color-mix(in_oklab,var(--muted),transparent_10%),transparent_38rem)]"
    >
      <section className="border-b">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-6xl gap-12 py-16 md:w-[calc(100%-3rem)] md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] md:items-center md:py-24">
          <div className="min-w-0">
            <Badge variant="secondary" className="mb-5">
              Senior developer and founder
            </Badge>
            <h1 className="max-w-3xl text-balance text-4xl font-black leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Building useful software for messy real-world work
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-2xl">
              I work from unclear goal to running service: framing the problem, choosing the
              architecture, building the thing, and keeping it understandable for the team that owns
              it next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#products" className={buttonVariants({ size: 'lg' })}>
                Explore the work
                <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
              </Link>
              <Link
                href="#platforms"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                See university platforms
              </Link>
            </div>
          </div>

          <Card className="-rotate-1 overflow-hidden bg-card/92 shadow-2xl shadow-foreground/10 transition-transform duration-200 hover:rotate-0 hover:-translate-y-1">
            <CardHeader className="grid grid-cols-[1fr_auto] gap-4 bg-[linear-gradient(color-mix(in_oklab,var(--primary),transparent_92%)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklab,var(--primary),transparent_92%)_1px,transparent_1px)] [background-size:1.75rem_1.75rem]">
              <CardTitle className="text-sm">Anthony Humphreys</CardTitle>
              <CardDescription className="font-semibold">Senior developer</CardDescription>
            </CardHeader>
            <CardContent className="bg-[linear-gradient(color-mix(in_oklab,var(--primary),transparent_92%)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklab,var(--primary),transparent_92%)_1px,transparent_1px)] [background-size:1.75rem_1.75rem]">
              <pre className="overflow-x-auto rounded-lg bg-[#071416] p-5 text-[0.72rem] leading-6 text-[#dceceb] shadow-xl md:text-sm">
                <code>
                  <span className="text-accent">interface</span>{' '}
                  <span className="text-primary">Founder</span>{' '}
                  <span className="text-accent">extends</span>{' '}
                  <span className="text-primary">SeniorDev</span> {'{'}
                  {'\n'}
                  {'  '}range:{' '}
                  <span className="text-accent">&apos;idea to shipped system&apos;</span>;{'\n'}
                  {'  '}edge: <span className="text-accent">&apos;judgement + delivery&apos;</span>;
                  {'\n'}
                  {'}'}
                  {'\n\n'}
                  <span className="text-accent">const</span> anthony:{' '}
                  <span className="text-primary">Founder</span> = {'{'}
                  {'\n'}
                  {'  '}builds: [&apos;AI&apos;, &apos;mobile&apos;, &apos;cloud&apos;],
                  {'\n'}
                  {'  '}leads: &apos;discovery to delivery&apos;,
                  {'\n'}
                  {'  '}brings: &apos;clarity to vague work&apos;,
                  {'\n'}
                  {'  '}bias: &apos;make the useful thing real&apos;
                  {'\n'}
                  {'};'}
                </code>
              </pre>
              <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <strong>Range</strong>
                  <p className="mt-1 font-semibold text-muted-foreground">AI, mobile, web, cloud</p>
                </div>
                <div>
                  <strong>Mode</strong>
                  <p className="mt-1 font-semibold text-muted-foreground">
                    Unclear brief to running service
                  </p>
                </div>
              </div>
              <div className="mt-6 ml-auto h-1.5 w-24 bg-accent" aria-hidden="true" />
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-6xl flex-wrap gap-2 pb-8 md:w-[calc(100%-3rem)]">
          {strengths.map((item) => (
            <Badge variant="outline" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-[calc(100%-2rem)] max-w-6xl py-20 md:w-[calc(100%-3rem)]"
        id="experience"
      >
        <SectionIntro
          title="Capabilities with receipts"
          copy="The work spans student services, AI assistants, public research sites, internal tools, subscription apps, and the unglamorous engineering that keeps them usable after launch."
        />
        <div className="mt-10 grid border md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, copy }, index) => (
            <article
              className="min-h-64 border-b p-6 transition-colors hover:bg-muted/45 md:border-r md:border-b-0"
              key={title}
            >
              <div className="flex items-center justify-between gap-4">
                <Icon aria-hidden="true" className="text-primary" />
                <span className="font-mono text-xs font-black text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-7 text-lg font-bold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-[calc(100%-2rem)] max-w-6xl border-t py-20 md:w-[calc(100%-3rem)]"
        id="technical-work"
      >
        <SectionIntro
          title="Architecture and delivery"
          copy="I like the bit where vague goals have to become usable systems, sensible architecture, and delivery plans that a real team can survive without forming a support group."
        />
        <div className="mt-8 max-w-3xl rounded-lg border bg-muted/45 p-5 text-sm leading-7 text-muted-foreground">
          AWS Certified Solutions Architect - Professional gives me a structured way to reason about
          reliability, security, cost, scalability, migration, and operational support.
        </div>
        <div className="mt-10 grid border md:grid-cols-4">
          {deliveryCards.map(({ icon: Icon, title, copy }, index) => (
            <article
              className="min-h-64 border-b p-6 transition-colors hover:bg-muted/45 md:border-r md:border-b-0"
              key={title}
            >
              <div className="flex items-center justify-between gap-4">
                <Icon aria-hidden="true" className="text-primary" />
                <span className="font-mono text-xs font-black text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-7 text-lg font-bold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-[calc(100%-2rem)] max-w-6xl border-t py-20 md:w-[calc(100%-3rem)]"
        id="products"
      >
        <SectionIntro
          title="Builds and experiments"
          copy="Lexio is where I ship focused software: small apps, AI workflows, developer tools, and prototypes that prove or disprove an idea in the open."
        />
        <div className="mt-10 flex flex-col">
          {products.map((product, index) => (
            <a
              className="group grid grid-cols-[2rem_1fr_1.5rem] gap-4 border-b py-6 text-foreground transition-transform hover:translate-x-1 md:grid-cols-[3.5rem_2.5rem_1fr_2rem] md:gap-6"
              href={product.href}
              key={product.title}
            >
              <span className="text-sm font-black text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <product.icon aria-hidden="true" className="hidden text-primary md:block" />
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
                  {product.type}
                </p>
                <h3 className="mt-1 text-3xl font-extrabold leading-none">{product.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
                  {product.copy}
                </p>
                <EvidenceNote>{product.note}</EvidenceNote>
              </div>
              <ExternalLinkIcon aria-hidden="true" className="text-muted-foreground" />
            </a>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-[calc(100%-2rem)] max-w-6xl py-20 md:w-[calc(100%-3rem)]"
        id="platforms"
      >
        <SectionIntro
          title="University platforms and research translation"
          copy="A lot of the interesting work happens between disciplines: careers, mobile services, sustainability, physics, public science, research visibility, and AI that has to be useful after the demo."
        />
        <div className="mt-10 grid border md:grid-cols-3">
          {universityWork.map(({ icon: Icon, title, type, href, copy, note }) => (
            <a
              className="group min-h-72 border-b p-6 text-foreground transition-colors hover:bg-muted/45 md:border-r"
              href={href}
              key={title}
            >
              <div className="flex items-center justify-between gap-4">
                <Icon aria-hidden="true" className="text-primary" />
                <ExternalLinkIcon aria-hidden="true" className="text-muted-foreground" />
              </div>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-wide text-primary">
                {type}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
              <EvidenceNote>{note}</EvidenceNote>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/35" id="open-source">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-6xl gap-10 py-20 md:w-[calc(100%-3rem)] lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <Badge variant="secondary" className="mb-5">
              Open source
            </Badge>
            <SectionIntro
              title="Anvil Registry"
              copy="An open-source npm registry gateway and Node devcontainer base image for safer dependency installs, built from a spec with Codex doing the long-haul implementation work."
            />
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              Anvil sits between package managers and upstream registries, applies deterministic
              policy, queues analysis, and gives reviewers enough evidence to understand why a
              dependency was allowed, blocked, quarantined, or overridden.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://anvil-registry.vercel.app/"
                className={buttonVariants({ size: 'lg' })}
              >
                Read the docs
                <ExternalLinkIcon data-icon="inline-end" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/anthonyhumphreys/anvil-registry/"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                View repository
                <ExternalLinkIcon data-icon="inline-end" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid border bg-background md:grid-cols-3 lg:grid-cols-1">
            {openSourceWork.map(({ icon: Icon, title, copy }, index) => (
              <article
                className="min-h-52 border-b p-6 transition-colors hover:bg-muted/45 md:border-r md:border-b-0 lg:border-r-0 lg:border-b"
                key={title}
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon aria-hidden="true" className="text-primary" />
                  <span className="font-mono text-xs font-black text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-2rem)] max-w-6xl py-16 md:w-[calc(100%-3rem)]">
        <Card className="grid gap-8 bg-card text-card-foreground md:grid-cols-[0.8fr_1fr]">
          <CardHeader>
            <RocketIcon aria-hidden="true" className="text-primary" />
            <CardTitle className="text-4xl font-extrabold tracking-tight">
              How I tend to work
            </CardTitle>
            <CardDescription>
              Strong technical work is rarely just code. It is judgement, collaboration, trade-offs,
              communication, and enough taste to know when an abstraction has wandered into
              self-importance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              {principles.map((item, index) => (
                <li
                  className="grid grid-cols-[2rem_1fr] gap-3 rounded-lg border bg-muted/45 p-3 text-sm"
                  key={item}
                >
                  <span className="font-mono text-xs font-black text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section
        className="mx-auto w-[calc(100%-2rem)] max-w-6xl border-t py-20 md:w-[calc(100%-3rem)]"
        id="writing"
      >
        <SectionIntro
          title="Notes from the workbench"
          copy="Short-form thinking on software, engineering judgement, AI, delivery, and whatever technical decision currently deserves a raised eyebrow."
        />
        {posts.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link href={`/blog/posts/${post.id}`} key={post.id}>
                <Card className="h-full transition-transform hover:-translate-y-1 hover:bg-muted/35">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.summary}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="mt-8 max-w-xl">
            <CardContent>Writing is warming up. Markdown goes here.</CardContent>
          </Card>
        )}
      </section>

      <section className="mx-auto w-[calc(100%-2rem)] max-w-4xl py-16 text-center md:w-[calc(100%-3rem)]">
        <Separator className="mb-12" />
        <h2 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
          More work, writing, and traces of what I&apos;m building
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          This site is a working notebook for software, platforms, ideas, and the occasional
          technical opinion with its sleeves rolled up.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/blog" className={buttonVariants()}>
            Read the writing
            <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
          </Link>
          <SocialButtons />
        </div>
      </section>
    </main>
  );
}
