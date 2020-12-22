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
      <section class="container pb-10">
        <img src="/images/profile.png" className={`${utilStyles.homeLogo}`} />
        <h1 class="text-gray-800 dark:text-gray-400 text-center text-5xl font-extrabold p-2">
          {name}
        </h1>
      </section>

      <article class="prose dark:prose-dark mx-auto">
        <p class="leading-loose">Hi, I'm Ed.</p>

        <p class="leading-loose">
          I've been working in IT for what is rapidly approaching to be 10
          years. I have worked multiple roles including support, consultant and
          engineering across a variety of sectors. Currently I am known as a
          Platform Engineer (But what does that even mean these days?)
        </p>
        <h2>Skills</h2>
        <div class="flex flex-wrap justify-evenly shadow-lg dark:bg-gray-600">
          {skills.map((skill) => (
            <img src={skill.src} alt={skill.alt} class="flex-shrink h-20 mx-2" />
          ))}
        </div>
      </article>
    </Layout>
  );
}

const skills = [
  {
    alt: "Amazon Web Services",
    src: "/images/aws.svg",
  },
  {
    alt: "Azure",
    src: "/images/azure.svg",
  },
  {
    alt: "Docker",
    src: "/images/docker.svg",
  },
  {
    alt: "ELK",
    src: "/images/elk.svg",
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
    alt: "Kubernetes",
    src: "/images/k8s.svg",
  },
  {
    alt: "Linux",
    src: "/images/tux.svg",
  },
  {
    alt: "Python",
    src: "/images/python.svg",
  },
  {
    alt: "React",
    src: "/images/react.svg",
  },
  {
    alt: "Terraform",
    src: "/images/terraform.svg",
  },
  {
    alt: "Windows",
    src: "/images/windows.svg",
  },
];
