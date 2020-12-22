import Head from "next/head";
import styled from "styled-components";
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
          <img src="/images/profile.jpg" className={`${utilStyles.homeLogo}`} />
          <h1 class="text-gray-800 dark:text-gray-500 text-center text-5xl font-extrabold p-2">{name}</h1>
        </section>

        <article class="mx-auto prose lg:prose-xl">
          <p class="text-gray-600 dark:text-gray-400 leading-loose">Hi, I'm Ed.</p>

          <p class="text-gray-600 dark:text-gray-400 leading-loose">
            I've been working in IT for what is rapidly approaching to be 10
            years. I have worked multiple roles including support, consultant
            and engineering across a variety of sectors. Currently I am known as
            a Platform Engineer (But what does that even mean these days?!)
          </p>

          <h2 class="text-gray-800 dark:text-gray-500">Skills</h2>
        </article>
      </Layout>
  );
}
