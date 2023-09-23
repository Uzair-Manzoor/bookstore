import { v4 as uuidv4 } from 'uuid';
import Book from './book';
import BookList from './BookList';
import Form from './form';

const BookPage = () => {
  const books = [
    { id: uuidv4(), title: 'The Great Gatsby', author: 'Scott Fitzgerald' },
    { id: uuidv4(), title: 'Moby Dick', author: 'Herman Melville' },
    { id: uuidv4(), title: 'War and Peace', author: 'Leo Tolstoy' },
    { id: uuidv4(), title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky' },
  ];

  return (
    <>
      <BookList books={books} />
      <Book key={books.id} title={books.title} author={books.author} BookList books={books} />
      <Form />
    </>
  );
};

export default BookPage;
