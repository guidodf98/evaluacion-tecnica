import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Layout({ children }) {
  return (
    <div>

      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default Layout;
