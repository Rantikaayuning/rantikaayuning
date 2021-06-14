import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setNavbar(!navbar);
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/">
          <p>Rantika</p>
        </Link>
        <div className={navbar ? "nav__menu  show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={toggle}>
                <i class="uil uil-estate nav__logo"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={toggle}>
                <i class="uil uil-user nav__logo"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={toggle}>
                <i class="uil uil-desktop nav__logo"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link" onClick={toggle}>
                <i class="uil uil-file nav__logo"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contactme" className="nav__link" onClick={toggle}>
                <i class="uil uil-navigator nav__logo"></i> Contactme
              </a>
            </li>
          </ul>
          <i class="uil uil-times-circle nav__close" onClick={toggle}></i>
        </div>
        
        <div className="nav-btns" onClick={toggle}>
          <div className="nav__toggle" id="nav-toggle">
            <i class="uil uil-bars nav__logo"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
