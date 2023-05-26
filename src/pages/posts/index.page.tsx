import { useState } from 'react';

import Select from 'react-select';

import BlogPostCard from 'src/components/blog-post-card';
import Meta from 'src/components/layout/meta';
import MaxWidthWrapper from 'src/components/max-width-wrapper';
import { tagSelectColourStyles } from 'src/components/tag/tag';
import { getPostsDatabase } from 'src/lib/notion';

import * as Styled from './posts.styles';

export default function Posts({ posts, tags }: { posts: any; tags: any }) {
  const [selectedTags, setSelectedTags] = useState<{ value: string; label: string }[]>([]);

  const handleSelect = (option: any) => {
    setSelectedTags(option);
  };

  return (
    <>
      <Meta
        title="Posts - Ed in the Clouds"
        description="Cloud, Code, DevOps and other posts from Ed in the Clouds"
        canonical={'https://edintheclouds.io/posts'}
      />

      <Styled.Wrapper>
        <MaxWidthWrapper>
          <div style={{ marginBottom: '2rem' }}>
            <Select
              isMulti
              name="tags"
              placeholder="Tags"
              value={selectedTags}
              options={tags.map((t: { id: string; name: string; color: string }) => ({
                value: t.name,
                label: t.name,
                color: t.color,
              }))}
              onChange={handleSelect}
              // @ts-ignore: weird type compatibility thing
              styles={tagSelectColourStyles}
            />
          </div>
          <Styled.BlogPosts>
            {selectedTags.length > 0
              ? posts
                  .filter((item: any) =>
                    item.properties.Tags.multi_select
                      // construct list of tag values
                      .map((t: { id: string; name: string }) => t.name)
                      // check to see if at least 1 of the tags is in the selectedTags array
                      .some((t: string) =>
                        selectedTags
                          .map((s: { value: string; label: string }) => s.value)
                          .includes(t)
                      )
                  )
                  .map(({ id, properties }: { id: string; properties: any }, i: number) => (
                    <BlogPostCard
                      key={i}
                      id={id}
                      date={properties.Date.date.start}
                      title={properties.Title.title[0].plain_text}
                      tags={properties.Tags.multi_select}
                      description={properties.Description.rich_text[0].plain_text}
                    />
                  ))
              : posts.map(({ id, properties }: { id: string; properties: any }, i: number) => (
                  <BlogPostCard
                    key={i}
                    id={id}
                    date={properties.Date.date.start}
                    title={properties.Title.title[0].plain_text}
                    tags={properties.Tags.multi_select}
                    description={properties.Description.rich_text[0].plain_text}
                  />
                ))}
          </Styled.BlogPosts>
        </MaxWidthWrapper>
      </Styled.Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const database = await getPostsDatabase(process.env.NOTION_DATABASE_ID || '');

  const tags = database
    ?.map(
      (post) =>
        /* @ts-ignore ts(2339) */
        post.properties.Tags.multi_select
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
