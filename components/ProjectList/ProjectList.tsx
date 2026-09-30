import { Badge } from '@/components/ui/badge';
import { isExternal, projectList } from '@/lib/portfolio';
import { ExternalLinkIcon } from 'lucide-react';

export function ProjectGrid() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-6xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <div className="max-w-3xl border-b pb-10">
        <Badge variant="secondary" className="mb-5">
          Lexio and experiments
        </Badge>
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Builds and experiments
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Current Lexio builds and experiments: small, focused software that tests AI workflows,
          developer-facing tools, and useful ideas in the real world.
        </p>
      </div>

      <ul className="mt-6 flex flex-col">
        {projectList.map(({ slug, icon: Icon, title, copy, href, linkLabel, status, note }) => (
          <li
            key={slug}
            id={`work-${slug}`}
            className="grid gap-5 border-b py-7 md:grid-cols-[1fr_10rem] md:gap-10"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <Icon aria-hidden="true" className="text-primary" />
                <Badge variant="secondary" className="w-fit">
                  {status}
                </Badge>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-none tracking-tight">{title}</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">{copy}</p>
              <p className="mt-4 max-w-3xl rounded-lg border bg-accent/10 px-3 py-2 text-sm font-medium leading-6">
                {note}
              </p>
            </div>
            <div className="md:pt-10 md:text-right">
              {href ? (
                <a
                  href={href}
                  rel={isExternal(href) ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 rounded-sm text-sm font-bold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/60"
                >
                  <span className="sr-only">{title}: </span>
                  {linkLabel}
                  <ExternalLinkIcon aria-hidden="true" className="size-3.5" />
                </a>
              ) : (
                <span className="text-sm font-bold text-muted-foreground">
                  {linkLabel}
                  <span className="sr-only">: no public link yet</span>
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
