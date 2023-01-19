/* eslint-disable no-unused-vars */
import './index.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Navbar from './components/Navbar';
import CheckStatus from './components/CheckStatus';

const App = () => {
  const [books, setBooks] = useState({
    id: 1,
    author: 'JK Rowlings',
    title: 'Harry Potter',
  });

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
