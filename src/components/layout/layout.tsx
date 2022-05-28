import React, { useState, useEffect, useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import { DisplayContext } from 'src/context/display';
import { GlobalStyles, themes } from 'src/styles/themes';

import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Layout: React.FC = ({ children }) => {
  // Workaroud FOUC
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => setShow(true), []);
  const { activeTheme } = useContext(DisplayContext);

  return activeTheme ? (
    <ThemeProvider theme={themes[activeTheme]}>
      <GlobalStyles />
      <div style={{ visibility: show ? 'visible' : 'hidden' }} data-theme={activeTheme}>
        <Navbar />
        <div style={{ position: 'relative', overflow: 'hidden' }}>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  ) : null;
};

export default Layout;
