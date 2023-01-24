/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const book = { title, author, id };
    dispatch(newBook(book));
    console.log('Book Added');
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
