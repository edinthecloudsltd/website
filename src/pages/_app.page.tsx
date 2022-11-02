import React from 'react';

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

import Auth from 'src/components/auth';
import Layout from 'src/components/layout/layout';
import { DisplayProvider } from 'src/context/display';
// import Script from 'next/script';

// Used to import tailwindcss
import '../styles/global.css';

// const gtagId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.VERCEL_ENV === 'preview') {
    return (
      <SessionProvider session={pageProps.session}>
        <Auth>
          <DisplayProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </DisplayProvider>
        </Auth>
      </SessionProvider>
    );
  }

  return (
    <DisplayProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DisplayProvider>
  );
}
