import { useState } from 'react';
import './index.css';


const BookShelf = () => {
//title: 'Fourth Wing', author: 'Rebecca Yarros' 
//title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis'

  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // handleInputChange :
  function handleInputChange(event){
    setNewBook ({...newBook,[event.target.name]: event.target.value});
  };

  // handleSubmit form:
  function handleSubmit(event){
    event.preventDefault(); // Prevent page reload on form submit
    // Add the new book to the books array :
    setBooks((prevBooks) => [...prevBooks, newBook]);
    // Reset the form :
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        <h3>Your Bookshelf:</h3>
           {books.map((book, index) => (
          <div key={index} className="bookCard">
             <p><strong>{book.title}</strong> by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
