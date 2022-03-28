import { ReactElement, SVGProps } from 'react';

declare module '*.svg' {
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
export interface Page {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: EditedBy;
  last_edited_by: EditedBy;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface Properties {
  Tags: Tags;
  Author: Author;
  Description: Description;
  Date: DateClass;
  Published: Published;
  Updated: DateClass;
  Title: Title;
}

export interface Author {
  id: string;
  type: string;
  people: People[];
}

export interface People {
  object: string;
  id: string;
  name: string;
  avatar_url: null;
  type: string;
  person: Person;
}

export interface Person {
  email: string;
}

export interface DateClass {
  id: string;
  type: string;
  date: DateDate | null;
}

export interface Date {
  start: string;
  end: null;
  time_zone: null;
}

export interface Description {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Published {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Title {
  id: string;
  type: string;
  title: RichText[];
}

export type Block =
  | {
      type: 'paragraph';
      paragraph: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'heading_1';
      heading_1: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'heading_2';
      heading_2: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'heading_3';
      heading_3: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'bulleted_list_item';
      bulleted_list_item: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
      };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'numbered_list_item';
      numbered_list_item: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
      };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'quote';
      quote: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'to_do';
      to_do: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        checked: boolean;
      };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'toggle';
      toggle: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'template';
      template: { rich_text: Array<RichTextItemResponse> };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'synced_block';
      synced_block: {
        synced_from: { type: 'block_id'; block_id: IdRequest } | null;
      };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'child_page';
      child_page: { title: string };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'child_database';
      child_database: { title: string };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'equation';
      equation: { expression: string };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'code';
      code: {
        rich_text: Array<RichTextItemResponse>;
        caption: Array<RichTextItemResponse>;
        language: LanguageRequest;
      };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'callout';
      callout: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        icon:
          | { type: 'emoji'; emoji: EmojiRequest }
          | null
          | { type: 'external'; external: { url: TextRequest } }
          | null
          | { type: 'file'; file: { url: string; expiry_time: string } }
          | null;
      };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'divider';
      divider: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'breadcrumb';
      breadcrumb: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'table_of_contents';
      table_of_contents: { color: ApiColor };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'column_list';
      column_list: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'column';
      column: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'link_to_page';
      link_to_page:
        | { type: 'page_id'; page_id: IdRequest }
        | { type: 'database_id'; database_id: IdRequest };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'table';
      table: {
        has_column_header: boolean;
        has_row_header: boolean;
        table_width: number;
      };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'table_row';
      table_row: { cells: Array<Array<RichTextItemResponse>> };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'embed';
      embed: { url: string; caption: Array<RichTextItemResponse> };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'bookmark';
      bookmark: { url: string; caption: Array<RichTextItemResponse> };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'image';
      image:
        | {
            type: 'external';
            external: { url: TextRequest };
            caption: Array<RichTextItemResponse>;
          }
        | {
            type: 'file';
            file: { url: string; expiry_time: string };
            caption: Array<RichTextItemResponse>;
          };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'video';
      video:
        | {
            type: 'external';
            external: { url: TextRequest };
            caption: Array<RichTextItemResponse>;
          }
        | {
            type: 'file';
            file: { url: string; expiry_time: string };
            caption: Array<RichTextItemResponse>;
          };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'pdf';
      pdf:
        | {
            type: 'external';
            external: { url: TextRequest };
            caption: Array<RichTextItemResponse>;
          }
        | {
            type: 'file';
            file: { url: string; expiry_time: string };
            caption: Array<RichTextItemResponse>;
          };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'file';
      file:
        | {
            type: 'external';
            external: { url: TextRequest };
            caption: Array<RichTextItemResponse>;
          }
        | {
            type: 'file';
            file: { url: string; expiry_time: string };
            caption: Array<RichTextItemResponse>;
          };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'audio';
      audio:
        | {
            type: 'external';
            external: { url: TextRequest };
            caption: Array<RichTextItemResponse>;
          }
        | {
            type: 'file';
            file: { url: string; expiry_time: string };
            caption: Array<RichTextItemResponse>;
          };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'link_preview';
      link_preview: { url: TextRequest };
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'unsupported';
      unsupported: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      created_by: { id: IdRequest; object: 'user' };
      last_edited_time: string;
      last_edited_by: { id: IdRequest; object: 'user' };
      has_children: boolean;
      archived: boolean;
    };
