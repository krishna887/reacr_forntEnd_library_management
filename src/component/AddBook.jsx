import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostBookService, GetBookService, UpdateBookService } from '../services/BookServices';

const BookForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    authorName: '',
    publicationYear: '',
    isbn: ''
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsUpdating(true);
      GetBookService(id)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.authorName || !formData.publicationYear || !formData.isbn) {
      alert('All fields are required.');
      return;
    }

    if (isUpdating) {
      UpdateBookService(id, formData)
        .then(() => {
          navigate('/books');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      PostBookService(formData)
        .then(() => {
          navigate('/books');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>{isUpdating ? 'Update Book Information' : 'Book Information'}</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="authorName" className="form-label">Author Name</label>
              <input
                type="text"
                className="form-control"
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="publicationYear" className="form-label">Publication Year</label>
              <input
                type="text"
                className="form-control"
                id="publicationYear"
                name="publicationYear"
                value={formData.publicationYear}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="isbn" className="form-label">ISBN</label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">{isUpdating ? 'Update' : 'Submit'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
