'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, type FocusEvent, type ReactNode } from 'react';

export type StageDomain = { name: string; slug: string; count: number };
export type StageItem = {
  slug: string;
  title: string;
  type: string;
  domains: string[];
  domainNames: string;
};

function isFocusVisible(element: Element) {
  try {
    return element.matches(':focus-visible');
  } catch {
    return false;
  }
}

function nodeSlug(target: EventTarget) {
  if (!(target instanceof Element)) {
    return null;
  }
  return target.closest<SVGElement>('.rm-node')?.dataset.p ?? null;
}

export function RangeMapStage({
  domains,
  items,
  total,
  children,
}: {
  domains: StageDomain[];
  items: StageItem[];
  total: number;
  children: ReactNode;
}) {
  const [pressed, setPressed] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [node, setNode] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = stageRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const active = preview ?? pressed;
  const activeDomain = domains.find((domain) => domain.slug === pressed);
  const visibleItems = pressed ? items.filter((item) => item.domains.includes(pressed)) : items;

  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter the range map by domain"
      >
        {domains.map((domain) => {
          const isPressed = pressed === domain.slug;
          return (
            <button
              key={domain.slug}
              type="button"
              aria-pressed={isPressed}
              onClick={() => {
                setPreview(null);
                setPressed(isPressed ? null : domain.slug);
              }}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') {
                  setPreview(domain.slug);
                }
              }}
              onPointerLeave={() => setPreview(null)}
              onFocus={(event: FocusEvent<HTMLButtonElement>) => {
                if (isFocusVisible(event.currentTarget)) {
                  setPreview(domain.slug);
                }
              }}
              onBlur={() => setPreview(null)}
              className={cn(
                'inline-flex h-8 items-center gap-2 rounded-full border px-3 text-xs font-bold transition-colors duration-200 ease-out outline-none focus-visible:ring-3 focus-visible:ring-ring/60',
                isPressed
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'bg-background/70 text-foreground hover:border-primary/60 hover:bg-muted'
              )}
            >
              {domain.name}
              <span
                className={cn(
                  'font-mono text-[0.68rem] tabular-nums',
                  isPressed ? 'text-primary-foreground/80' : 'text-muted-foreground'
                )}
              >
                {domain.count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {activeDomain
          ? `Showing ${visibleItems.length} of ${total} projects in ${activeDomain.name}.`
          : ''}
      </p>

      <div
        ref={stageRef}
        className="rm hidden sm:block"
        data-active={active ?? undefined}
        data-node={node ?? undefined}
        onPointerOver={(event) => setNode(nodeSlug(event.target))}
        onPointerLeave={() => setNode(null)}
        onFocus={(event) => setNode(nodeSlug(event.target))}
        onBlur={() => setNode(null)}
        data-inview={inView ? 'true' : 'false'}
      >
        {children}
      </div>

      <ul className="flex flex-col border-t sm:hidden" aria-label="Work on the range map">
        {visibleItems.map((item) => (
          <li key={item.slug} className="border-b">
            <a
              href={`#work-${item.slug}`}
              className="flex items-baseline justify-between gap-4 py-3 text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
            >
              <span className="font-bold">{item.title}</span>
              <span className="text-right font-mono text-[0.7rem] text-muted-foreground">
                {item.domainNames}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
