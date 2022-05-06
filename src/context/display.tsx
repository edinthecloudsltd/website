import { createContext, useEffect, useState } from 'react';

import { useWindowScroll } from 'react-use';

interface IDisplayContext {
  activeTheme: 'light' | 'dark';
  setTheme: (mode: 'light' | 'dark') => void;
  showNav: boolean;
}

export const DisplayContext = createContext<IDisplayContext>({
  activeTheme: 'light',
  setTheme: () => {},
  showNav: false,
});

export const DisplayProvider: React.FC = (props) => {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light');
  const [showNav, setShowNav] = useState<boolean>(false);

  const { y } = useWindowScroll();

  useEffect(() => {
    if (y > 50) {
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
      }
    }
  }, []);

  return (
    <DisplayContext.Provider value={{ activeTheme, setTheme, showNav }}>
      {props.children}
    </DisplayContext.Provider>
  );
};
