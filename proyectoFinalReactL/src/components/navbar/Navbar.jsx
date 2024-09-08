import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {

  
  return (
    <div>
      
      <Container fluid className="w-100 bg-dark header-nav">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </div>
  );
}
