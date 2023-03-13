import { createContext, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useWindowScroll } from 'react-use';

interface IDisplayContext {
  activeTheme: 'light' | 'dark' | undefined;
  setTheme: (mode: 'light' | 'dark') => void;
  showNav: boolean;
}

export const DisplayContext = createContext<IDisplayContext>({
  activeTheme: 'light',
  setTheme: () => {},
  showNav: false,
});

export function DisplayProvider(props: React.PropsWithChildren<{}>) {
  const router = useRouter();
  const [showNav, setShowNav] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>();

  const { y } = useWindowScroll();

  useEffect(() => {
    if (router.pathname !== '/') {
      setShowNav(true);
    } else if (router.pathname === '/' && y > 50) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [y]);

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

  return (
    <DisplayContext.Provider value={{ activeTheme, setTheme, showNav }}>
      {props.children}
    </DisplayContext.Provider>
  );
}
