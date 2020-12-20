import Head from "next/head";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

export const siteTitle = "Ed in the Clouds";

export default function Layout({ children, home }) {

  return (
    <div className={styles.container}>
      <Head>
        {/*         <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
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

      <header className={styles.header}>
        {home ? <Navbar home /> : <Navbar />}
      </header>
      
      <div className={styles.container}>{children}</div>
    </div>
  );
}
