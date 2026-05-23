import { getAllPostIds, getPostData, type PostData } from '@/utils/posts';
import Link from 'next/link';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
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
      type: 'website',
      url: `/blog/posts/${id}`,
    },
  };
}

export function generateStaticParams() {
  return getAllPostIds().map(({ params }) => params);
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const postData: PostData = await getPostData(id);

  return (
    <article
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
      id="main-content"
    >
      <Link
        href="/blog"
        className="inline-flex items-center gap-3 text-sm font-extrabold text-primary underline-offset-4 hover:underline"
      >
        <span className="h-px w-5 bg-current" aria-hidden="true" />
        Writing
      </Link>
      <header className="mt-8 border-b pb-10">
        <h1 className="max-w-4xl text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          {postData.title}
        </h1>
      </header>
      <div
        className="mt-10 max-w-3xl text-lg leading-8 text-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_code]:rounded-md [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-primary [&_h1]:mt-9 [&_h1]:mb-4 [&_h1]:text-4xl [&_h1]:font-extrabold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_li]:pl-2 [&_li]:marker:text-accent [&_li]:marker:font-bold [&_li+li]:mt-2 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-7 [&_ol_ol]:my-2 [&_ol_ul]:my-2 [&_p]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-foreground [&_pre]:p-5 [&_pre]:text-background [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-7 [&_ul_ol]:my-2 [&_ul_ul]:my-2"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
