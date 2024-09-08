import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <>

      {/* Contenedor principal con sidebar y sección derecha */}
      <Container fluid className="d-flex min-vh-100 px-0">
        
        {/* Barra lateral izquierda */}
        <div className="bg-dark col-1 py-4">
          <h6 class="p-2 mb-4 text-light">Admin Dashboard</h6>

          <Nav className="flex-column">
            <Nav.Item className="mb-3">
              <Nav.Link className="text-light" href="#">
                <i className="fas fa-box mr-2"></i> Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
              <Nav.Link className="text-light" href="#">
                <i className="fas fa-users mr-2"></i> Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
              <Nav.Link className="text-light" href="#">
                <i className="fas fa-photo-video mr-2"></i> Media
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
              <Nav.Link className="text-light" href="#">
                <i className="fas fa-cog mr-2"></i> Settings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
              <Nav.Link className="text-light" href="#">
                <i className="fas fa-briefcase mr-2"></i> Services
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* Sección derecha vacía */}
        <div className="col-10 bg-light p-5 content">
          <Outlet/>
        </div>
      </Container>
    </>
  );
};

export default AdminDashboard;
