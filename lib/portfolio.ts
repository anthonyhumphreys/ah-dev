import {
  BrainIcon,
  Gamepad2Icon,
  MapIcon,
  PackageIcon,
  RocketIcon,
  SatelliteIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SparklesIcon,
  UsersIcon,
  WorkflowIcon,
  type LucideIcon,
} from 'lucide-react';

export const domains = ['Applied AI', 'Mobile', 'Research', 'Cloud', 'Developer tooling'] as const;

export type Domain = (typeof domains)[number];

export type PortfolioGroup = 'university' | 'build' | 'open-source';

export type PortfolioItem = {
  slug: string;
  title: string;
  shortTitle: string;
  type: string;
  group: PortfolioGroup;
  icon: LucideIcon;
  copy: string;
  note: string;
  domains: Domain[];
  href?: string;
  linkLabel: string;
  status?: string;
};

export function domainSlug(domain: Domain) {
  return domain.toLowerCase().replace(/\s+/g, '-');
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export const universityWork: PortfolioItem[] = [
  {
    slug: 'luca',
    title: 'LUCA',
    shortTitle: 'LUCA',
    type: 'Careers AI assistant',
    group: 'university',
    icon: BrainIcon,
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_innovationhub-lancasteruniversity-stemeducation-activity-7439319152944676864-chvI',
    linkLabel: 'LinkedIn write-up',
    domains: ['Applied AI'],
    copy: 'A Lancaster University careers pilot for independent employability practice: CV and cover letter review, interview modes, feedback reports, and LinkedIn recommendations.',
    note: 'Applying AI in a university service context, balancing usefulness, trust, safety, evaluation, privacy, and operational cost.',
  },
  {
    slug: 'ilancaster',
    title: 'iLancaster',
    shortTitle: 'iLancaster',
    type: 'Mobile platform',
    group: 'university',
    icon: SmartphoneIcon,
    href: 'https://www.linkedin.com/pulse/ilancaster-evolving-together-through-co-production-zzsle',
    linkLabel: 'LinkedIn write-up',
    domains: ['Mobile'],
    copy: 'A daily companion for campus life, evolved through co-production and data: Expo migration, performance work, check-in improvements, digital passes, safety tooling, and support visibility.',
    note: 'Maintaining and evolving a high-visibility student platform where reliability, accessibility, release confidence, and institutional service ownership matter as much as feature delivery.',
  },
  {
    slug: 'icehunter',
    title: 'IceHunter front-end',
    shortTitle: 'IceHunter',
    type: 'Research interface',
    group: 'university',
    icon: MapIcon,
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_lancasteruniversity-innovation-icehunter-activity-7452265127137107968-YQ5Q',
    linkLabel: 'LinkedIn write-up',
    domains: ['Research', 'Applied AI'],
    copy: 'A map interface for iceberg detection research, turning satellite radar and AI outputs into accessible location data for potential maritime use.',
    note: 'Translating specialist research outputs into a usable interface where uncertainty, map interaction, and public-facing interpretation need careful handling.',
  },
  {
    slug: 'sustainable-packaging',
    title: 'Sustainable packaging tool',
    shortTitle: 'Packaging tool',
    type: 'Research tool',
    group: 'university',
    icon: PackageIcon,
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_lancaster-team-developing-programme-to-help-activity-7396521023522852864-hgzr',
    linkLabel: 'LinkedIn write-up',
    domains: ['Research'],
    copy: 'A web tool helping eCommerce businesses make data-driven packaging decisions that balance cost, compliance, and environmental impact.',
    note: 'Turning research and compliance complexity into decision support that helps businesses compare trade-offs instead of drowning in inputs.',
  },
  {
    slug: 'aurorawatch',
    title: 'AuroraWatch UK refresh',
    shortTitle: 'AuroraWatch',
    type: 'Public science platform',
    group: 'university',
    icon: SatelliteIcon,
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_aurorawatchuk-aurora-scienceforeveryone-activity-7426595855639482368-S0qd',
    linkLabel: 'LinkedIn write-up',
    domains: ['Research'],
    copy: 'A modernisation project for a public-facing aurora platform built around real-time and historical data, alerts, and wider access to science.',
    note: 'Modernising a public science service around access, data clarity, reliability, and a wider audience than the people already fluent in the domain.',
  },
  {
    slug: 'prob-ai',
    title: 'Prob_AI research hub',
    shortTitle: 'Prob_AI',
    type: 'Research web platform',
    group: 'university',
    icon: UsersIcon,
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_innovationhub-probai-partnerships-activity-7332661773864488964-16S8',
    linkLabel: 'LinkedIn write-up',
    domains: ['Research', 'Cloud'],
    copy: 'A public site for an EPSRC-funded AI research hub, built with Next.js, Mantine UI, AWS, university content integrations, and a lightweight admin workflow.',
    note: 'Making collaboration, content ownership, AWS hosting, and long-term maintenance practical for a distributed programme.',
  },
];

export const builds: PortfolioItem[] = [
  {
    slug: 'lexio',
    title: 'Lexio',
    shortTitle: 'Lexio',
    type: 'Software studio',
    group: 'build',
    icon: RocketIcon,
    href: 'https://www.lexio.app/',
    linkLabel: 'Live site',
    status: 'Live',
    domains: ['Developer tooling'],
    copy: 'A home for subscription apps and bespoke builds for developers, creators, internal tools, prototypes, and integrations.',
    note: 'Keeping small builds tied to a real user job, a testable assumption, and enough restraint that the experiment can actually ship.',
  },
  {
    slug: 'gmprentice',
    title: 'GMprentice',
    shortTitle: 'GMprentice',
    type: 'AI tool',
    group: 'build',
    icon: Gamepad2Icon,
    href: 'https://www.gmprentice.app/',
    linkLabel: 'Live site',
    status: 'Beta',
    domains: ['Applied AI'],
    copy: 'A sandbox for tabletop GMs to practise with AI adventurers: party generation, character voice, dice, initiative, secrets, and session flow.',
    note: 'Focused on rehearsal and feedback for live facilitation, not another content generator wearing a wizard hat.',
  },
  {
    slug: 'jobmatch-ai',
    title: 'JobMatch AI',
    shortTitle: 'JobMatch AI',
    type: 'Personal workflow tool',
    group: 'build',
    icon: SparklesIcon,
    href: 'https://personal-job-board-ivory.vercel.app/',
    linkLabel: 'Live site',
    status: 'Live',
    domains: ['Applied AI'],
    copy: 'An AI-powered job board that parses a CV, learns preferences, searches for relevant roles, and improves from user feedback.',
    note: 'Testing whether matching, explanations, and feedback loops can make job search less like feeding a CV into a paper shredder.',
  },
];

export const spark: PortfolioItem = {
  slug: 'spark',
  title: 'Spark',
  shortTitle: 'Spark',
  type: 'Architecture planning',
  group: 'build',
  icon: WorkflowIcon,
  linkLabel: 'Coming soon',
  status: 'Coming soon',
  domains: [],
  copy: 'AI-assisted architecture planning for mapping dependencies and validating technical decisions.',
  note: 'Making dependencies, assumptions, and trade-offs visible before the build gets ideas above its station.',
};

export const anvilRegistry: PortfolioItem & { repoHref: string } = {
  slug: 'anvil-registry',
  title: 'Anvil Registry',
  shortTitle: 'Anvil',
  type: 'Open source',
  group: 'open-source',
  icon: PackageIcon,
  href: 'https://anvil-registry.vercel.app/',
  repoHref: 'https://github.com/anthonyhumphreys/anvil-registry/',
  linkLabel: 'Docs',
  status: 'Open source',
  domains: ['Developer tooling', 'Applied AI'],
  copy: 'An open-source npm registry gateway and Node devcontainer base image for safer dependency installs, built from a spec with Codex doing the long-haul implementation work.',
  note: 'Built from a spec with Codex goal mode, keeping deterministic policy in charge while optional AI review adds context.',
};

export const anvilFeatures = [
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

/** Everything on the range map: university work, builds, and Anvil. Spark is not shipped yet. */
export const mappedWork: PortfolioItem[] = [...universityWork, ...builds, anvilRegistry];

/** The /projects list, in display order. */
export const projectList: PortfolioItem[] = [...builds, anvilRegistry, spark];
