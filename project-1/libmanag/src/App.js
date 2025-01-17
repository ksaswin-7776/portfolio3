import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import Dashboard from './components/Dashboard';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Row className="mt-4">
            <Col>
              {/* Horizontal Navigation Buttons */}
              <Button variant="primary" href="/">Home</Button>{' '}
              <Button variant="success" href="/register">Register</Button>{' '}
              <Button variant="info" href="/login">Login</Button>{' '}
              <Button variant="warning" href="/dashboard">Dashboard</Button>{' '}
              <Button variant="danger" href="/books">Book List</Button>{' '}
              <Button variant="secondary" href="/add-book">Add Book</Button>
            </Col>
          </Row>
        </Container>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;