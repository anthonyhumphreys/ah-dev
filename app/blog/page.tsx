import CardGradient from '@/components/BlogCard/CardGradient';
import { getSortedPostsData } from '@/utils/posts';

type AllPostsData = {
  date: string;
  title: string;
  id: string;
  summary: string;
}[];

export const metadata = {
  title: 'ahdev',
};

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <section>
      {allPostsData.map(({ id, title, summary }) => (
        <CardGradient key={id} id={id} title={title} summary={summary} />
      ))}
    </section>
  );
}
