import Head from 'next/head';

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

        {/* OpenGraph */}
        <meta property="og:url" content="https://edintheclouds.io/" />
        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.description} />
        <meta
          property="og:image"
          content="https://edintheclouds.io/assets/images/edintheclouds-mascot-square.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="edintheclouds.io" />
        <meta property="twitter:url" content="https://edintheclouds.io/" />
      </Head>
    </>
  );
};

export default Meta;
