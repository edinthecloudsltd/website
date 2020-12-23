import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/Layout";
import Link from "next/link";
import Date from "../components/Date";

const pageDescription =
  "Cloud and automation blog posts from Ed in the Clouds.";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Ed in the Clouds - Blog Posts</title>
        <meta name="description" content={pageDescription} />
        <meta
          property="og:description"
          content={pageDescription}
          key="ogdesc"
        />
      </Head>

      <article class="prose dark:prose-dark mx-auto">
        <h2 class="text-gray-600 dark:text-gray-400">Latest Posts</h2>
        <ul class="list-none" style={{ zIndex: "-1" }}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
