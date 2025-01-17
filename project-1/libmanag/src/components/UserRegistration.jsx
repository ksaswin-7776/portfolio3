import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((details) => ({
      ...details,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate('/login', { state: { registeredUser: userDetails } });
  };

  return (
    <div style={{ backgroundSize: 'cover', height: '100vh' }} className="d-flex align-items-center justify-content-center">
      <div className="container text-center p-4" style={{ maxWidth: '400px', background: 'lightblue', borderRadius: '10px' }}>
        <h4 style={{ color: 'blue' }}>Register Here</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your User name"
              name="username"
              value={userDetails.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserRegistration