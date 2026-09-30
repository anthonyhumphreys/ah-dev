import {
  getAllPostIds,
  getPostNeighbours,
  getReadingTime,
  getSortedPostsData,
  postExists,
  stripLeadingH1,
} from './posts';

describe('stripLeadingH1', () => {
  it('removes a leading level-one heading', () => {
    expect(stripLeadingH1('# Title\n\nBody copy.')).toBe('Body copy.');
  });

  it('skips blank lines before the heading', () => {
    expect(stripLeadingH1('\n\n  \n# Title\nBody copy.')).toBe('Body copy.');
  });

  it('handles CRLF line endings and a heading-only document', () => {
    expect(stripLeadingH1('\r\n# Title\r\n\r\nBody')).toBe('Body');
    expect(stripLeadingH1('# Title')).toBe('');
  });

  it('only removes the first heading', () => {
    expect(stripLeadingH1('# One\n\n# Two\n')).toBe('# Two\n');
  });

  it('leaves content alone when it does not start with a level-one heading', () => {
    const cases = [
      'Intro.\n\n# Later heading',
      '## Subheading\n\nBody',
      '#hashtag is not a heading',
      '    # indented code, not a heading',
    ];

    cases.forEach((markdown) => {
      expect(stripLeadingH1(markdown)).toBe(markdown);
    });
  });
});

describe('getReadingTime', () => {
  it('never returns less than one minute', () => {
    expect(getReadingTime('')).toBe(1);
    expect(getReadingTime('A few words.')).toBe(1);
  });

  it('uses roughly 230 words per minute', () => {
    expect(getReadingTime(Array(460).fill('word').join(' '))).toBe(2);
    expect(getReadingTime(Array(1150).fill('word').join(' '))).toBe(5);
  });

  it('ignores punctuation-only tokens, link URLs and fenced code', () => {
    const markdown = [
      '- - -',
      '[two words](https://example.com/a/very/long/url)',
      '```',
      Array(1000).fill('code').join(' '),
      '```',
    ].join('\n');

    expect(getReadingTime(markdown)).toBe(1);
  });
});

describe('post loading', () => {
  it('sorts posts by descending order and includes reading time', () => {
    const posts = getSortedPostsData();

    expect(posts.length).toBeGreaterThan(0);
    posts.forEach((post) => {
      expect(post.readingTimeMinutes).toBeGreaterThanOrEqual(1);
    });
    expect(posts.map(({ order }) => order)).toEqual(
      [...posts].map(({ order }) => order).sort((a, b) => b - a)
    );
  });

  it('reports existence without touching unsafe paths', () => {
    const [{ params }] = getAllPostIds();

    expect(postExists(params.id)).toBe(true);
    expect(postExists('does-not-exist')).toBe(false);
    expect(postExists('../package')).toBe(false);
  });

  it('links neighbours in listing order', () => {
    const posts = getSortedPostsData();
    const newest = getPostNeighbours(posts[0].id);
    const oldest = getPostNeighbours(posts[posts.length - 1].id);

    expect(posts.length).toBeGreaterThan(1);
    expect(newest.next).toBeNull();
    expect(oldest.previous).toBeNull();
    expect(newest.previous?.id).toBe(posts[1].id);
    expect(oldest.next?.id).toBe(posts[posts.length - 2].id);
    expect(getPostNeighbours('does-not-exist')).toEqual({ previous: null, next: null });
  });
});
