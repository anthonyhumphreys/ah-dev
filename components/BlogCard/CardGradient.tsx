import { Card } from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function CardGradient({
  id,
  title,
  summary,
  readingTimeMinutes,
  ordinal,
}: {
  id: string;
  title: string;
  summary: string;
  readingTimeMinutes: number;
  ordinal: number;
}) {
  return (
    <Link
      href={`/blog/posts/${id}`}
      className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Card className="grid grid-cols-[2rem_1fr] gap-x-2 gap-y-0 px-5 py-6 transition-colors group-hover:bg-muted/50 group-hover:ring-primary/40 md:grid-cols-[3.5rem_1fr_auto] md:px-6">
        <span
          aria-hidden="true"
          className="pt-1.5 font-mono text-sm tabular-nums text-muted-foreground"
        >
          {String(ordinal).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          <h2 className="text-balance text-2xl font-extrabold leading-tight tracking-tight group-hover:text-primary md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            {summary}
          </p>
          <p className="mt-3 font-mono text-sm text-muted-foreground">
            {readingTimeMinutes} min read
          </p>
        </div>
        <ArrowRightIcon
          aria-hidden="true"
          className="hidden self-center text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary md:block"
        />
      </Card>
    </Link>
  );
}
