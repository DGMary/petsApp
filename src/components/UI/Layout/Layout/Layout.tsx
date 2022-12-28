import React from 'react';
import './Layout.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Layout({children}:any) {
  return (
    <>
      <Header />
      <main className="main">
        Main
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
