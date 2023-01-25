import React, { useState } from 'react';
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
