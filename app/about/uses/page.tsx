import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The hardware and software Anthony Humphreys uses day to day.',
};

type UsesItem = {
  name: string;
  detail?: string;
};

type UsesGroup = {
  title: string;
  items: UsesItem[];
};

const hardware: UsesGroup[] = [
  {
    title: 'Desk',
    items: [
      {
        name: 'Custom-built PC',
        detail: '5950X, RTX 3090, 64GB RAM, 1TB SSD, 2TB HDD. Dual boots Windows 11 and Omarchy',
      },
      { name: 'Electriq 49" ultrawide', detail: '5120×1440' },
      { name: 'Sofle v1 split keyboard' },
      { name: 'Logitech MX Master 3S' },
      { name: 'Elgato Stream Deck' },
      { name: 'Elgato Facecam 4K' },
      { name: 'Blue Yeti mic' },
    ],
  },
  {
    title: 'Portable',
    items: [
      { name: 'MacBook Air 15" M3, 16GB' },
      { name: 'iPad Pro 13" M5' },
      { name: 'AirPods Pro 2' },
      { name: 'AirPods Max' },
    ],
  },
  {
    title: 'Network',
    items: [
      {
        name: 'UGREEN NASync DXP2800',
        detail: 'Intel N100, 16GB RAM, Debian 12. On the LAN for storage and self-hosting',
      },
    ],
  },
];

const software: UsesGroup[] = [
  {
    title: 'Editors & terminals',
    items: [
      { name: 'Cursor' },
      { name: 'VS Code' },
      { name: 'Ghostty' },
      { name: 'Xcode' },
      { name: 'Android Studio' },
    ],
  },
  {
    title: 'Agents & AI',
    items: [{ name: 'Anvil' }, { name: 'Codex (ChatGPT)' }, { name: 'Claude' }],
  },
  {
    title: 'Tooling',
    items: [{ name: 'Docker' }, { name: 'Raycast' }, { name: 'Tailscale' }, { name: '1Password' }],
  },
  {
    title: 'Planning & design',
    items: [{ name: 'Linear' }, { name: 'Figma' }, { name: 'Notion' }],
  },
  {
    title: 'On the PC',
    items: [
      { name: 'Windows 11' },
      { name: 'WSL2' },
      { name: 'Windows Terminal' },
      { name: 'Omarchy' },
    ],
  },
  {
    title: 'Streaming',
    items: [{ name: 'OBS' }],
  },
];

export default function Uses() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <div className="border-b pb-10">
        <Badge variant="secondary" className="mb-5">
          About / Uses
        </Badge>
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Uses
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
          The kit behind the work. Updated when something earns its place.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          A{' '}
          <a
            href="https://uses.tech"
            className="font-medium text-foreground underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
          >
            uses page
          </a>
          , in the long developer tradition of showing your desk instead of your code.
        </p>
      </div>

      <section aria-labelledby="uses-hardware" className="border-b py-12">
        <h2 id="uses-hardware" className="text-3xl font-extrabold tracking-tight">
          Hardware
        </h2>
        {hardware.map(({ title, items }) => (
          <div key={title} className="mt-8 first-of-type:mt-6">
            <h3 className="text-sm font-semibold text-muted-foreground">{title}</h3>
            <ul
              className={`mt-3 grid overflow-hidden rounded-lg border ${items.length > 1 ? 'sm:grid-cols-2' : ''}`}
            >
              {items.map(({ name, detail }) => (
                <li
                  key={name}
                  className="-mt-px -ml-px flex flex-col gap-1 border-t border-l bg-card p-4 md:p-5"
                >
                  <span className="font-semibold text-foreground">{name}</span>
                  {detail ? (
                    <span className="text-sm leading-6 text-muted-foreground">{detail}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section aria-labelledby="uses-software" className="py-12">
        <h2 id="uses-software" className="text-3xl font-extrabold tracking-tight">
          Software
        </h2>
        <dl className="mt-6 overflow-hidden rounded-lg border">
          {software.map(({ title, items }) => (
            <div
              key={title}
              className="grid gap-2 border-b bg-card p-4 last:border-b-0 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6 md:p-5"
            >
              <dt className="text-sm font-semibold text-muted-foreground">{title}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-2 gap-y-1 text-foreground">
                  {items.map(({ name }, index) => (
                    <li key={name}>
                      {name}
                      {index < items.length - 1 ? (
                        <span aria-hidden="true" className="ml-2 text-muted-foreground">
                          /
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 font-mono text-xs text-muted-foreground">Last updated September 2026</p>
      </section>
    </main>
  );
}
