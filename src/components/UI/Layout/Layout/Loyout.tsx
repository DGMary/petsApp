import React from 'react';
import './Layout.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        Main
      </main>
      <Footer />
    </>
  );
}

export default Layout;
