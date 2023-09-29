import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInitialBooks } from '../redux/books/booksSlice';
import Book from './book';
import Form from './form';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchInitialBooks());
  }, [dispatch]);

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
