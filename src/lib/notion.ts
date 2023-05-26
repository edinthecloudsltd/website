import { Client } from '@notionhq/client';
import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

import { Page } from 'src/types';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getNotionDatabase = async (databaseId: string) => {
  try {
    const { results } = await notion.databases.query({
      database_id: databaseId,
    });
    return results;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getPostsDatabase = async (databaseId: string) => {
  try {
    const { results } = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });
    return (
      results
        /* @ts-ignore ts(2339) */
        .filter((entry) => entry.properties.Published.checkbox === true)
    );
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getPage = async (pageId: string) => {
  try {
    const response: GetPageResponse = await notion.pages.retrieve({ page_id: pageId });
    /* @ts-ignore ts(2339) */
    if (!response.properties.Published.checkbox) {
      return undefined;
    }
    return response as Page;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

export const getBlocks = async (pageId: string) => {
  let cursor;
  let hasMore = true;
  const blocks = [];

  try {
    while (hasMore) {
      const { results, next_cursor, has_more } = await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: pageId,
      });
      blocks.push(...results);
      cursor = next_cursor;
      hasMore = has_more;

      return results;
    }
  } catch (err) {
    console.error(err);
  }
  return undefined;
};
