import Link from 'next/link';
import Date from '@/components/Date';

import { getSortedPostsData } from '@/utils/posts';

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

export const metadata = {
  title: 'ahdev',
};

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <div>
              <Link href={`/blog/posts/${id}`}>{title}</Link>
            </div>
            {/* <br /> */}
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
