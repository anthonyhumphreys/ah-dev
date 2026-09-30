import CardGradient from '@/components/BlogCard/CardGradient';
import { Card, CardContent } from '@/components/ui/card';
import { getSortedPostsData, type PostMeta } from '@/utils/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Writing',
  description:
    'Notes from Anthony Humphreys on software delivery, AI systems, mobile platforms, and research tools.',
};

export default function Home() {
  const allPostsData: PostMeta[] = getSortedPostsData();

  return (
    <main
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-16 md:w-[calc(100%-3rem)] md:py-24"
      id="main-content"
    >
      <div className="border-b pb-10">
        <h1 className="text-balance text-6xl font-black leading-none tracking-tight md:text-8xl">
          Writing
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
          Notes on software delivery, AI, mobile platforms, research tools, and the occasional
          decision that looked better in the meeting than in the codebase.
        </p>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Mostly decision notes, architecture, applied AI, and delivery.
        </p>
      </div>
      {allPostsData.length > 0 ? (
        <ol className="mt-6 flex flex-col gap-3">
          {allPostsData.map(({ id, title, summary, readingTimeMinutes }, index) => (
            <li key={id}>
              <CardGradient
                id={id}
                title={title}
                summary={summary}
                readingTimeMinutes={readingTimeMinutes}
                ordinal={allPostsData.length - index}
              />
            </li>
          ))}
        </ol>
      ) : (
        <Card className="mt-8">
          <CardContent className="text-base leading-7">
            No notes published yet. The markdown is ready; the words are not.{' '}
            <Link
              href="/"
              className="rounded-sm font-semibold text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Head back to the homepage
            </Link>{' '}
            for the work itself.
          </CardContent>
        </Card>
      )}
    </main>
  );
}
