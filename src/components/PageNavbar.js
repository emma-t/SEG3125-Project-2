import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function PageNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/seg3125-project-2/">ReviveMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/seg3125-project-2/donate">Donate</Nav.Link>
            <Nav.Link as={NavLink} to="/seg3125-project-2/items">Our Items</Nav.Link>
            <Nav.Link as={NavLink} to="/seg3125-project-2/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/seg3125-project-2/faq-reviews">FAQ & Reviews</Nav.Link>
            <Nav.Link as={NavLink} to="/seg3125-project-2/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
