import React from 'react';

// import Particles from 'react-particles-js';

import CloudParrallax from 'src/components/cloud-parrallax';
import Hero, { HeroText } from 'src/components/hero';

import Layout from '../components/layout';
import Meta from '../components/layout/meta';
import MaxWidthWrapper from '../components/max-width-wrapper';
import * as Styled from '../styles/home';

const platform = [
  {
    alt: 'Amazon Web Services',
    src: 'assets/svg/aws.svg',
  },
  {
    alt: 'Azure',
    src: 'assets/svg/azure.svg',
  },
  {
    alt: 'Kubernetes',
    src: 'assets/svg/k8s.svg',
  },
];

const langs = [
  {
    alt: 'Bash',
    src: 'assets/svg/bash.svg',
  },
  {
    alt: 'Python',
    src: 'assets/svg/python.svg',
  },
  {
    alt: 'Go',
    src: 'assets/svg/go.svg',
  },
  {
    alt: 'Javascript',
    src: 'assets/svg/javascript.svg',
  },
  {
    alt: 'Terraform',
    src: 'assets/svg/terraform.svg',
  },
];

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

const frameworks = [
  {
    alt: 'Flask',
    src: 'assets/svg/flask.svg',
  },
  {
    alt: 'React',
    src: 'assets/svg/react.svg',
  },
];

export default function Home() {
  // useEffect(() => {
  //   const animate = lottie.loadAnimation({
  //     container: document.querySelector('#cloud-brain'),
  //     animationData: CloudEngineerAnimation,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //   });
  //   animate.setSpeed(1);
  // }, []);

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
        {/*           <Particles
          style={{ position: 'absolute', left: 0, width: '100vw' }}
          params={{
            fpsLimit: 60,
            particles: {
              color: {
                value: '#FFFFFF',
              },
              shape: {
                type: 'image',
                image: {
                  src: 'assets/svg/cloud.svg',
                },
              },
              opacity: {
                value: 1,
              },
              size: {
                random: true,
                value: 15,
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 4,
                direction: 'top',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
              },
            },
            detectRetina: true,
          }}
        /> */}
      </Hero>

      <MaxWidthWrapper>
        <Styled.HomeContentWrapper>
          <p className="my-4 text-2xl font-bold lg:text-3xl text-blue200">{`Hi, I'm Ed.`}</p>
          <Styled.HomeContentCard>
            <p className="my-4 text-2xl font-bold lg:text-3xl">{`Hi, I'm Ed.`}</p>

            <p className="mb-12">{`I'm a Platform Engineer based in Manchester, UK.`}</p>
            <div id="animate" className="w-3/4 mx-auto" />

            <p className="text-2xl font-bold">{`I'm in my happy place when I'm...`}</p>

            <ul className="my-10 list-disc list-inside">
              <li className="my-4">Scripting and automating stuff</li>
              <li className="my-4">Working with containers (and container orchestration)</li>
              <li className="my-4">Building and engineering cloud infrastructure</li>
              <li className="my-4">Learning!</li>
            </ul>

            <h2 className="text-2xl font-bold">What I work with...</h2>

            <div className="my-6">
              <h3 className="">Platform</h3>
              <div className="object-cover bg-gray-200 dark:bg-gray-500">
                <div className="flex flex-row flex-wrap justify-center p-4">
                  {platform.map((img, id) => (
                    <img
                      key={id}
                      src={img.src}
                      alt={img.alt}
                      className="flex-shrink w-16 h-16 m-2"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="my-6">
              <h3>Programming/Scripting Languages</h3>
              <div className="bg-gray-200 dark:bg-gray-500">
                <div className="flex flex-row flex-wrap justify-center p-4">
                  {langs.map((img, id) => (
                    <img
                      key={id}
                      src={img.src}
                      alt={img.alt}
                      className="flex-shrink w-16 h-16 m-2"
                    />
                  ))}
                </div>
              </div>
            </div>

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

            <div className="my-6">
              <h3>Frameworks</h3>
              <div className="bg-gray-200 dark:bg-gray-500">
                <div className="flex flex-row flex-wrap justify-center p-4">
                  {frameworks.map((img, id) => (
                    <img
                      key={id}
                      src={img.src}
                      alt={img.alt}
                      className="flex-shrink w-16 h-16 mx-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Styled.HomeContentCard>
        </Styled.HomeContentWrapper>
      </MaxWidthWrapper>
    </Layout>
  );
}
