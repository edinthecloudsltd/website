import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Select from 'react-select';

import BlogPostCard from 'src/components/common/blog-post-card';
import MaxWidthWrapper from 'src/components/common/max-width-wrapper';
import * as Styled from 'src/components/posts/styles';
import { getDatabase } from 'src/lib/notion';

export default function Posts({ posts, tags }: { posts: any; tags: any }) {
  const { query } = useRouter();
  const [selectedTags, setSelectedTags] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    Object.entries(query).forEach(([_, value]) => {
      if (Array.isArray(value)) {
        const tagsQuery = value.map((t) => decodeURIComponent(t));
        setSelectedTags((prev: any) => [...prev, ...tagsQuery]);
      } else {
        const tagQuery = decodeURIComponent(value!);
        setSelectedTags((prev: any) => [...prev, tagQuery]);
      }
    });
    return () => setSelectedTags([]);
  }, [query]);

  const handleSelect = (option) => {
    setSelectedTags(option);
  };

  console.log(selectedTags);

  return (
    <Styled.Wrapper>
      <MaxWidthWrapper>
        <Select
          isMulti
          name="tags"
          placeholder="Tags"
          value={selectedTags}
          options={tags}
          onChange={handleSelect}
        />
        <Styled.BlogPosts>
          {selectedTags.length > 0
            ? posts
                .filter((item: any) =>
                  item.properties.Tags.multi_select
                    // construct list of tag values
                    .map((t: { id: string; name: string }) => t.name)
                    // check to see if at least 1 of the tags is in the selectedTags array
                    .some((t: string) =>
                      selectedTags.map((s: { value: string; label: string }) => s.value).includes(t)
                    )
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

export async function getStaticProps() {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID || '');

  const tags = database
    ?.map((post) =>
      /* @ts-ignore ts(2339) */
      post.properties.Tags.multi_select.map((t: { id: string; name: string }) => ({
        value: t.name,
        label: t.name,
      }))
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
