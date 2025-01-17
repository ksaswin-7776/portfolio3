import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [bookList, setBookList] = useState(location.state?.allBooks || []);

  const username = location.state?.username;

  useEffect(() => {
    if (location.state?.allBooks) {
      setBookList(location.state.allBooks);
    }
  }, [location.state]);

  const handleAddBook = () => {
    navigate('/ab');
  };

  const handleViewEditDelete = () => {
    navigate("/list", {
      state: {
        allBooks: bookList
      }
    });
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container className="text-center mt-5">
      
      <h2>Hi {username}, Welcome to Online Library Management</h2> 

      <h3 style={{ color: 'blue' }}>Library Management System Dashboard</h3>
      <Row className="mt-4">
        <Col>
          <Button variant="success" onClick={handleAddBook} className="m-2">
            Add Book
          </Button>
        </Col>
        <Col>
          <Button variant="info" onClick={handleViewEditDelete} className="m-2" style={{ color: 'white' }}>
            View/Edit/Delete
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleLogout} className="m-2">
            Logout
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Quantity</th>
            <th>Year of Publication</th>
            <th>Edition</th>
            <th>Price</th>
            <th>Cover Type</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => (
            <tr key={index}>
              <td>{book.bookTitle}</td>
              <td>{book.bookAuthor}</td>
              <td>{book.bookGenre}</td>
              <td>{book.bookQuantity}</td>
              <td>{book.bookYOP}</td>
              <td>{book.bookEdition}</td>
              <td>Rs.{book.bookPrice}</td>
              <td>{book.bookCoverType}</td>
              <td>
                <img src={book.bookImage} alt={book.bookTitle} width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;