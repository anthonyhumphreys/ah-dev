import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, NotebookTextIcon } from 'lucide-react';
import Link from 'next/link';

export default function CardGradient({
  id,
  title,
  summary,
}: {
  id: string;
  title: string;
  summary: string;
}) {
  return (
    <Link href={`/blog/posts/${id}`} className="block">
      <Card className="transition-transform hover:translate-x-1">
        <CardHeader className="grid-cols-[2.5rem_1fr_auto] items-center">
          <NotebookTextIcon aria-hidden="true" className="text-primary" />
          <div className="min-w-0">
            <CardTitle className="text-2xl font-extrabold md:text-3xl">{title}</CardTitle>
            <CardDescription className="mt-2 text-base">{summary}</CardDescription>
          </div>
          <CardAction>
            <ArrowRightIcon aria-hidden="true" className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  );
}
