import Head from "next/head";
import Navbar from "./Navbar";

export const siteUrl = "https://edintheclouds.io"
export const siteName = "edintheclouds.io"
export const siteTitle = "Ed in the Clouds Blog";
export const siteDescription = "A Cloud and Automation blog"

export default function Layout({ children, home }) {
  return (
    <body class="bg-white dark:bg-gray-800">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} key="ogurl" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={siteDescription} key="ogdesc" />
        <meta property="og:image" content={`${siteUrl}/images/profile.png`} />
      </Head>

      <header>{home ? <Navbar home /> : <Navbar />}</header>

      <div class="mx-auto mt-28 sm:py-12 md:py-18 px-5 w-screen">
        {children}
      </div>
    </body>
  );
}
