import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../../assets/img/tukun-logo.png'

function HomeNavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#page-top">
          <img src="../../assets/img/tukun-logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbarResponsive" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          Menu <FaBars className="ms-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto text-uppercase py-4 py-lg-0">
            <Nav.Link href="#services" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="#team" onClick={() => setExpanded(false)}>Team</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;
