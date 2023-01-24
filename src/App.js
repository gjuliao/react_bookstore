/* eslint-disable no-unused-vars */
import './index.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Navbar from './components/Navbar';
import CheckStatus from './components/CheckStatus';

const App = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Book books={books} />} />
          <Route exact path="categories" element={<CheckStatus />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
