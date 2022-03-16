declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

export interface PostProperties {
  id: string;
  Title: string;
  Tags: string[];
  Author: string;
  Date: any;
  Description: string;
  Published: boolean;
  Updated: string;
}
