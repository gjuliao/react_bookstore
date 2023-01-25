import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const category = 'Fiction';
    const book = {
      title, author, id, category,
    };
    dispatch(postBook(book));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" placeholder="Book title" required />
        <input onChange={(e) => setAuthor(e.target.value)} value={author} name="author" type="text" placeholder="Book Author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
