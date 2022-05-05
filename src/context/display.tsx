import { createContext, useEffect, useState } from 'react';

interface IDisplayContext {
  activeTheme: 'light' | 'dark';
  setTheme: (mode: 'light' | 'dark') => void;
}

export const DisplayContext = createContext<IDisplayContext>({
  activeTheme: 'light',
  setTheme: () => {},
});

export const DisplayProvider: React.FC = (props) => {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light');

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
    <DisplayContext.Provider value={{ activeTheme, setTheme }}>
      {props.children}
    </DisplayContext.Provider>
  );
};
