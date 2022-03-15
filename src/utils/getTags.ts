import { Post } from 'src/types';

export default function getTags(posts: Post[]): string[] {
  const tags: string[] = [];

  Object.entries(posts).forEach(([_, value]) => tags.push(...value.tags));

  return Array.from(new Set(tags));
}
