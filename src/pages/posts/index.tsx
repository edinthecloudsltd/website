import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaWindowClose } from 'react-icons/fa';

import BlogPostCard from 'src/components/common/blog-post-card';
import MaxWidthWrapper from 'src/components/common/max-width-wrapper';
import * as Styled from 'src/components/posts/styles';
import { Post } from 'src/types';
import getPosts from 'src/utils/getPosts';
import getTags from 'src/utils/getTags';

export default function Posts({ posts, postTags }: { posts: Post[]; postTags: string[] }) {
  const { query } = useRouter();
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  useEffect(() => {
    Object.entries(query).forEach(([_, value]) => {
      if (Array.isArray(value)) {
        const tags = value.map((t) => decodeURIComponent(t));
        setTagFilter((prev: any) => [...prev, ...tags]);
      } else {
        const tag = decodeURIComponent(value!);
        setTagFilter((prev: any) => [...prev, tag]);
      }
    });
    return () => setTagFilter([]);
  }, [query]);

  console.log(tagFilter);

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
          {postTags.map((t, i) => (
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
                .filter((item) => item.tags.some((t) => tagFilter.includes(t)))
                .map(({ id, date, title, tags, description }: any, i: number) => (
                  <BlogPostCard
                    key={i}
                    id={id}
                    date={date}
                    title={title}
                    tags={tags}
                    description={description}
                  />
                ))
            : posts.map(({ id, date, title, tags, description }: any, i: number) => (
                <BlogPostCard
                  key={i}
                  id={id}
                  date={date}
                  title={title}
                  tags={tags}
                  description={description}
                />
              ))}
        </Styled.BlogPosts>
      </MaxWidthWrapper>
    </Styled.Wrapper>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  const postTags = getTags(posts);
  return {
    props: {
      posts,
      postTags,
    }, // will be passed to the page component as props
  };
}
