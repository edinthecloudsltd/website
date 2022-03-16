import console from 'console';

import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: string) => {
  try {
    const { results } = await notion.databases.query({
      database_id: databaseId,
    });
    return results;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const getPage = async (pageId: string) => {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const getBlocks = async (pageId: string) => {
  let cursor;
  let hasMore = true;
  const blocks = [];

  try {
    while (hasMore) {
      /* eslint-disable @typescript-eslint/naming-convention, no-await-in-loop */
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
