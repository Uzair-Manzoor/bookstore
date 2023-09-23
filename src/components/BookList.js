import React from 'react';
import PropTypes from 'prop-types';
import Book from './book'; // Import the Book component

const BookList = ({ books }) => (
  <ul className="books">
    {books.map((book) => (
      <Book key={book.id} title={book.title} author={book.author} />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
