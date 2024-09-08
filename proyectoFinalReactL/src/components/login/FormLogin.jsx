import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../services/GetUsers';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormLogin.css'; // Make sure to create this file for custom styles

export default function FormLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const usersData = await getUsers();
      setUsers(usersData);

      const user = usersData.find(user => user.email === email && user.password === password);

      if (user) {
        alert("User Authenticated");
        navigate('/protected'); // Change '/protected' to the route you need
      } else {
        alert("Incorrect email or password");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit" disabled={loading} className="w-100">
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </Form>
      </div>
    </Container>
  );
}
