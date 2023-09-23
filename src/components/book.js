import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <p>
      <span>Book title:</span>
      {title}
    </p>
    <div>
      <p>
        <span>Author:</span>
        {author}
      </p>
      <button type="button">Remove</button>
    </div>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
