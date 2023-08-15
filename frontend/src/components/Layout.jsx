import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='d-flex flex-column justify-content-between'>

      <header>
        <Navbar />
      </header>

      <main style={{ minHeight: 'calc(100vh - 209px)' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
