import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export type PostMeta = {
  id: string;
  title: string;
  summary: string;
  order: number;
  readingTimeMinutes: number;
};

export type PostData = PostMeta & {
  contentHtml: string;
};

export type PostNeighbours = {
  previous: PostMeta | null;
  next: PostMeta | null;
};

type PostFrontmatter = {
  title: string;
  summary: string;
  order: number;
};

const WORDS_PER_MINUTE = 230;

const postsDirectory = path.join(process.cwd(), '_posts');

export function stripLeadingH1(markdown: string) {
  return markdown.replace(
    /^(?:[ \t]*\r?\n)*[ \t]{0,3}#[ \t]+[^\r\n]*(?:\r?\n|$)(?:[ \t]*\r?\n)*/,
    ''
  );
}

export function getReadingTime(markdown: string) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function isValidPostId(id: string) {
  return /^[a-z0-9][a-z0-9-]*$/i.test(id);
}

function getPostPath(id: string) {
  return path.join(postsDirectory, `${id}.md`);
}

export function postExists(id: string) {
  return isValidPostId(id) && fs.existsSync(getPostPath(id));
}

function readPost(id: string) {
  const matterResult = matter(fs.readFileSync(getPostPath(id), 'utf8'));
  const content = stripLeadingH1(matterResult.content);
  const meta: PostMeta = {
    id,
    ...(matterResult.data as PostFrontmatter),
    readingTimeMinutes: getReadingTime(content),
  };

  return { meta, content };
}

function getPostFileNames() {
  return fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith('.md'));
}

export function getSortedPostsData(): PostMeta[] {
  return getPostFileNames()
    .map((fileName) => readPost(fileName.replace(/\.md$/, '')).meta)
    .sort((a, b) => b.order - a.order);
}

export function getAllPostIds() {
  return getPostFileNames().map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export function getPostNeighbours(id: string): PostNeighbours {
  const posts = getSortedPostsData();
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    next: posts[index - 1] ?? null,
    previous: posts[index + 1] ?? null,
  };
}

export async function getPostData(id: string): Promise<PostData> {
  const { meta, content } = readPost(id);
  const { remark } = await import('remark');
  const { default: html } = await import('remark-html');
  const processedContent = await remark().use(html).process(content);

  return {
    ...meta,
    contentHtml: processedContent.toString(),
  };
}
