import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <article class="prose dark:prose-dark mx-auto p-12">
        <h2>Email</h2>
        <p>
          If you want to get in touch you are best off emailing me. You can
          contact me via email at ed@edintheclouds.io
        </p>
        <h2>Twitter</h2>
        <p>
          I do have twitter, but I am not an active user on it (Trying to reduce
          my social media footprint!). My handle is{" "}
          <a href="https://twitter.com/ed1nthecloud">@ed1nthecloud</a>
        </p>
        <h2>LinkedIn</h2>
        <p>
          Similar to twitter I do not use LinkedIn a great deal, however I check
          it more regularly than twitter! My profile can be found{" "}
          <a href="https://www.linkedin.com/in/edwardsmith92/">here</a>
        </p>
      </article>
    </Layout>
  );
}
