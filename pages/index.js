import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
//import Bubble from '../components/Bubble';

export default function Home() {
  return (
    <Layout home>
      <NextSeo
        title="Ed in the Clouds"
        description="Cloud and Automation engineering blog. Brought to you from Manchester, UK"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://edintheclouds.io",
          title: "Ed in the Clouds",
          description:
            "Cloud and Automation engineering blog. Brought to you from Manchester, UK",
          images: [
            {
              url: "https://edintheclouds.io/images/profile.png",
              width: 123,
              height: 128,
              alt: "Og Image Alt",
            },
          ],
          site_name: "edintheclouds",
        }}
        twitter={{
          handle: "@ed1ntheclouds",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="mx-auto flex justify-center m-12">
        <img
          src="/images/profile.png"
          className="rounded-full w-36 mr-8 shadow-lg dark:shadow-none"
        />
        <h1 className="font-sans font-black text-gray-700 dark:text-red-300 text-4xl lg:text-6xl my-auto">
          Ed in the Clouds
        </h1>
      </div>

      <div className="font-sans leading-9 text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4 lg:px-16 lg:py-12">
        <p className="font-bold text-2xl lg:text-3xl my-4">Hi, I'm Ed.</p>

        <p className="mb-12">
          I'm a Platform Engineer based in Manchester, UK.
        </p>

        <p className="font-bold text-2xl">I'm in my happy place when I'm...</p>

        <ul className="list-disc list-inside my-10">
          <li className="my-4">Scripting and automating stuff</li>
          <li className="my-4">
            Working with containers (and container orchestration)
          </li>
          <li className="my-4">
            Building and engineering cloud infrastructure
          </li>
          <li className="my-4">Learning!</li>
        </ul>

        <h2 className="text-2xl font-bold">What I work with...</h2>

        <div className="my-6">
          <h3 className="">Platform</h3>
          <div className="bg-gray-200 dark:bg-gray-500 object-cover">
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
                <img
                  key={id}
                  src={img.src}
                  alt={img.alt}
                  className="w-24 h-24 m-2"
                />
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
      </div>
    </Layout>
  );
}

const platform = [
  {
    alt: "Amazon Web Services",
    src: "/images/aws.svg",
  },
  {
    alt: "Azure",
    src: "/images/azure.svg",
  },
  {
    alt: "Kubernetes",
    src: "/images/k8s.svg",
  },
];

const langs = [
  {
    alt: "Bash",
    src: "/images/bash.svg",
  },
  {
    alt: "Python",
    src: "/images/python.svg",
  },
  {
    alt: "Go",
    src: "/images/go.svg",
  },
  {
    alt: "Javascript",
    src: "/images/javascript.svg",
  },
  {
    alt: "Terraform",
    src: "/images/terraform.svg",
  },
];

const certs = [
  {
    alt: "SA",
    src:
      "https://images.youracclaim.com/size/680x680/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png",
  },
  {
    alt: "Dev",
    src:
      "https://images.youracclaim.com/size/680x680/images/598f6ac6-2dbd-4394-8ae4-943b2f4c43ea/AWS-Developer-Associate-2020.png",
  },
  {
    alt: "DevOpsPro",
    src:
      "https://images.youracclaim.com/size/680x680/images/7fbb805d-ea82-4276-a227-e63121a2844b/AWS-DevOpsEngineer-Professional-2020.png",
  },
];

const frameworks = [
  {
    alt: "Flask",
    src: "/images/flask.svg",
  },
  {
    alt: "React",
    src: "/images/react.svg",
  },
];
