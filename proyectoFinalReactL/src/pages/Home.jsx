import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UploadImage} from '../components/test/UploadImage'

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Welcome to the Home Page</h1>
          <p className="mt-4">
            <UploadImage/>
            This is the homepage of your application. Navigate through the menu to explore different sections.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
