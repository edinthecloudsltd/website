import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const name = "Ed in the Clouds";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section class="container mx-auto pb-10">
        <img src="/images/profile.png" className={`${utilStyles.homeLogo}`} />
        <h1 class="text-gray-800 dark:text-gray-400 text-center text-5xl font-extrabold p-2">
          {name}
        </h1>
      </section>

      <article class="prose dark:prose-dark mx-auto">
        <p class="leading-loose">Hi, I'm Ed.</p>

        <p class="leading-loose">
          Throughout my career, I have worked multiple roles across the IT
          industry. I have held support, administrative and consultant
          engineering roles across a variety of sectors.
        </p>

        <p class="leading-loose">
          Currently I am known as a Platform Engineer. For the most part I deal with cloud platforms and automation.
        </p>

        <p class="leading-loose">
          I am an Ops guy by trade, however these days I find myself doing more and more development
          work in my spare time.
        </p>

        <h2>Skills</h2>

        <h3>Platform</h3>
        <div class="dark:bg-gray-600">
          <div class="flex flex-row flex-grow justify-evenly">
          {platform.map((i) => (
            <img
              src={i.src}
              alt={i.alt}
              class="flex-shrink h-20 mx-2"
            />
          ))}
          </div>
        </div>

        <h3>Programming/Scripting Languages</h3>
        <div class="dark:bg-gray-600">
          <div class="flex flex-row flex-grow justify-evenly">
          {langs.map((i) => (
            <img
              src={i.src}
              alt={i.alt}
              class="flex-shrink h-20 mx-2"
            />
          ))}
          </div>
        </div>

        <h3>CI/CD</h3>
        <div class="dark:bg-gray-600">
          <div class="flex flex-row flex-grow justify-evenly">
          {cicd.map((i) => (
            <img
              src={i.src}
              alt={i.alt}
              class="flex-shrink h-20 mx-2"
            />
          ))}
          </div>
        </div>

        <h3>Frameworks</h3>
        <div class="dark:bg-gray-600">
          <div class="flex flex-row flex-grow justify-evenly">
          {frameworks.map((i) => (
            <img
              src={i.src}
              alt={i.alt}
              class="flex-shrink h-20 mx-2"
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
    alt: "Serverless",
    src: "/images/serverless.svg",
  },
  {
    alt: "Kubernetes",
    src: "/images/k8s.svg",
  },
]

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
]

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
]

const frameworks = [
  {
    alt: "Flask",
    src: "/images/flask.svg",
  },
  {
    alt: "React",
    src: "/images/react.svg",
  },
]