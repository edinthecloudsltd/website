import { Client } from '@notionhq/client';
import Head from 'next/head';
import { NotionToMarkdown } from 'notion-to-md';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import ErrorPage from 'src/components/common/error';
import { HeartButton } from 'src/components/common/heart-button/heart-button';
import { Tag } from 'src/components/common/tag';
import { getDatabase, getPage, getBlocks } from 'src/lib/notion';

import MaxWidthWrapper from '../../components/common/max-width-wrapper';
import styles from './posts.module.css';

export default function Post({ page, markdown }: { page: any; markdown: any }) {
  if (!page) {
    return <ErrorPage />;
  }

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

      <HeartButton />

      <MaxWidthWrapper>
        <div className={styles.heading}>
          <h1 style={{ lineHeight: '3rem' }}>{page.properties.Title.title[0].plain_text}</h1>
          <h3>{page.properties.Description.rich_text[0].plain_text}</h3>
          <div className={styles.tags}>
            {page.properties.Tags.multi_select.map(
              (t: { id: string; name: string; color: string }, i: number) => (
                <Tag key={i} color={t.color}>
                  {t.name}
                </Tag>
              )
            )}
          </div>
          <p className={styles.date}>
            {' '}
            {new Date(page.properties.Date.date.start).toLocaleDateString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
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

  const publicPath = `/assets/images/posts/${
    // @ts-ignore ts(2532)
    page?.properties.Title.title[0].plain_text.replace(/ +/g, '-').toLowerCase()
  }`;

  blocks?.forEach((d: any) => {
    if (d.type === 'image' && d.image.caption.length > 0) {
      const caption = d.image?.caption[0].plain_text.toLowerCase();
      /* eslint-disable  no-param-reassign */
      d.image.file.url = `${publicPath}/${caption}.png` || '';
    }
  });

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
