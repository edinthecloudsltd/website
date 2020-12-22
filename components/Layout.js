import Head from "next/head";
import Navbar from "./Navbar";

export const siteTitle = "Ed in the Clouds";

export default function Layout({ children, home }) {
  return (
      <body class="bg-white dark:bg-gray-800">
        <Head>
          {/*         <link rel="icon" href="/favicon.ico" /> */}
          <meta
            name="Ed in the Clouds consulting"
            content="Ed in the Clouds blog site"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header>{home ? <Navbar home /> : <Navbar />}</header>

        <div class="container p-5 max-w-5xl mx-auto">{children}</div>
      </body>
  );
}
