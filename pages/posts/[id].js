import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={`${postData.description} ${postData.tags}`} />
        <meta
          property="og:description"
          content={postData.description}
          key="ogdesc"
        />
      </Head>
      <article className="prose dark:prose-dark mx-auto duration-200">
        <h1 className="text-gray-800 dark:text-gray-200">{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className="mx-auto max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
