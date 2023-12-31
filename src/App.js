import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import BooksPage from './components/BookPage';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
