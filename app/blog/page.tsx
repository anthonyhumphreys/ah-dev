import CardGradient from '@/components/BlogCard/CardGradient';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getSortedPostsData, type PostMeta } from '@/utils/posts';

export const metadata = {
  title: 'Writing | Anthony Humphreys',
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
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="outline">Decision notes</Badge>
          <Badge variant="outline">Architecture notes</Badge>
          <Badge variant="outline">Applied AI</Badge>
          <Badge variant="outline">Delivery notes</Badge>
        </div>
      </div>
      {allPostsData.length > 0 ? (
        <div className="mt-6 flex flex-col gap-3">
          {allPostsData.map(({ id, title, summary }) => (
            <CardGradient key={id} id={id} title={title} summary={summary} />
          ))}
        </div>
      ) : (
        <Card className="mt-8">
          <CardContent>No posts yet. The markdown trapdoor is ready.</CardContent>
        </Card>
      )}
    </main>
  );
}
