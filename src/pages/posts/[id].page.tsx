import { useContext } from 'react';

import { Client } from '@notionhq/client';
import Head from 'next/head';
// @ts-ignore: import directly from node_modules to avoid https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230
import { oneDark, oneLight } from 'node_modules/react-syntax-highlighter/dist/esm/styles/prism';
import { NotionToMarkdown } from 'notion-to-md';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';

import ErrorPage from 'src/components/error';
import HeartButton from 'src/components/heart-button';
import { Tag } from 'src/components/tag/tag';
import { DisplayContext } from 'src/context/display';
import { getDatabase, getPage, getBlocks } from 'src/lib/notion';

import MaxWidthWrapper from '../../components/max-width-wrapper/max-width-wrapper';
import styles from './posts.module.css';

export default function Post({ page, markdown }: { page: any; markdown: any }) {
  const { activeTheme } = useContext(DisplayContext);

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
          content={`${
            page.properties.Description.rich_text[0].plain_text
          } ${page.properties.Tags.multi_select.map((t: { id: string; name: string }) => t.name)}`}
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
        <ReactMarkdown
          className={styles.content}
          remarkPlugins={[gfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                // @ts-ignore: Overloads - dodgy TS support?
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={activeTheme === 'dark' ? oneDark : oneLight}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
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
