import React from 'react';

import BubbleScroll from 'src/components/bubble-scroll';
import CloudParrallax from 'src/components/cloud-parrallax';
import Hero, { HeroText } from 'src/components/hero';
import getSkills from 'src/utils/getSkills';

import Layout from '../components/layout';
import Meta from '../components/layout/meta';
import MaxWidthWrapper from '../components/max-width-wrapper';

const certs = [
  {
    alt: 'SA',
    src: 'https://images.youracclaim.com/size/680x680/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png',
  },
  {
    alt: 'Dev',
    src: 'https://images.youracclaim.com/size/680x680/images/598f6ac6-2dbd-4394-8ae4-943b2f4c43ea/AWS-Developer-Associate-2020.png',
  },
  {
    alt: 'DevOpsPro',
    src: 'https://images.youracclaim.com/size/680x680/images/7fbb805d-ea82-4276-a227-e63121a2844b/AWS-DevOpsEngineer-Professional-2020.png',
  },
];

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
          <p className="my-4 text-2xl font-bold lg:text-3xl text-blue200">{`Hi, I'm Ed.`}</p>

          <p className="mb-12">{`I'm a Platform Engineer based in Manchester, UK.`}</p>
          <div id="animate" className="w-3/4 mx-auto" />

          <p className="text-2xl font-bold">{`I'm in my happy place when I'm...`}</p>

          <ul className="my-10 list-disc list-inside">
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
          padding: '5rem 0',
        }}
      >
        <MaxWidthWrapper>
          <h2 className="text-2xl font-bold">What I work with...</h2>
          <BubbleScroll items={skills} />

          <div className="my-6">
            <h3>Certifications</h3>
            <div className="bg-gray-200 dark:bg-gray-500">
              <div className="flex flex-row flex-wrap justify-center p-4">
                {certs.map((img, id) => (
                  <img key={id} src={img.src} alt={img.alt} className="w-24 h-24 m-2" />
                ))}
              </div>
            </div>
          </div>
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
