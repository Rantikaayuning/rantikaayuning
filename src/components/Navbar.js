import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className='navbar-list' >
        <NavbarBrand href="/">
          <h5>RA</h5>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <Nav navbar>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/skills">Skills</NavLink>
            <NavLink href="/projects">Portofolio</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomeNavbar 