import React from 'react';

import Link from 'next/link';

import Date from 'src/utils/date';
import getPosts from 'src/utils/getPosts';
import getSkills from 'src/utils/getSkills';

import Hero, { HeroText } from '../components/common/hero';
import Layout from '../components/common/layout';
import Meta from '../components/common/layout/meta';
import MaxWidthWrapper from '../components/common/max-width-wrapper';
import Styled from '../components/home';
import CloudParrallax from '../components/home/cloud-parrallax';

interface IHomeProps {
  skills: { name: string; fileName: string }[];
  posts: any;
}

const Home: React.FC<IHomeProps> = ({ posts }) => {
  return (
    <Layout>
      <Meta
        title="Ed in the Clouds"
        description="Cloud and Automation engineering blog. Brought to you from Manchester, UK"
        canonical={'https://edintheclouds.io'}
      />

      <Hero>
        <CloudParrallax />
        <HeroText>
          <h1 style={{ fontSize: '5rem', fontWeight: 700, color: '#34344c', textAlign: 'center' }}>
            Ed in the Clouds
          </h1>
        </HeroText>
      </Hero>
      <MaxWidthWrapper>
        <main
          style={{
            padding: '5rem',
            marginTop: '5rem',
            color: 'rgba(126, 179, 227)',
            background: '#34344c',
            borderRadius: '50px',
            // boxShadow: '2px 2px 10px rgba(0, 0, 0, .5)',
          }}
        >
          <p className="my-4 text-2xl font-bold lg:text-4xl text-blue200">{`Hi, I'm Ed.`}</p>

          <p className="mb-12 text-2xl">{`I'm a freelance contract Cloud Engineer based in Manchester, UK.`}</p>
          <div id="animate" className="w-3/4 mx-auto" />

          <p className="text-3xl font-bold">{`I'm in my happy place when I'm...`}</p>

          <ul className="my-10 text-xl list-disc list-inside">
            <li className="my-4">Scripting and automating stuff</li>
            <li className="my-4">Coding and building apps and services</li>
            <li className="my-4">Working with containers (and container orchestration)</li>
            <li className="my-4">Building and engineering cloud infrastructure</li>
            <li className="my-4">Learning!</li>
          </ul>
        </main>
      </MaxWidthWrapper>
      {/*       <main
        style={{
          position: 'relative',
          background: 'rgba(126, 179, 227)',
          width: '100%',
          color: '#34344c',
        }}
      >
        <MaxWidthWrapper>
          <BubbleScroll items={skills} />
        </MaxWidthWrapper>
      </main> */}
      <MaxWidthWrapper>
        <Styled.BlogPostsWrapper>
          <h1 className="text-blue200">Latest Posts</h1>
          <Styled.BlogPostsInnerWrapper>
            {posts.map(({ id, date, title }: any) => (
              <Styled.BlogPostCard key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="text-blue200">
                  <Date dateString={date} />
                </small>
              </Styled.BlogPostCard>
            ))}
          </Styled.BlogPostsInnerWrapper>
        </Styled.BlogPostsWrapper>
      </MaxWidthWrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  const skills = getSkills();
  const posts = getPosts();
  return {
    props: {
      skills,
      posts,
    }, // will be passed to the page component as props
  };
}

export default Home;
