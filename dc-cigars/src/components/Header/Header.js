import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/images/divine_black_logo.svg';

const Header = () => {
  return (
  <Navbar collapseOnSelect className="main-header" expand="lg" variant="light">
  <Navbar.Brand>
    <img src={Logo} alt="divine cigars logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto menu-items">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Shop</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};

export default Header;
