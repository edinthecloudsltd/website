import React from 'react';

import Link from 'next/link';

import MaxWidthWrapper from 'src/components/common/max-width-wrapper';

import Layout from '../components/layout';
import Meta from '../components/layout/meta';
import utilStyles from '../styles/utils.module.css';
import Date from '../utils/date';
import { getSortedPostsData } from '../utils/getPosts';

export default function Blog({ allPostsData }: { allPostsData: any }) {
  return (
    <Layout>
      <Meta
        title="Ed in the Clouds"
        description="Cloud and automation blog posts from Ed in the Clouds."
        canonical={'https://edintheclouds.io'}
      />

      <MaxWidthWrapper>
        <main className="py-20 mx-auto prose text-blue-200">
          <p className="text-blue200">Latest Posts</p>
          <ul className="list-none" style={{ zIndex: -1 }}>
            {allPostsData.map(({ id, date, title }: any) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="text-blue200">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </main>
      </MaxWidthWrapper>
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
