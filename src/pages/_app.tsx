import React from 'react';

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

import Layout from 'src/components/common/layout';

import Auth from '../components/common/auth';
// import Script from 'next/script';

// Used to import tailwindcss
import '../styles/global.css';

// const gtagId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function App({ Component, pageProps }: AppProps) {
  if (
    process.env.NEXT_PUBLIC_APP_ENV !== 'production' &&
    process.env.NEXT_PUBLIC_APP_ENV !== 'local'
  ) {
    return (
      <SessionProvider session={pageProps.session}>
        <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      </SessionProvider>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
