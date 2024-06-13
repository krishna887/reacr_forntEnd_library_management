import React, { useEffect, useState } from 'react';
import { ListBookService, DeleteBookService } from '../services/BookServices';
import { useNavigate } from 'react-router-dom';

const ListBookComponent = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ListBookService()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addNewBook = () => {
    navigate('/add-book');
  };

  const updateBook = (id) => {
    navigate(`/update-book/${id}`);
  };

  const deleteBook = (id) => {
    DeleteBookService(id)
      .then(() => {
        setBooks(books.filter((book) => book.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Book List</h1>
      <button className='btn btn-primary mb-2' onClick={addNewBook}>
        Add Book
      </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Publication Year</th>
            <th>Isbn</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.authorName}</td>
              <td>{book.publicationYear}</td>
              <td>{book.isbn}</td>
              <td>
                <button
                  className='btn btn-info me-2'
                  onClick={() => updateBook(book.id)}
                >
                  Update
                </button>
                <button
                  className='btn btn-danger me-2'
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBookComponent;
