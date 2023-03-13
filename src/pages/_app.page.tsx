import React from 'react';

import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';

import Layout from 'src/components/layout/layout';
import { DisplayProvider } from 'src/context/display';

// Used to import tailwindcss
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DisplayProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DisplayProvider>
      <Analytics />
    </>
  );
}
