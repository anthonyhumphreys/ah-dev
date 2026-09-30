import { domainSlug, domains, mappedWork, type Domain, type PortfolioItem } from '@/lib/portfolio';
import type { CSSProperties } from 'react';
import { RangeMapStage, type StageDomain, type StageItem } from './RangeMapStage';

const VIEW_WIDTH = 480;
const VIEW_HEIGHT = 400;

type Point = { x: number; y: number };
type LabelPlacement = { anchor: 'start' | 'middle' | 'end'; dx: number; dy: number };

const above: LabelPlacement = { anchor: 'middle', dx: 0, dy: -13 };
const below: LabelPlacement = { anchor: 'middle', dx: 0, dy: 21 };
const right: LabelPlacement = { anchor: 'start', dx: 12, dy: 4 };

const hubLayout: Record<Domain, Point & { label: LabelPlacement }> = {
  Research: { x: 140, y: 170, label: { anchor: 'end', dx: -16, dy: 4 } },
  'Applied AI': { x: 330, y: 190, label: { anchor: 'middle', dx: 0, dy: -18 } },
  Mobile: { x: 404, y: 66, label: { anchor: 'middle', dx: 0, dy: -18 } },
  Cloud: { x: 84, y: 336, label: { anchor: 'middle', dx: 0, dy: 26 } },
  'Developer tooling': { x: 344, y: 338, label: { anchor: 'middle', dx: 0, dy: 26 } },
};

const nodeLayout: Record<string, Point & { label: LabelPlacement }> = {
  luca: { x: 436, y: 176, label: below },
  ilancaster: { x: 312, y: 78, label: above },
  icehunter: { x: 236, y: 132, label: above },
  'sustainable-packaging': { x: 66, y: 92, label: below },
  aurorawatch: { x: 186, y: 58, label: above },
  'prob-ai': { x: 104, y: 256, label: right },
  lexio: { x: 438, y: 334, label: below },
  gmprentice: { x: 430, y: 258, label: below },
  'jobmatch-ai': { x: 232, y: 256, label: below },
  'anvil-registry': { x: 286, y: 308, label: below },
};

function centroid(points: Point[]): Point {
  const sum = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
  return { x: sum.x / points.length, y: sum.y / points.length };
}

function placeNode(item: PortfolioItem) {
  return (
    nodeLayout[item.slug] ?? {
      ...centroid(item.domains.map((d) => hubLayout[d])),
      label: below,
    }
  );
}

/** A gentle, deterministic curve: bow each edge a little to one side of the straight line. */
function edgePath(from: Point, to: Point) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const bow = 0.12;
  const cx = mx - dy * bow;
  const cy = my + dx * bow;
  return `M${from.x.toFixed(1)} ${from.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

function buildCss() {
  const domainRules = domains
    .map((domain) => {
      const s = domainSlug(domain);
      return [
        `.rm[data-active="${s}"] :is(.rm-edge,.rm-node,.rm-hub):not([data-d~="${s}"]){opacity:.14}`,
        `.rm[data-active="${s}"] .rm-edge[data-d~="${s}"]{stroke:var(--primary);stroke-width:2.25}`,
        `.rm[data-active="${s}"] .rm-node[data-d~="${s}"] .rm-dot{fill:var(--accent);stroke:var(--accent)}`,
        `.rm[data-active="${s}"] .rm-hub[data-d~="${s}"] .rm-hub-dot{fill:var(--primary)}`,
      ].join('');
    })
    .join('');

  const nodeRules = mappedWork
    .map((item) => {
      const scope = `.rm:not([data-active])[data-node="${item.slug}"]`;
      const unrelatedHubs = item.domains.map((d) => `:not([data-d~="${domainSlug(d)}"])`).join('');
      return [
        `${scope} .rm-edge:not([data-p="${item.slug}"]),${scope} .rm-node:not([data-p="${item.slug}"]),${scope} .rm-hub${unrelatedHubs}{opacity:.18}`,
        `${scope} .rm-edge[data-p="${item.slug}"]{stroke:var(--primary);stroke-width:2.25}`,
      ].join('');
    })
    .join('');

  return `
.rm-edge{fill:none;stroke:color-mix(in oklab,var(--muted-foreground),transparent 35%);stroke-width:1.25;transition:opacity 200ms ease-out,stroke 200ms ease-out}
.rm-node,.rm-hub{transition:opacity 200ms ease-out}
.rm-node{outline:none;cursor:pointer}
.rm-dot{fill:var(--background);stroke:var(--foreground);stroke-width:1.5;transition:fill 200ms ease-out,stroke 200ms ease-out}
.rm-hub-dot{fill:color-mix(in oklab,var(--primary) 24%,var(--background));stroke:var(--primary);stroke-width:1.75;transition:fill 200ms ease-out}
.rm-text{paint-order:stroke;stroke:var(--background);stroke-width:5px;stroke-linejoin:round}
.rm-hub-label{fill:var(--primary);font-family:var(--font-mono),ui-monospace,monospace;font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.rm-label{fill:var(--foreground);font-size:12.5px;font-weight:650}
.rm-ring{fill:none;stroke:var(--ring);stroke-width:2;opacity:0}
.rm-node:focus-visible .rm-ring{opacity:1}
.rm-node:is(:hover,:focus-visible) .rm-dot{fill:var(--accent);stroke:var(--accent)}
.rm-node:is(:hover,:focus-visible) .rm-label{text-decoration:underline}
${domainRules}
${nodeRules}
@keyframes rm-draw{to{stroke-dashoffset:0}}
@keyframes rm-drift{from{transform:translate(0,0)}to{transform:translate(1.2px,-1.6px)}}
@media (prefers-reduced-motion: no-preference){
.rm-edge{stroke-dasharray:1;stroke-dashoffset:1;animation:rm-draw 900ms cubic-bezier(.22,1,.36,1) calc(200ms + var(--i) * 35ms) forwards}
.rm-drift{animation:rm-drift 7s ease-in-out calc(var(--i) * -0.9s) infinite alternate;animation-play-state:paused}
.rm[data-inview="true"] .rm-drift{animation-play-state:running}
}
`;
}

export function RangeMap() {
  const edges = mappedWork.flatMap((item) =>
    item.domains.map((domain) => ({
      key: `${item.slug}-${domainSlug(domain)}`,
      slug: item.slug,
      domain,
      d: edgePath(placeNode(item), hubLayout[domain]),
    }))
  );

  const stageDomains: StageDomain[] = domains.map((domain) => ({
    name: domain,
    slug: domainSlug(domain),
    count: mappedWork.filter((item) => item.domains.includes(domain)).length,
  }));

  const stageItems: StageItem[] = mappedWork.map((item) => ({
    slug: item.slug,
    title: item.title,
    type: item.type,
    domains: item.domains.map(domainSlug),
    domainNames: item.domains.join(' · '),
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: buildCss() }} />
      <RangeMapStage domains={stageDomains} items={stageItems} total={mappedWork.length}>
        <svg
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          className="block h-auto w-full"
          role="group"
          aria-labelledby="range-map-title"
          aria-describedby="range-map-desc"
        >
          <title id="range-map-title">Range map</title>
          <desc id="range-map-desc">
            {`${mappedWork.length} pieces of work connected to ${domains.length} domains: ${domains.join(', ')}. Each project links to its write-up further down this page.`}
          </desc>

          <g aria-hidden="true">
            {edges.map((edge, index) => (
              <path
                key={edge.key}
                className="rm-edge"
                d={edge.d}
                pathLength={1}
                data-p={edge.slug}
                data-d={domainSlug(edge.domain)}
                style={{ '--i': index } as CSSProperties}
              />
            ))}
          </g>

          <g aria-hidden="true">
            {domains.map((domain) => {
              const hub = hubLayout[domain];
              return (
                <g key={domain} className="rm-hub" data-d={domainSlug(domain)}>
                  <circle className="rm-hub-dot" cx={hub.x} cy={hub.y} r={9} />
                  <text
                    className="rm-text rm-hub-label"
                    x={hub.x + hub.label.dx}
                    y={hub.y + hub.label.dy}
                    textAnchor={hub.label.anchor}
                  >
                    {domain}
                  </text>
                </g>
              );
            })}
          </g>

          <g>
            {mappedWork.map((item, index) => {
              const node = placeNode(item);
              return (
                <a
                  key={item.slug}
                  href={`#work-${item.slug}`}
                  className="rm-node"
                  data-p={item.slug}
                  data-d={item.domains.map(domainSlug).join(' ')}
                  aria-label={`${item.title}: ${item.type}, ${item.domains.join(' and ')}`}
                >
                  <g className="rm-drift" style={{ '--i': index } as CSSProperties}>
                    <circle cx={node.x} cy={node.y} r={16} fill="transparent" />
                    <circle className="rm-ring" cx={node.x} cy={node.y} r={10} />
                    <circle className="rm-dot" cx={node.x} cy={node.y} r={5.5} />
                    <text
                      className="rm-text rm-label"
                      x={node.x + node.label.dx}
                      y={node.y + node.label.dy}
                      textAnchor={node.label.anchor}
                    >
                      {item.shortTitle}
                    </text>
                  </g>
                </a>
              );
            })}
          </g>
        </svg>
      </RangeMapStage>
    </>
  );
}
