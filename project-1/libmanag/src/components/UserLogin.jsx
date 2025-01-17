import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';

const UserLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { registeredUser } = location.state || {};
  const { email: registeredEmail, password: registeredPassword } = registeredUser || {};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    let isError = false;
    if (email !== registeredEmail) {
      setEmail(''); 
      isError = true;
    }

    if (password !== registeredPassword) {
      setPassword('');
      isError = true;
    }

    if (isError) {
      setError('Incorrect credentials. Please try again.');
      setTimeout(() => {
        setError('');
      }, 3000);
    } else {
      navigate('/dashboard',{ state: { username: registeredUser.username}});
    }
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="container text-center p-4"
        style={{
          maxWidth: '400px',
          backgroundColor: 'lightblue',
          borderRadius: '10px',
          padding: '2rem',
        }}
      >
        <h3 style={{ color: 'blue' }}>Login Here</h3>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && (
            <Alert variant="danger" className="mt-3">
              {error}
            </Alert>
          )}

          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={handleClick} className="mt-3">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserLogin;