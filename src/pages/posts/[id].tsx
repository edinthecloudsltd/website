import Head from 'next/head';

import * as Styled from 'src/components/posts/styles';

import MaxWidthWrapper from '../../components/common/max-width-wrapper';
import Date from '../../utils/date';
import { getAllPostIds, getPostData } from '../../utils/getPosts';

export default function Post({ postData }: { postData: any }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={`${postData.description} ${postData.tags}`} />
        <meta property="og:description" content={postData.description} key="ogdesc" />
      </Head>
      <MaxWidthWrapper>
        <article style={{ paddingTop: 'var(--navbar-height)' }}>
          <h1
            style={{
              fontFamily: 'coffee-service, sans-serif',
              fontWeight: 700,
              fontSize: '3rem',
            }}
          >
            {postData.title}
          </h1>
          <div style={{ fontSize: '1.25rem' }}>
            <Date dateString={postData.date} />
          </div>
          <hr style={{ margin: '1rem 0' }} />
          <Styled.PostContent dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </MaxWidthWrapper>
    </>
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
