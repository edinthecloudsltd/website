import React from 'react';

import { useMediaQuery } from 'react-responsive';

import BlogPostCard from 'src/components/common/blog-post-card';
import Hero, { HeroText } from 'src/components/common/hero';
import Meta from 'src/components/common/layout/meta';
import MaxWidthWrapper from 'src/components/common/max-width-wrapper';
import Styled from 'src/components/home';
import CloudParrallax from 'src/components/home/cloud-parrallax';
import { BlogPosts } from 'src/components/posts/styles';
import { getDatabase } from 'src/lib/notion';

interface IHomeProps {
  skills: { name: string; fileName: string }[];
  posts: any;
}

const Home: React.FC<IHomeProps> = ({ posts }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 568px)' });

  console.log(posts);
  return (
    <>
      <Meta
        title="Ed in the Clouds"
        description="Cloud and Automation engineering blog. Brought to you from Manchester, UK"
        canonical={'https://edintheclouds.io'}
      />

      <Hero>
        <CloudParrallax />
        <HeroText>
          <h1
            style={{
              fontFamily: 'coffee-service, sans-serif',
              fontSize: isMobile ? '4rem' : '6rem',
              fontWeight: 700,
              letterSpacing: '0.5rem',
              color: '#34344c',
              textAlign: 'center',
            }}
          >
            Ed in the Clouds
          </h1>
        </HeroText>
      </Hero>

      <Styled.SectionWrapper style={{ background: '#ffffff' }}>
        <MaxWidthWrapper>
          <Styled.ContentCard style={{ background: '#c7f1ff' }} className="space-y-6">
            <p
              style={{ fontFamily: 'coffee-service, sans-serif' }}
              className="text-2xl font-bold lg:text-5xl text-blue200"
            >{`Hi, I'm Ed.`}</p>

            <p className="text-2xl">{`I'm a freelance contract Cloud Engineer based in Manchester, UK.`}</p>

            <p
              style={{ fontFamily: 'coffee-service, sans-serif' }}
              className="text-2xl font-bold lg:text-4xl"
            >{`I'm in my happy place when I'm...`}</p>

            <ul className="space-y-2 text-xl list-disc list-inside">
              <li>Scripting and automating stuff</li>
              <li>Building and engineering cloud infrastructure</li>
              <li>Helping developers deliver faster and safely</li>
              <li>Coding and building apps and services</li>
              <li>Learning!</li>
            </ul>
          </Styled.ContentCard>
        </MaxWidthWrapper>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper style={{ background: '#ffffff' }}>
        <MaxWidthWrapper>
          <Styled.ContentCard style={{ background: '#c7f1ff' }}>
            <p
              style={{ fontFamily: 'coffee-service, sans-serif' }}
              className="text-2xl font-bold lg:text-5xl text-blue200"
            >{`What can I do?`}</p>
            <p className="text-xl">
              {`If you're interested in checking out my skillset, feel free to view my CV `}
              <a
                href="/assets/docs/cv.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'blue', fontWeight: 700 }}
              >
                here
              </a>
            </p>
          </Styled.ContentCard>
        </MaxWidthWrapper>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper style={{ background: '#ffffff' }}>
        <MaxWidthWrapper>
          <h1
            style={{
              fontFamily: 'coffee-service, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 500,
              letterSpacing: '0.25rem',
              color: '#34344c',
              marginBottom: '1rem',
            }}
          >
            Latest Posts
          </h1>
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
                  tags={properties.Tags.multi_select.map(
                    (t: { id: string; name: string }) => t.name
                  )}
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
