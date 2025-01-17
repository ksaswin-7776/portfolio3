import React, { useEffect, useState } from 'react';
import { Button,Form,Row,Col,Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const AddBook = () => {
    
    const [book, setBook] = useState({
        bookTitle: '',
        bookAuthor: '',
        bookQuantity: '',
        bookGenre: '',
        bookYOP: '',
        bookEdition: '',
        bookPrice: '',
        bookCoverType: '',
        bookImage: '',
    });
    const [bookList, setBookList] = useState([
        {
            bookTitle: 'The Great Gatsby',
            bookAuthor: 'F. Scott Fitzgerald',
            bookQuantity: 5,
            bookGenre: 'Classic',
            bookYOP: 1925,
            bookEdition: '1st',
            bookPrice: 10.99,
            bookCoverType: 'Hardcover',
            bookImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaTXwcVfquCiOl3MOzjtGvI33JkP65UFNUw&s',
        },
        {
            bookTitle: 'To Kill a Mockingbird',
            bookAuthor: 'Harper Lee',
            bookQuantity: 3,
            bookGenre: 'Fiction',
            bookYOP: 1960,
            bookEdition: '2nd',
            bookPrice: 12.99,
            bookCoverType: 'Paperback',
            bookImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaTXwcVfquCiOl3MOzjtGvI33JkP65UFNUw&s',
        },
        {
            bookTitle: '1984',
            bookAuthor: 'George Orwell',
            bookQuantity: 7,
            bookGenre: 'Dystopian',
            bookYOP: 1949,
            bookEdition: '1st',
            bookPrice: 15.99,
            bookCoverType: 'Paperback',
            bookImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaTXwcVfquCiOl3MOzjtGvI33JkP65UFNUw&s',
        },
    ]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.allBooks) {
            setBookList(location.state.allBooks);
        }
    }, [location.state]);


   

    function handleSubmit(event) {
        event.preventDefault();
        setBookList([...bookList, book]);
        setBook({
            bookTitle: '',
            bookAuthor: '',
            bookQuantity: '',
            bookGenre: '',
            bookYOP: '',
            bookEdition: '',
            bookPrice: '',
            bookCoverType: '',
            bookImage: '',
        });
    }

    function handleChange(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    function viewBooks() {
        navigate("/list", {
            state: {
                allBooks: bookList
            }
        });
    }


    function handleBack() {
      navigate("/dashboard", {
          state: {
              allBooks: bookList
          }
      });
  }


    return (


      <Container className="mt-5" style={{ maxWidth: '600px', background: 'lightyellow' }}>
      <Button variant="success" onClick={viewBooks}>View Books</Button>
           
            <h2 className="text-center">Add New Book</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="bookTitle" className="mb-3">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" name="bookTitle" value={book.bookTitle} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="bookAuthor" className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="bookAuthor" value={book.bookAuthor} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="bookQuantity" className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="bookQuantity" value={book.bookQuantity} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="bookGenre" className="mb-3">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="bookGenre" value={book.bookGenre} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="bookYOP" className="mb-3">
                    <Form.Label>Year of Publication</Form.Label>
                    <Form.Control type="number" name="bookYOP" value={book.bookYOP} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="bookEdition" className="mb-3">
                    <Form.Label>Edition</Form.Label>
                    <Form.Control type="text" name="bookEdition" value={book.bookEdition} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="bookPrice" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="bookPrice" value={book.bookPrice} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="bookCoverType" className="mb-3">
                    <Form.Label>Cover Type</Form.Label>
                    <Form.Control type="text" name="bookCoverType" value={book.bookCoverType} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="bookImage" className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="bookImage" value={book.bookImage} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Add Book
              </Button>
      
              <Button variant="success" className="mx-5" onClick={handleBack}>
                  Back to Dashboard
                </Button>
            </Form>
          </Container>
      
      


       
    );
};

export default AddBook;