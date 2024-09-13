// ProductForm.js

import React, { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faImage } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import MediaComponent from '../media/MediaComponent';
import './Product.css';

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    excerpt: '',
    provider: '',
    quantity: '',
    isFeatured: false,
    height: '',
    width: '',
    price: '',
    category: '',
    tags: '',
    image: {
      title: '',
      alt: '',
      caption: '',
      description: '',
      url: '',
    },
  });

  // Manejar cambios en los campos de texto, checkbox, etc.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Enviar formulario completo del producto
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Submitted:', product);
    // Lógica para enviar datos al backend
  };

  // Abrir el selector de imagen destacada (MediaComponent)
  const handleFeaturedImage = () => {
    toast(
      <MediaComponent onImageSubmit={handleImageSubmit} />, // Pasar función para manejar la imagen
      {
        position: 'top-left',
        className: 'toast-left-full',
        autoClose: false,
      }
    );
  };

  // Actualizar el estado del producto con los datos de la imagen seleccionada
  const handleImageSubmit = (imageData) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      image: {
        title: imageData.title,
        alt: imageData.alt,
        description: imageData.description,
        url: imageData.url,
      },
    }));
    
    toast.dismiss(); // Cerrar el modal del MediaComponent
    console.log("image selected",product.image.url);
    
  };

  return (
    <div className="container mt-4">
      <Row>
        {/* Columna izquierda con el formulario del producto */}
        <Col lg={9}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="name"
                value={product.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Enter product description"
                name="description"
                value={product.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Excerpt</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter a short excerpt"
                name="excerpt"
                value={product.excerpt}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Provider</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter provider"
                    name="provider"
                    value={product.provider}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter height"
                    name="height"
                    value={product.height}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Width (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter width"
                    name="width"
                    value={product.width}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={product.image.url}
                readOnly
              />
            </Form.Group>
          </Form>
        </Col>

        {/* Columna derecha con el botón de publicar y otros controles */}
        <Col lg={3}>
          <Card className="mb-3">
            <Card.Body>
              <Button variant="primary" className="w-100 mb-3" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Publish
              </Button>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter tags, separated by commas"
                  name="tags"
                  value={product.tags}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="secondary" className="w-100 mb-3" onClick={handleFeaturedImage}>
                <FontAwesomeIcon icon={faImage} className="me-2" />
                Featured Image
              </Button>

              <Form.Group controlId="isFeatured">
                <Form.Check
                  type="checkbox"
                  label="Featured Product"
                  name="isFeatured"
                  checked={product.isFeatured}
                  onChange={handleChange}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
