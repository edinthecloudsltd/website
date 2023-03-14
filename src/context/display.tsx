import React, { createContext, useEffect } from 'react';

import * as detectBrowser from 'detect-browser';
import { useRouter } from 'next/router';
import { useWindowScroll } from 'react-use';

interface IDisplayContext {
  activeTheme: 'light' | 'dark' | undefined;
  setTheme: (mode: 'light' | 'dark') => void;
  showNav: boolean;
  browser: string;
}

export const DisplayContext = createContext<IDisplayContext>({
  activeTheme: 'light',
  setTheme: () => {},
  showNav: false,
  browser: '',
});

export function DisplayProvider(props: React.PropsWithChildren<{}>) {
  const router = useRouter();
  const [showNav, setShowNav] = React.useState<boolean>(false);
  const [activeTheme, setActiveTheme] = React.useState<'light' | 'dark'>();
  const detect = detectBrowser.detect();
  const [browser, setBrowser] = React.useState<string>('');

  const { y } = useWindowScroll();

  useEffect(() => {
    if (router.pathname !== '/') {
      setShowNav(true);
    } else if (router.pathname === '/' && y > 50) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [y, router]);

  const setTheme = (mode: 'light' | 'dark') => {
    if (process.browser) {
      window.localStorage.setItem('theme', mode);
    }
    setActiveTheme(mode);
  };

  useEffect(() => {
    if (process.browser) {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setActiveTheme(savedTheme);
      } else {
        setActiveTheme('light');
      }
    }
  }, []);

  useEffect(() => {
    if (detect) {
      setBrowser(detect.name);
    }
  }, [detect]);

  return (
    <DisplayContext.Provider value={{ activeTheme, setTheme, showNav, browser }}>
      {props.children}
    </DisplayContext.Provider>
  );
}
