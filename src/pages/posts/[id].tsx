import Head from 'next/head';

import MaxWidthWrapper from 'src/components/max-width-wrapper';

import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../utils/date';
import { getAllPostIds, getPostData } from '../../utils/getPosts';

export default function Post({ postData }: { postData: any }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={`${postData.description} ${postData.tags}`} />
        <meta property="og:description" content={postData.description} key="ogdesc" />
      </Head>
      <MaxWidthWrapper>
        <article className="mx-auto font-sans prose duration-200 dark:prose-dark">
          <h1 className="text-gray-800 dark:text-gray-200">{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div
            className="mx-auto max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </MaxWidthWrapper>
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

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}