import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';
import Logo from '../assets/profilelogo.png';

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className='navbar-list' >
        <NavbarBrand href="/"><img src={Logo} alt=''/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <Nav navbar>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/about">About</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomeNavbar 