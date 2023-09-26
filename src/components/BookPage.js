import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

const BooksPage = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BooksPage;
