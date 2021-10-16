import React from 'react';

import BubbleScroll from 'src/components/bubble-scroll';
import CloudParrallax from 'src/components/cloud-parrallax';
import Hero, { HeroText } from 'src/components/hero';
import getSkills from 'src/utils/getSkills';

import Layout from '../components/layout';
import Meta from '../components/layout/meta';
import MaxWidthWrapper from '../components/max-width-wrapper';

interface IHomeProps {
  skills: { name: string; fileName: string }[];
}

const Home: React.FC<IHomeProps> = ({ skills }) => {
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

      <main
        style={{
          padding: '5rem 0',
          color: 'rgba(126, 179, 227)',
          boxShadow: '2px 2px 10px rgba(0, 0, 0, .5)',
        }}
      >
        <MaxWidthWrapper>
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
        </MaxWidthWrapper>
      </main>
      <main
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
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const skills = getSkills();
  return {
    props: {
      skills,
    }, // will be passed to the page component as props
  };
}

export default Home;
