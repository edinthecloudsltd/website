import { Client } from '@notionhq/client';
import Head from 'next/head';
import { NotionToMarkdown } from 'notion-to-md';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { getDatabase, getPage, getBlocks } from 'src/lib/notion';

import MaxWidthWrapper from '../../components/common/max-width-wrapper';
import styles from './posts.module.css';

export default function Post({ page, markdown }: { page: any; markdown: any }) {
  return (
    <>
      <Head>
        <title>{page.properties.Title.title[0].plain_text}</title>
        <meta
          name="description"
          content={`${
            page.properties.Description.rich_text[0].plain_text
          } ${page.properties.Tags.multi_select.map((t: { id: string; name: string }) => t.name)}`}
        />
        <meta
          property="og:description"
          content={page.properties.Description.rich_text[0].plain_text}
          key="ogdesc"
        />
      </Head>
      <p>{new Date(page.created_time).toLocaleDateString()}</p>
      <MaxWidthWrapper>
        {/* eslint-disable  react/no-children-prop */}
        <ReactMarkdown className={styles.content} remarkPlugins={[gfm]}>
          {markdown}
        </ReactMarkdown>
      </MaxWidthWrapper>
    </>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID || '');
  return {
    paths: database?.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  const notion = new Client({});
  const n2m = new NotionToMarkdown({
    notionClient: notion,
  });

  const markdown = await n2m.blocksToMarkdown(blocks);

  return {
    props: {
      page,
      markdown: markdown.map((m) => m.parent).join('\r\n'),
    },
    revalidate: 1,
  };
};
