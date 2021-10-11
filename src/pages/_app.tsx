import React, { useState, useEffect } from 'react';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import Auth from '../components/auth';
// import Script from 'next/script';

// Used to import tailwindcss
import '../styles/global.scss';

// const gtagId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function App({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (process.env.APP_ENV !== 'production') {
    return (
      <SessionProvider session={pageProps.session}>
        <Auth>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Auth>
      </SessionProvider>
    );
  }
  // I'm not quite sure why, but without the isLoaded/useEffect, layout children are not rendered
  return isLoaded && <Component {...pageProps} />;
}
