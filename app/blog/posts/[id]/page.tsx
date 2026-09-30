import '@/components/Prose/prose.css';

import {
  getAllPostIds,
  getPostData,
  getPostNeighbours,
  postExists,
  type PostData,
  type PostMeta,
} from '@/utils/posts';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  if (!postExists(id)) {
    notFound();
  }

  const postData: PostData = await getPostData(id);

  return {
    title: postData.title,
    description: postData.summary,
    alternates: {
      canonical: `/blog/posts/${id}`,
    },
    openGraph: {
      title: postData.title,
      description: postData.summary,
      type: 'article',
      url: `/blog/posts/${id}`,
    },
  };
}

export function generateStaticParams() {
  return getAllPostIds().map(({ params }) => params);
}

function NeighbourLink({ post, direction }: { post: PostMeta; direction: 'previous' | 'next' }) {
  const isNext = direction === 'next';
  const Icon = isNext ? ArrowRightIcon : ArrowLeftIcon;

  return (
    <Link
      href={`/blog/posts/${post.id}`}
      className={`group flex h-full flex-col gap-2 rounded-lg border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isNext ? 'sm:items-end sm:text-right' : ''}`}
    >
      <span className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground">
        {!isNext && (
          <Icon
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
        )}
        {isNext ? 'Next note' : 'Previous note'}
        <span className="sr-only">:</span>
        {isNext && (
          <Icon
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        )}
      </span>
      <span className="text-lg font-extrabold leading-snug text-foreground group-hover:text-primary">
        {post.title}
      </span>
    </Link>
  );
}

export default async function Post({ params }: Props) {
  const { id } = await params;

  if (!postExists(id)) {
    notFound();
  }

  const postData: PostData = await getPostData(id);
  const { previous, next } = getPostNeighbours(id);

  return (
    <>
      <div className="reading-progress" aria-hidden="true" />
      <article
        className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
        id="main-content"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 rounded-sm text-sm font-extrabold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="h-px w-5 bg-current" aria-hidden="true" />
          All writing
        </Link>
        <header className="mt-8 border-b pb-10">
          <h1 className="max-w-4xl text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
            {postData.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-8 text-muted-foreground">
            {postData.summary}
          </p>
          <p className="mt-6 font-mono text-sm text-muted-foreground">
            {postData.readingTimeMinutes} min read
          </p>
        </header>
        <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <footer className="mt-16 border-t pt-10">
          {(previous || next) && (
            <nav aria-label="More notes" className="grid gap-3 sm:grid-cols-2">
              {previous && <NeighbourLink post={previous} direction="previous" />}
              {next && (
                <div className="sm:col-start-2">
                  <NeighbourLink post={next} direction="next" />
                </div>
              )}
            </nav>
          )}
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-3 rounded-sm text-sm font-extrabold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="h-px w-5 bg-current" aria-hidden="true" />
            Back to all writing
          </Link>
        </footer>
      </article>
    </>
  );
}
