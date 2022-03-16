import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaWindowClose } from 'react-icons/fa';

import BlogPostCard from 'src/components/common/blog-post-card';
import MaxWidthWrapper from 'src/components/common/max-width-wrapper';
import * as Styled from 'src/components/posts/styles';
import { getDatabase } from 'src/lib/notion';

export default function Posts({ posts, tags }: { posts: any; tags: any }) {
  const { query } = useRouter();
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  console.log(posts);

  useEffect(() => {
    Object.entries(query).forEach(([_, value]) => {
      if (Array.isArray(value)) {
        const tagsQuery = value.map((t) => decodeURIComponent(t));
        setTagFilter((prev: any) => [...prev, ...tagsQuery]);
      } else {
        const tagQuery = decodeURIComponent(value!);
        setTagFilter((prev: any) => [...prev, tagQuery]);
      }
    });
    return () => setTagFilter([]);
  }, [query]);

  return (
    <Styled.Wrapper>
      <MaxWidthWrapper>
        <Styled.ActiveFilters>
          {tagFilter.map((t, i) => (
            <Styled.Tag key={i}>
              {t}
              <FaWindowClose
                style={{ marginLeft: '0.5rem' }}
                onClick={() => setTagFilter((prev) => prev.filter((item) => item !== t))}
              />
            </Styled.Tag>
          ))}
        </Styled.ActiveFilters>
        <Styled.TagList>
          {tags.map((t: string, i: number) => (
            <Link
              key={i}
              passHref
              href={{
                pathname: '/posts',
                query: { tag: t },
              }}
            >
              <Styled.Tag>{t}</Styled.Tag>
            </Link>
          ))}
        </Styled.TagList>
        <Styled.BlogPosts>
          {tagFilter.length > 0
            ? posts
                .filter((item: any) =>
                  item.properties.Tags.multi_select
                    .map((t: { id: string; name: string }) => t.name)
                    .some((t) => tagFilter.includes(t))
                )
                .map(({ id, properties }: { id: string; properties: any }, i: number) => (
                  <BlogPostCard
                    key={i}
                    id={id}
                    date={properties.Date.date.start}
                    title={properties.Title.title[0].plain_text}
                    tags={properties.Tags.multi_select.map(
                      (t: { id: string; name: string }) => t.name
                    )}
                    description={properties.Description.rich_text[0].plain_text}
                  />
                ))
            : posts.map(({ id, properties }: { id: string; properties: any }, i: number) => (
                <BlogPostCard
                  key={i}
                  id={id}
                  date={properties.Date.date.start}
                  title={properties.Title.title[0].plain_text}
                  tags={properties.Tags.multi_select.map(
                    (t: { id: string; name: string }) => t.name
                  )}
                  description={properties.Description.rich_text[0].plain_text}
                />
              ))}
        </Styled.BlogPosts>
      </MaxWidthWrapper>
    </Styled.Wrapper>
  );
}

/* export async function getStaticProps() {
  const posts = getPosts();
  const postTags = getTags(posts);
  return {
    props: {
      posts,
      postTags,
    }, // will be passed to the page component as props
  };
} */

export async function getStaticProps() {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID || '');

  const tags = database
    .map((post) =>
      post.properties.Tags.multi_select.map((t: { id: string; name: string }) => t.name)
    )
    .flat();

  return {
    props: {
      posts: database,
      tags,
    },
    revalidate: 1,
  };
}
