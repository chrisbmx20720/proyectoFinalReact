import React, { useState } from 'react';
import ProductListComponent from '../../components/products/ProductListComponent';
import ProductForm from '../../components/products/ProductForm';
import { Row, Col, Button } from 'react-bootstrap';

export default function Products() {
  const [registerProduct, setRegisterProduct] = useState(false); // Estado para alternar entre formulario y lista

  return (
    <div>
      <Row>
        <Col className="d-flex align-items-center mb-4">
          <h2 className="mb-0">
            {registerProduct ? 'Register Product' : 'Products'}
          </h2>
          <Button 
            variant="outline-dark" 
            onClick={() => setRegisterProduct(!registerProduct)} 
            className="ms-3"
          >
            {registerProduct ? 'Back to Product List' : 'Add New Product'}
          </Button>
        </Col>
      </Row>

      {/* Mostrar formulario o lista de productos según el estado */}
      {registerProduct ? <ProductForm /> : <ProductListComponent />}
    </div>
  );
}
