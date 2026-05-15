import { getSortedPostsData } from '@/utils/posts';
import type { MetadataRoute } from 'next';

const siteUrl = 'https://anthonyhumphreys.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blog', '/about', '/technical-leadership', '/projects', '/contact'].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const posts = getSortedPostsData().map((post) => ({
    url: `${siteUrl}/blog/posts/${post.id}`,
    lastModified: new Date(),
  }));

  return [...routes, ...posts];
}
