import { Welcome } from '../components/Welcome/Welcome';
import { getSortedPostsData } from '../utils/posts';

export default function HomePage() {
  const posts = getSortedPostsData().slice(0, 3);

  return <Welcome posts={posts} />;
}
