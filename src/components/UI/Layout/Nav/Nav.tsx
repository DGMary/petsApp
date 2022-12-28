import React from 'react';
import './Nav.scss';
import { NavLink} from "react-router-dom"


function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/about">Про нас</NavLink>

      {/* <NavLink to="/">Мої тварини</NavLink>
      <NavLink to="/">Обране</NavLink>
      <NavLink to="/">Повідомлення</NavLink> */}
    </nav>
  );
}

export default Nav;
