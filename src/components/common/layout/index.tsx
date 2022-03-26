import React, { useState, useEffect } from 'react';

import Footer from '../footer';
import Navbar from '../navbar';

const Layout: React.FC = ({ children }) => {
  // Workaroud FOUC
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => setShow(true), []);

  return (
    <div style={{ visibility: show ? 'visible' : 'hidden' }}>
      <Navbar />
      <div style={{ position: 'relative', overflow: 'hidden' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
