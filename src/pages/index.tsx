import React, { useContext } from 'react';

import BlogPostCard from 'src/components/common/blog-post-card';
import Hero, { HeroText } from 'src/components/common/hero';
import Meta from 'src/components/common/layout/meta';
import MaxWidthWrapper from 'src/components/common/max-width-wrapper';
import Styled from 'src/components/home';
import CloudParrallax from 'src/components/home/cloud-parrallax';
import { BlogPosts } from 'src/components/posts/styles';
import { DisplayContext } from 'src/context/display';
import { getDatabase } from 'src/lib/notion';

interface IHomeProps {
  skills: { name: string; fileName: string }[];
  posts: any;
}

const Home: React.FC<IHomeProps> = ({ posts }) => {
  const { activeTheme } = useContext(DisplayContext);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              background: ${activeTheme === 'light' ? '#c7f1ff' : '#363537'};
            }   `,
        }}
      />
      <Meta
        title="Ed in the Clouds"
        description="Cloud and Automation engineering blog. Brought to you from Manchester, UK"
        canonical={'https://edintheclouds.io'}
      />

      <Hero>
        <CloudParrallax />
        <HeroText>
          <Styled.Heading>Ed in the Clouds</Styled.Heading>
        </HeroText>
      </Hero>

      <Styled.SectionWrapper>
        <MaxWidthWrapper>
          <Styled.ContentCard className="space-y-6">
            <p
              style={{ fontFamily: 'coffee-service, sans-serif', letterSpacing: '-1px' }}
              className="text-3xl font-bold lg:text-5xl text-blue200"
            >{`Hi, I'm Ed.`}</p>

            <p className="text-2xl">{`I'm a freelance contract Cloud Engineer based in Manchester, UK.`}</p>

            <p
              style={{ fontFamily: 'coffee-service, sans-serif', letterSpacing: '-1px' }}
              className="text-3xl font-bold lg:text-4xl"
            >{`I'm in my happy place when I'm...`}</p>

            <ul
              className="space-y-2 text-xl list-disc list-outside"
              style={{ paddingLeft: '1rem' }}
            >
              <li>⚙️ Scripting and automating stuff</li>
              <li>
                🧑‍💻 Improving developer experience by helping them to deliver software quicker,
                and more safely
              </li>
              <li>🏗 Building and engineering cloud infrastructure</li>
              <li>🎓 Learning!</li>
            </ul>
          </Styled.ContentCard>
        </MaxWidthWrapper>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <MaxWidthWrapper>
          <Styled.ContentCard>
            <p
              style={{ fontFamily: 'coffee-service, sans-serif', letterSpacing: '-1px' }}
              className="text-3xl font-bold lg:text-4xl"
            >{`What can I do?`}</p>
            <p className="text-xl">
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
          <BlogPosts>
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
          </BlogPosts>
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
