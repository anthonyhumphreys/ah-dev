import {
  IconArrowRight,
  IconBrain,
  IconBrandLinkedin,
  IconBuildingCommunity,
  IconCloud,
  IconDeviceGamepad2,
  IconDeviceMobile,
  IconExternalLink,
  IconMap2,
  IconPackage,
  IconRocket,
  IconSatellite,
  IconSparkles,
  IconUsers,
} from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Welcome.module.css';
import { SocialButtons } from '../SocialButtons/SocialButtons';

const strengths = [
  'Product engineering',
  'AI systems',
  'Mobile platforms',
  'Research translation',
  'Service design',
  'Cloud delivery',
];

const highlights = [
  {
    icon: IconDeviceMobile,
    title: 'Student-facing mobile platforms',
    copy: 'Modernising iLancaster with React Native, Expo, faster check-in flows, safety features, digital passes, and data-informed iteration.',
  },
  {
    icon: IconBrain,
    title: 'Applied AI that has to behave',
    copy: 'Building tools like LUCA that support real student workflows: CV review, interview practice, job description analysis, and progress tracking.',
  },
  {
    icon: IconBuildingCommunity,
    title: 'Research and innovation delivery',
    copy: 'Turning academic and partner ideas into usable products: maps, public platforms, data tools, admin systems, and prototypes.',
  },
  {
    icon: IconCloud,
    title: 'End-to-end product ownership',
    copy: 'Taking ideas from discovery and workshops through architecture, implementation, deployment, feedback, and maintenance.',
  },
];

const products = [
  {
    icon: IconRocket,
    title: 'Lexio',
    type: 'Product studio',
    href: 'https://www.lexio.app/',
    copy: 'A home for subscription apps and bespoke builds: products for developers, creators, internal tools, prototypes, and integrations.',
  },
  {
    icon: IconDeviceGamepad2,
    title: 'GMprentice',
    type: 'AI product',
    href: 'https://www.gmprentice.app/',
    copy: 'A sandbox for tabletop GMs to practise with AI adventurers: party generation, character voice, dice, initiative, secrets, and session flow.',
  },
  {
    icon: IconSparkles,
    title: 'JobMatch AI',
    type: 'Personal workflow tool',
    href: 'https://personal-job-board-ivory.vercel.app/',
    copy: 'An AI-powered job board that parses a CV, learns preferences, searches for relevant roles, and improves from user feedback.',
  },
];

const universityWork = [
  {
    icon: IconBrain,
    title: 'LUCA',
    type: 'Careers AI assistant',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_innovationhub-lancasteruniversity-stemeducation-activity-7439319152944676864-chvI',
    copy: 'A Lancaster University careers pilot for independent employability practice: CV and cover letter review, interview modes, feedback reports, and LinkedIn recommendations.',
  },
  {
    icon: IconDeviceMobile,
    title: 'iLancaster',
    type: 'Mobile platform',
    href: 'https://www.linkedin.com/pulse/ilancaster-evolving-together-through-co-production-zzsle',
    copy: 'A daily companion for campus life, evolved through co-production and data: Expo migration, performance work, check-in improvements, digital passes, safety tooling, and support visibility.',
  },
  {
    icon: IconMap2,
    title: 'IceHunter front-end',
    type: 'Research interface',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_lancasteruniversity-innovation-icehunter-activity-7452265127137107968-YQ5Q',
    copy: 'A map interface for iceberg detection research, turning satellite radar and AI outputs into accessible location data for potential maritime use.',
  },
  {
    icon: IconPackage,
    title: 'Sustainable packaging tool',
    type: 'Research-to-product',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_lancaster-team-developing-programme-to-help-activity-7396521023522852864-hgzr',
    copy: 'A web tool helping eCommerce businesses make data-driven packaging decisions that balance cost, compliance, and environmental impact.',
  },
  {
    icon: IconSatellite,
    title: 'AuroraWatch UK refresh',
    type: 'Public science platform',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_aurorawatchuk-aurora-scienceforeveryone-activity-7426595855639482368-S0qd',
    copy: 'A modernisation project for a public-facing aurora platform built around real-time and historical data, alerts, and wider access to science.',
  },
  {
    icon: IconUsers,
    title: 'Prob_AI research hub',
    type: 'Research web platform',
    href: 'https://www.linkedin.com/posts/innovation-hub-lancs_innovationhub-probai-partnerships-activity-7332661773864488964-16S8',
    copy: 'A public site for an EPSRC-funded AI research hub, built with Next.js, Mantine UI, AWS, university content integrations, and a lightweight admin workflow.',
  },
];

const principles = [
  'Start with the shape of the problem before picking the stack.',
  'Design for the people who will actually use and maintain the thing.',
  'Use AI where it expands capability, not where it decorates a demo.',
  'Keep systems understandable enough that future teams can safely change them.',
  'Prefer evidence from users, data, and delivery over theatre. Theatre has excellent lighting and terrible uptime.',
];

export function Welcome() {
  return (
    <main className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.heroInner}>
          <div className={classes.heroCopy}>
            <h1>Building useful software across AI, mobile, research and product systems</h1>
            <p>
              I work across the full arc of product engineering: discovery, architecture,
              implementation, delivery, and iteration. The common thread is making complicated ideas
              usable for real people.
            </p>
            <div className={classes.heroActions}>
              <Link href="#products" className={classes.primaryAction}>
                Explore the work
                <IconArrowRight aria-hidden="true" />
              </Link>
              <Link href="#platforms" className={classes.secondaryAction}>
                See university platforms
              </Link>
            </div>
          </div>

          <div className={classes.heroPanel} aria-label="Anthony Humphreys capability summary">
            <div className={classes.panelTopline}>
              <span>Anthony Humphreys</span>
              <span>Product-minded senior developer</span>
            </div>
            <div className={classes.terminal}>
              <span>const practice = &#123;</span>
              <span> products: &apos;Lexio, GMprentice, JobMatch AI&apos;,</span>
              <span> platforms: &apos;iLancaster, LUCA, research tools&apos;,</span>
              <span> approach: &apos;make the useful thing real&apos;</span>
              <span>&#125;;</span>
            </div>
            <div className={classes.panelFooter}>
              <div>
                <strong>Range</strong>
                <span>AI, mobile, web, cloud</span>
              </div>
              <div>
                <strong>Mode</strong>
                <span>Discovery to shipped product</span>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.proofStrip} aria-label="Core capabilities">
          {strengths.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className={classes.section} id="experience">
        <div className={classes.sectionIntro}>
          <h2>Capabilities with receipts</h2>
          <p>
            The work spans student services, AI assistants, public research platforms, internal
            tools, subscription products, and the unglamorous engineering that keeps them usable
            after launch.
          </p>
        </div>
        <div className={classes.highlightGrid}>
          {highlights.map(({ icon: Icon, title, copy }) => (
            <article className={classes.highlight} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={classes.caseSection} id="products">
        <div className={classes.sectionIntro}>
          <h2>Products and experiments</h2>
          <p>
            Lexio is where I ship focused software outside the university context: small products,
            AI workflows, developer tools, and prototypes that force the useful questions early.
          </p>
        </div>
        <div className={classes.caseList}>
          {products.map((product, index) => (
            <a className={classes.caseItem} href={product.href} key={product.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <product.icon aria-hidden="true" />
              <div>
                <p>{product.type}</p>
                <h3>{product.title}</h3>
                <small>{product.copy}</small>
              </div>
              <IconExternalLink aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className={classes.fitSection} id="platforms">
        <div className={classes.sectionIntro}>
          <h2>University platforms and research translation</h2>
          <p>
            A lot of the interesting work happens between disciplines: careers, mobile services,
            sustainability, physics, public science, research visibility, and practical AI.
          </p>
        </div>
        <div className={classes.workGrid}>
          {universityWork.map(({ icon: Icon, title, type, href, copy }) => (
            <a className={classes.workItem} href={href} key={title}>
              <div>
                <Icon aria-hidden="true" />
                <IconBrandLinkedin aria-hidden="true" />
              </div>
              <p>{type}</p>
              <h3>{title}</h3>
              <small>{copy}</small>
            </a>
          ))}
        </div>
      </section>

      <section className={classes.principlesSection}>
        <div className={classes.fitCard}>
          <div>
            <IconRocket aria-hidden="true" />
            <h2>How I tend to work</h2>
            <p>
              Strong technical work is rarely just code. It is judgement, collaboration, trade-offs,
              communication, and enough taste to know when an abstraction has wandered into
              self-importance.
            </p>
          </div>
          <ul>
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={classes.contactSection} id="contact">
        <h2>More work, writing, and traces of what I&apos;m building</h2>
        <p>
          This site is a working notebook for products, platforms, ideas, and the occasional
          technical opinion with its sleeves rolled up.
        </p>
        <div className={classes.contactActions}>
          <Link href="/blog" className={classes.primaryAction}>
            Read the writing
            <IconArrowRight aria-hidden="true" />
          </Link>
          <SocialButtons />
        </div>
      </section>
    </main>
  );
}
