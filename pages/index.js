import Head from "next/head";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const pageDescription =
  "Cloud and Automation engineering blog. Brought to you from Manchester, UK";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Ed in the Clouds</title>
        <meta name="description" content={pageDescription} />
        <meta
          property="og:description"
          content={pageDescription}
          key="ogdesc"
        />
      </Head>
      <section className="max-w-prose mx-auto pb-10 flex">
        <img
          src="/images/profile.png"
          className={`${utilStyles.homeLogo} mr-5 shadow-lg`}
        />
        <h1 className="text-red-300 text-6xl text-center font-extrabold align-middle mx-auto shadow-lg">
          Ed in the Clouds
        </h1>
      </section>

      <article className="prose dark:prose-dark text-gray-200 mx-auto">
        <p className="leading-loose font-bold text-1xl text-center">
          Hi, I'm Ed.
        </p>

        <p>I'm a Platform Engineer based in Manchester, UK.</p>

        <p className="leading-loose">
          I'm in my happy place when I'm...
          <ul>
            <li>Scripting and automating stuff</li>
            <li>Working with containers (and container orchestration!)</li>
            <li>Building and engineering cloud infrastructure</li>
            <li>...and most importantly, learning!</li>
          </ul>
        </p>

        <p className="leading-loose">
          Throughout my career, I have held multiple roles across the IT
          industry including support, administration, engineering and
          consulting. I have worked with a variety of organisations across both
          public and private sectors.
        </p>

        <p className="leading-loose">
          I’m an operations/infrastructure guy by trade, but I also spend a lot
          of time these days doing more development work.
        </p>

        <div className="headingLg">
          <h2 className="mb-2">Skills</h2>
        </div>

        <h3 className="mt-2">Platform</h3>
        <div className="bg-gray-700 dark:bg-gray-600 object-cover">
          <div className="flex flex-row flex-wrap justify-center">
            {platform.map((img, id) => (
              <img
                key={id}
                key={id}
                src={img.src}
                alt={img.alt}
                className="flex-shrink w-16 h-16 mx-2"
              />
            ))}
          </div>
        </div>

        <h3>Programming/Scripting Languages</h3>
        <div className="bg-gray-700 dark:bg-gray-600">
          <div className="flex flex-row flex-wrap justify-center">
            {langs.map((img, id) => (
              <img
                key={id}
                src={img.src}
                alt={img.alt}
                className="flex-shrink w-16 h-16 mx-2"
              />
            ))}
          </div>
        </div>

        <h3>CI/CD</h3>
        <div className="bg-gray-700 dark:bg-gray-600">
          <div className="flex flex-row flex-wrap justify-center">
            {cicd.map((img, id) => (
              <img
                key={id}
                src={img.src}
                alt={img.alt}
                className="flex-shrink w-16 h-16 mx-2"
              />
            ))}
          </div>
        </div>

        <h3>Frameworks</h3>
        <div className="bg-gray-700 dark:bg-gray-600">
          <div className="flex flex-row flex-wrap justify-center">
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
      </article>
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

const cicd = [
  {
    alt: "Jenkins",
    src: "/images/jenkins.svg",
  },
  {
    alt: "Gitlab",
    src: "/images/gitlab.svg",
  },
  {
    alt: "Github",
    src: "/images/github.svg",
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
