import React from 'react';

import Link from 'next/link';

import MaxWidthWrapper from 'src/components/max-width-wrapper';

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
        <article className="mx-auto prose dark:prose-dark">
          <p className="text-gray-700 dark:text-gray-300">Latest Posts</p>
          <ul className="list-none" style={{ zIndex: -1 }}>
            {allPostsData.map(({ id, date, title }: any) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="text-gray-700 dark:text-gray-300">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </article>
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
