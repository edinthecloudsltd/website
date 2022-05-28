import React, { useContext } from 'react';

import BlogPostCard from 'src/components/blog-post-card';
import CloudParrallax from 'src/components/cloud-parrallax';
import Hero from 'src/components/hero';
import Meta from 'src/components/layout/meta';
import MaxWidthWrapper from 'src/components/max-width-wrapper/max-width-wrapper';
import { DisplayContext } from 'src/context/display';
import { getDatabase } from 'src/lib/notion';

import * as Styled from './index.styles';

interface IHomeProps {
  skills: { name: string; fileName: string }[];
  posts: any;
}

const Home: React.FC<IHomeProps> = ({ posts }) => {
  const { activeTheme, showNav } = useContext(DisplayContext);

  // handleNotchBackground figures out the bg color for the iPhone notch
  const handleNotchBackground = (theme: 'light' | 'dark' | undefined) => {
    let color;
    if (theme === 'light') {
      color = showNav ? 'white' : '#c7f1ff';
    }
    if (theme === 'dark') {
      color = showNav ? '#363537' : '#3b4c69';
    }
    return color;
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              background-color: ${handleNotchBackground(activeTheme)};
              transition: background-color 0.5s ease;
              transition-delay: var(--theme-transition-delay);
            }   `,
        }}
      />
      <Meta
        title="Ed in the Clouds"
        description="Cloud and Automation engineering blog. Brought to you from Manchester, UK"
        canonical={'https://edintheclouds.io'}
      />

      <Hero.Wrapper>
        <CloudParrallax />
        <Hero.Text>
          <Styled.Heading>Ed in the Clouds</Styled.Heading>
        </Hero.Text>
      </Hero.Wrapper>

      <Styled.SectionWrapper>
        <MaxWidthWrapper>
          <Styled.ContentCard>
            <Styled.StrongL style={{ color: 'var(--gray-blue)' }}>{`Hi, I'm Ed.`}</Styled.StrongL>
            <Styled.TextM>
              {`I'm a freelance contract Cloud Engineer based in Manchester, UK.`}
            </Styled.TextM>
            <Styled.StrongM>{`I'm in my happy place when I'm ...`}</Styled.StrongM>
            <Styled.ListHappyPlace>
              <li>⚙️ Scripting and automating stuff</li>
              <li>
                🧑‍💻 Improving developer experience by helping them to deliver software quicker,
                and more safely
              </li>
              <li>🏗 Building and engineering cloud infrastructure</li>
              <li>🎓 Learning!</li>
            </Styled.ListHappyPlace>
          </Styled.ContentCard>
        </MaxWidthWrapper>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <MaxWidthWrapper>
          <Styled.ContentCard>
            <Styled.StrongM>{`What can I do?`}</Styled.StrongM>
            <p style={{ fontSize: '1.25rem' }}>
              {`If you're interested in checking out my skillset, `}
              <a
                href="/assets/docs/EdwardSmithCV2022.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--blue)', fontWeight: 700 }}
              >
                please check out my CV
              </a>
              {` 📄`}
            </p>
          </Styled.ContentCard>
        </MaxWidthWrapper>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <MaxWidthWrapper>
          <Styled.SectionHeading>Latest Posts 📝</Styled.SectionHeading>
          <Styled.BlogPosts>
            {posts.map(
              (
                { id, properties }: { id: string; properties: any; created_time: string },
                i: number
              ) => (
                <BlogPostCard
                  key={i}
                  id={id}
                  date={properties.Date.date.start}
                  title={properties.Title.title[0].plain_text}
                  tags={properties.Tags.multi_select}
                  description={properties.Description.rich_text[0].plain_text}
                />
              )
            )}
          </Styled.BlogPosts>
        </MaxWidthWrapper>
      </Styled.SectionWrapper>
    </>
  );
};

export async function getStaticProps() {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID || '');

  // only show the 4 most recent posts
  const posts = database?.slice(0, 4);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default Home;
