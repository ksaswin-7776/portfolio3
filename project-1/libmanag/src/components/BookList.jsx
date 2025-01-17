import React, { useState,useEffect } from 'react';
import { Table, Button, Container, FormControl } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const BookList = () => {

  const location = useLocation();
  const [bookList, setBookList] = useState(location.state?.allBooks || []);
  const navigate = useNavigate();
  const [indexToBeEdited, setIndexToBeEdited] = useState(-1);
  const [indexToBeDeleted,setIndexToBeDeleted] = useState(-1);
  const [bookToBeEdited, setBookToBeEdited] = useState({
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

  useEffect(() => {
      if (location.state?.allBooks) {
          setBookList(location.state.allBooks);
      }
  }, [location.state]);

  function handleBack() {
           navigate("/dashboard", {
               state: {
                   allBooks: bookList
               }
           });
       }
       function handleEdit(std, index) {
           setIndexToBeEdited(index);
           setBookToBeEdited(std);
       }
       function handleSave() {
           const updatedBookList = bookList.map((bk, index) => {
               if (index === indexToBeEdited) {
                   return bookToBeEdited;
               } else {
                   return bk;
               }
           })
           setBookList(updatedBookList);
           setIndexToBeEdited(-1);
       }
       function handleChange(event) {
           setBookToBeEdited({ ...bookToBeEdited, [event.target.name]: event.target.value });
       }
  
  

  function handleDelete(id) {
    setIndexToBeDeleted(id);
    const filteredBooks = bookList.filter((bk, index) => {
        if (index !== id) {
            return bk;
        }
    });
    if (window.confirm("Do you want to delete the selected Book?")) {
    setTimeout(() => {
        setBookList(filteredBooks);
        setIndexToBeDeleted(-1);
    }, 3000)
  }
}

  return (
    <Container className="mt-5">
      <h1 className="text-center" style={{ color: 'blue' }}> Library Book List </h1> 
      <Button variant="primary" onClick={handleBack} >
        Back to Dashboard
      </Button>
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
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {booklist.map((book, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><Form.Control type="text" name="bookTitle" value={editedBook.bookTitle} onChange={handleInputChange} /></td>
                  <td><Form.Control type="text" name="bookAuthor" value={editedBook.bookAuthor} onChange={handleInputChange} /></td>
                  <td><Form.Control type="text" name="bookGenre" value={editedBook.bookGenre} onChange={handleInputChange} /></td>
                  <td><Form.Control type="number" name="bookQuantity" value={editedBook.bookQuantity} onChange={handleInputChange} /></td>
                  <td><Form.Control type="number" name="bookYOP" value={editedBook.bookYOP} onChange={handleInputChange} /></td>
                  <td><Form.Control type="text" name="bookEdition" value={editedBook.bookEdition} onChange={handleInputChange} /></td>
                  <td><Form.Control type="number" name="bookPrice" value={editedBook.bookPrice} onChange={handleInputChange} /></td>
                  <td><Form.Control type="text" name="bookCoverType" value={editedBook.bookCoverType} onChange={handleInputChange} /></td>
                  <td><Form.Control type="text" name="bookImage" value={editedBook.bookImage} onChange={handleInputChange} /></td>
                  <td><Button variant="success" onClick={handleSave}>Save</Button></td>
                  <td><Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button></td>
                </>
              ) : (
                <>
                  <td>{book.bookTitle}</td>
                  <td>{book.bookAuthor}</td>
                  <td>{book.bookGenre}</td>
                  <td>{book.bookQuantity}</td>
                  <td>{book.bookYOP}</td>
                  <td>{book.bookEdition}</td>
                  <td>Rs.{book.bookPrice}</td>
                  <td>{book.bookCoverType}</td>
                  <td><img src={book.bookImage} alt={book.bookTitle} width="50" /></td>
                  <td><Button variant="success" onClick={() => handleEdit(index)}>Update</Button></td>
                  <td><Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button></td>
                </>
              )}
            </tr>
          ))}
        </tbody> */}

<tbody>                      
         {bookList.map((bk, index) => {
      return (
          <tr key={index}>
              <td style={{ width: "100px" }}>{index + 1}</td>
              <td>
                  {indexToBeEdited === index ?
                      <FormControl value={bookToBeEdited.bookTitle} name="bookTitle" onChange={handleChange} />
                      :
                      bk.bookTitle
                  }
              </td>
              <td style={{ width: "100px" }}>
                  {indexToBeEdited === index ?
                      <FormControl type='number' value={bookToBeEdited.bookAuthor} name="bookAuthor" onChange={handleChange} />
                      :
                      bk.bookAuthor
                  }
              </td>
              <td>
                  {indexToBeEdited === index ?
                      <FormControl value={bookToBeEdited.bookQuantity} name="bookQuantity" onChange={handleChange} />
                      :
                      bk.bookQuantity
                  }
              </td>
              <td>
                  {indexToBeEdited === index ?
                      <FormControl value={bookToBeEdited.bookGenre} name="bookGenre" onChange={handleChange} />
                      :
                      bk.bookGenre
                  }
              </td>
              <td style={{ width: "100px" }}>
                  {indexToBeEdited === index ?
                      <FormControl type='number' value={bookToBeEdited.bookYOP} name="bookYOP" onChange={handleChange} />
                      :
                      bk.bookYOP
                  }
              </td>
              <td>
                  {indexToBeEdited === index ?
                      <FormControl value={bookToBeEdited.bookEdition} name="bookEdition" onChange={handleChange} />
                      :
                      bk.bookEdition
                  }
              </td>
              <td>
                  {indexToBeEdited === index ?
                      <FormControl value={bookToBeEdited.bookPrice} name="bookPrice" onChange={handleChange} />
                      :
                      bk.bookPrice
                  }
              </td>
              <td style={{ width: "100px" }}>
                  {indexToBeEdited === index ?
                      <FormControl type='number' value={bookToBeEdited.bookCoverType} name="bookCoverType" onChange={handleChange} />
                      :
                      bk.bookCoverType
                  }
              </td>
              <td>
                  {indexToBeEdited === index ?
                      <FormControl value={bookToBeEdited.bookImage} name="bookImage" onChange={handleChange} />
                      :
                      <img src={bk.bookImage} alt={bk.bookTitle} width="50" />
                  }
              </td>
              <td style={{ width: "70px" }}>
                  {
                      indexToBeEdited === index ?
                          <Button variant='success' onClick={handleSave}>Save</Button>
                          :
                          <Button variant='success'  onClick={() => handleEdit(bk, index)}>Update</Button>
                  }
              </td>
              <td style={{ width: "70px" }}><Button variant='danger' onClick={()=>handleDelete(index)}>Delete</Button></td>
          </tr>
      );
     })}                      
  </tbody>

      </Table>
    </Container>
  );
};

export default BookList;
