import React from 'react';

import Footer from '../footer';
import Navbar from '../navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '6rem' }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
