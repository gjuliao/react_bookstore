/* eslint-disable no-unused-vars */
import './index.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Form from './components/Form';

const App = () => {
  const [books, setBooks] = useState({
    id: 1,
    author: 'JK Rowlings',
    title: 'Harry Potter',
  });

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Book books={books} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
