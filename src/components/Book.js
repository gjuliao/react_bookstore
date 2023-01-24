import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Card from './Card';

const Book = () => {
  const books = useSelector((state) => state.books);

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
