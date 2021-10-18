import React from 'react';

import Footer from '../footer';
import Navbar from '../navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Navbar />
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
