import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books }) => (
  <ul className="books">
    {books.map((book) => (
      <books key={book.id} title={book.title} />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
