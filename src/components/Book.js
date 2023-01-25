import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/books/books';
import Form from './Form';
import Card from './Card';

const Book = () => {
  const books = useSelector((state) => state.books);
  // eslint-disable-next-line no-console
  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  return (
    <>
      { books.map((book) => (
        <Card key={book.id} id={book.id} author={book.author} title={book.title} />
      ))}
      <Form />
    </>
  );
};

export default Book;
