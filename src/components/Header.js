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
                <i className="bi bi-house-door nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={toggle}>
                <i className="bi bi-person nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={toggle}>
                <i className="bi bi-file-earmark nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link" onClick={toggle}>
                <i className="bi bi-image nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contactme" className="nav__link" onClick={toggle}>
                <i className="bi bi-envelope nav__icon"></i> Contactme
              </a>
            </li>
          </ul>
        <i className="bi bi-x-circle nav__close" onClick={toggle}></i>
        </div>
        
        <div className="nav-btns" onClick={toggle}>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bi bi-menu-button-wide"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
