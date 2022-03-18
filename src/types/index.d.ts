declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

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
