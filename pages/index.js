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
      <section className="mx-auto pb-10">
        <img src="/images/profile.png" className={`${utilStyles.homeLogo}`} />
        <h1 className="text-gray-800 dark:text-gray-400 text-center text-5xl font-extrabold p-2">
          Ed in the Clouds
        </h1>
      </section>

      <article className="prose dark:prose-dark mx-auto">
        <p className="leading-loose">Hi, I'm Ed.</p>

        <p className="leading-loose">
          I’m a Platform Engineer, which can mean a number of things these
          days! Specifically, I deal with cloud infrastructure, containers
          & orchestration, operations and automation.
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

        <h2>Skills</h2>

        <h3>Platform</h3>
        <div className="dark:bg-gray-600 object-cover">
          <div className="flex flex-row flex-wrap justify-center">
            {platform.map((img, id) => (
              <img key={id} key={id} src={img.src} alt={img.alt} className="flex-shrink w-16 h-16 mx-2" />
            ))}
          </div>
        </div>

        <h3>Programming/Scripting Languages</h3>
        <div className="dark:bg-gray-600">
          <div className="flex flex-row flex-wrap justify-center">
            {langs.map((img, id) => (
              <img key={id} src={img.src} alt={img.alt} className="flex-shrink w-16 h-16 mx-2" />
            ))}
          </div>
        </div>

        <h3>CI/CD</h3>
        <div className="dark:bg-gray-600">
          <div className="flex flex-row flex-wrap justify-center">
            {cicd.map((img, id) => (
              <img key={id} src={img.src} alt={img.alt} className="flex-shrink w-16 h-16 mx-2" />
            ))}
          </div>
        </div>

        <h3>Frameworks</h3>
        <div className="dark:bg-gray-600">
          <div className="flex flex-row flex-wrap justify-center">
            {frameworks.map((img, id) => (
              <img key={id} src={img.src} alt={img.alt} className="flex-shrink w-16 h-16 mx-2" />
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
