import { NextSeo } from 'next-seo';
import Head from 'next/head';

import config from 'src/config';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light only" />
        <link rel="apple-touch-icon" href={`/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`/favicon.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: config.LOCALE,
          site_name: config.SITE_NAME,
          images: [
            {
              url: config.OPENGRAPH_IMAGE_URL,
              width: 123,
              height: 128,
              alt: 'Og Image Alt',
            },
          ],
        }}
        twitter={{
          handle: config.TWITTER_HANDLE,
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export default Meta;
