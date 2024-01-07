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
      <ul>
        {allPostsData.map(({ id, date, title, summary }) => (
          <CardGradient key={id} id={id} date={date} title={title} summary={summary} />

          // <li key={id}>
          //   <div>
          //     <Link href={`/blog/posts/${id}`}>{title}</Link>
          //   </div>
          //   {/* <br /> */}
          //   <small>
          //     <Date dateString={date} />
          //   </small>
          // </li>
        ))}
      </ul>
    </section>
  );
}
