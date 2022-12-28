import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav"

function Header() {
  return (
    <header className="header">    
      
      <div>Logo</div>

      <Nav />

      <div>Btns</div>

    </header>
  );
}

export default Header;
