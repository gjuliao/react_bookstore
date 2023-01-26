import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = 'Fiction';

    const book = {
      title, author, item_id: uuidv4(), category,
    };
    dispatch(postBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book_form">
      <br />
      <h1>ADD NEW BOOK</h1>
      <form className="book_form_inputs" onSubmit={handleSubmit}>
        <input className="book_form_inputs_title" onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" placeholder="Book title" required />
        <input className="book_form_inputs_category" onChange={(e) => setAuthor(e.target.value)} value={author} name="author" type="text" placeholder="Book Author" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
