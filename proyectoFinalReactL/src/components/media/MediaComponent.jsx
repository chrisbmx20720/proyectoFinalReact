// MediaComponent.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs, Form, Button } from 'react-bootstrap';
import './MediaComponent.css'; // Importamos archivo CSS personalizado
import { UploadImage } from '../test/UploadImage';
import { ImageGallery } from '../test/ImageGallery';

const MediaComponent = () => {
  const [formData, setFormData] = useState({
    alt: '',
    description: '',
    url: '',
    title: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <Row>
        {/* Columna izquierda (más grande) */}
        <Col md={8} className="p-3">
          <Tabs defaultActiveKey="upload" id="media-tabs" className="mb-3 custom-tabs">
            <Tab eventKey="upload" title="Upload">
              <div className="p-3">
                <UploadImage/>
              </div>
            </Tab>
            <Tab eventKey="media" title="Media Library">
              <div className="p-3">
                <ImageGallery/>
              </div>
            </Tab>
          </Tabs>
        </Col>

        {/* Columna derecha */}
        <Col md={4} className="p-3" style={{ borderLeft: '1px solid #ddd' }}>
          <h2 className="small-text">Formulario</h2>
          <Form onSubmit={handleSubmit} className="p-3">
            <Form.Group controlId="formAlt">
              <Form.Label className="small-text">Alt</Form.Label>
              <Form.Control
                type="text"
                name="alt"
                value={formData.alt}
                onChange={handleInputChange}
                placeholder="Alt text"
                className="small-text"
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label className="small-text">Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="small-text"
              />
            </Form.Group>

            <Form.Group controlId="formUrl">
              <Form.Label className="small-text">URL</Form.Label>
              <Form.Control
                type="text"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="small-text"
              />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label className="small-text">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="small-text"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="small-text">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MediaComponent;
