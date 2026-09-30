import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  anvilFeatures,
  anvilRegistry,
  builds,
  isExternal,
  universityWork,
  type PortfolioItem,
} from '@/lib/portfolio';
import { cn } from '@/lib/utils';
import {
  ArrowRightIcon,
  BrainIcon,
  CompassIcon,
  ExternalLinkIcon,
  GaugeIcon,
  ShieldCheckIcon,
} from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { RangeMap } from '../RangeMap/RangeMap';
import { SocialButtons } from '../SocialButtons/SocialButtons';

type PostPreview = {
  title: string;
  id: string;
  summary: string;
};

const practices = [
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
    copy: 'Keeping implementation, observability, release confidence, handover, and day-two ownership connected from the start, without losing the people who run it.',
  },
  {
    icon: BrainIcon,
    title: 'Applied AI systems',
    copy: 'Building AI features around usefulness, trust, evaluation, privacy, and cost instead of letting the demo write cheques the service cannot cash.',
  },
];

const principles = [
  'Start with the shape of the problem before picking the stack.',
  'Design for the people who will actually use and maintain the thing.',
  'Use AI where it expands capability, not where it decorates a demo.',
  'Keep systems understandable enough that future teams can safely change them.',
  'Prefer evidence from users, data, and delivery over theatre. Theatre has excellent lighting and terrible uptime.',
];

const container = 'mx-auto w-[calc(100%-2rem)] max-w-6xl md:w-[calc(100%-3rem)]';

function SectionIntro({
  title,
  copy,
  size = 'md',
}: {
  title: string;
  copy: string;
  size?: 'lg' | 'md' | 'sm';
}) {
  return (
    <div className="max-w-3xl">
      <h2
        className={cn(
          'text-balance font-extrabold tracking-tight text-foreground',
          size === 'lg' && 'text-4xl md:text-6xl',
          size === 'md' && 'text-3xl md:text-5xl',
          size === 'sm' && 'text-3xl md:text-4xl'
        )}
      >
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

function DomainTags({ item }: { item: PortfolioItem }) {
  return (
    <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
      <span className="sr-only">Domains: </span>
      {item.domains.join(' · ')}
    </p>
  );
}

function EvidenceLink({ item, className }: { item: PortfolioItem; className?: string }) {
  if (!item.href) {
    return (
      <span className={cn('text-sm font-bold text-muted-foreground', className)}>
        {item.linkLabel}
      </span>
    );
  }
  const external = isExternal(item.href);
  return (
    <a
      href={item.href}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-bold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/60',
        className
      )}
    >
      <span className="sr-only">{item.title}: </span>
      {item.linkLabel}
      {external ? <ExternalLinkIcon aria-hidden="true" className="size-3.5" /> : null}
    </a>
  );
}

export function Welcome({ posts = [] }: { posts?: PostPreview[] }) {
  return (
    <main
      id="main-content"
      className="overflow-x-hidden bg-[radial-gradient(circle_at_12%_0,color-mix(in_oklab,var(--accent),transparent_82%),transparent_28rem),linear-gradient(180deg,color-mix(in_oklab,var(--muted),transparent_10%),transparent_38rem)]"
    >
      <section className="border-b">
        <div
          className={cn(
            container,
            'grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center'
          )}
        >
          <div className="min-w-0">
            <Badge variant="secondary" className="mb-5">
              Senior developer and founder
            </Badge>
            <h1 className="max-w-3xl text-balance text-4xl font-black leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Building useful software for messy real-world work
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I work from unclear goal to running service: framing the problem, choosing the
              architecture, building the thing, and keeping it understandable for the team that owns
              it next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#platforms" className={buttonVariants({ size: 'lg' })}>
                See the university platforms
                <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
              </Link>
              <Link href="#products" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                Browse builds and experiments
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-xl border bg-card/80 p-4 shadow-xl shadow-foreground/5 sm:p-5">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-mono text-xs font-black uppercase tracking-widest text-accent">
                Range map
              </h2>
              <p className="text-xs text-muted-foreground">Pick a domain, or jump to the work</p>
            </div>
            <RangeMap />
          </div>
        </div>
      </section>

      <section className={cn(container, 'scroll-mt-16 py-20')} id="platforms">
        <SectionIntro
          size="lg"
          title="University platforms and research translation"
          copy="A lot of the interesting work happens between disciplines: careers, mobile services, sustainability, physics, public science, research visibility, and AI that has to be useful after the demo."
        />
        <div className="mt-10 grid border-t border-l md:grid-cols-2 lg:grid-cols-3">
          {universityWork.map((item) => (
            <article
              className="flex scroll-mt-20 flex-col border-r border-b p-6 transition-colors target:bg-primary/8"
              id={`work-${item.slug}`}
              key={item.slug}
            >
              <div className="flex items-center justify-between gap-4">
                <item.icon aria-hidden="true" className="text-primary" />
                <DomainTags item={item} />
              </div>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-wide text-primary">
                {item.type}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              <EvidenceNote>{item.note}</EvidenceNote>
              <EvidenceLink item={item} className="mt-auto pt-5" />
            </article>
          ))}
        </div>
      </section>

      <section className={cn(container, 'scroll-mt-16 border-t py-20')} id="products">
        <SectionIntro
          title="Builds and experiments"
          copy="Lexio is where I ship focused software: small apps, AI workflows, developer tools, and prototypes that prove or disprove an idea in the open."
        />
        <div className="mt-10 flex flex-col border-t">
          {builds.map((item) => (
            <article
              className="grid scroll-mt-20 gap-4 border-b py-8 transition-colors target:bg-primary/8 md:grid-cols-[14rem_1fr] md:gap-10"
              id={`work-${item.slug}`}
              key={item.slug}
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
                  {item.type}
                </p>
                <h3 className="text-3xl font-extrabold leading-none">{item.title}</h3>
                <DomainTags item={item} />
                <EvidenceLink item={item} className="mt-2" />
              </div>
              <div className="min-w-0">
                <p className="max-w-3xl text-base leading-7 text-muted-foreground">{item.copy}</p>
                <EvidenceNote>{item.note}</EvidenceNote>
              </div>
            </article>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-1.5 rounded-sm text-sm font-bold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/60"
        >
          All builds, including what&apos;s next
          <ArrowRightIcon aria-hidden="true" className="size-3.5" />
        </Link>
      </section>

      <section className="scroll-mt-16 border-y bg-muted/35" id="open-source">
        <div
          className={cn(
            container,
            'grid scroll-mt-20 gap-10 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-start'
          )}
          id={`work-${anvilRegistry.slug}`}
        >
          <div>
            <Badge variant="secondary" className="mb-5">
              Open source
            </Badge>
            <SectionIntro title={anvilRegistry.title} copy={anvilRegistry.copy} />
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              Anvil sits between package managers and upstream registries, applies deterministic
              policy, queues analysis, and gives reviewers enough evidence to understand why a
              dependency was allowed, blocked, quarantined, or overridden.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={anvilRegistry.href}
                rel="noopener noreferrer"
                className={buttonVariants({ size: 'lg' })}
              >
                Read the docs
                <ExternalLinkIcon data-icon="inline-end" aria-hidden="true" />
              </a>
              <a
                href={anvilRegistry.repoHref}
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                View repository
                <ExternalLinkIcon data-icon="inline-end" aria-hidden="true" />
              </a>
            </div>
          </div>

          <ul className="flex flex-col gap-6 border-l-2 border-primary/40 pl-6">
            {anvilFeatures.map(({ icon: Icon, title, copy }) => (
              <li key={title}>
                <h3 className="flex items-center gap-3 text-lg font-bold leading-tight">
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={cn(container, 'scroll-mt-16 py-20')} id="experience">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro
              size="sm"
              title="How I work"
              copy="I like the bit where vague goals have to become usable systems, sensible architecture, and delivery plans that a real team can survive without forming a support group."
            />
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              Strong technical work is rarely just code. It is judgement, collaboration, trade-offs,
              communication, and enough taste to know when an abstraction has wandered into
              self-importance.
            </p>
            <p className="mt-6 max-w-3xl border-l-2 border-accent pl-4 text-sm leading-7 text-muted-foreground">
              AWS Certified Solutions Architect - Professional gives me a structured way to reason
              about reliability, security, cost, scalability, migration, and operational support.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {principles.map((item) => (
                <li className="flex gap-3 text-sm leading-6" key={item}>
                  <span aria-hidden="true" className="mt-2.5 h-0.5 w-3 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid content-start border-t border-l sm:grid-cols-2" id="technical-work">
            {practices.map(({ icon: Icon, title, copy }) => (
              <div className="border-r border-b p-6" key={title}>
                <dt className="flex items-center gap-3 text-lg font-bold leading-tight">
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  {title}
                </dt>
                <dd className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={cn(container, 'scroll-mt-16 border-t py-20')} id="writing">
        <SectionIntro
          size="sm"
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
