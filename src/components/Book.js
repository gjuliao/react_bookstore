/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import Form from './Form';
import Card from './Card';

const Book = ({ books }) => {
  const { author, title } = books;

  return (
    <>
      { books.map((book) => (
        <Card key={book.id} author={book.author} title={book.title} />
      ))}
      <Form />
    </>
  );
};

export default Book;

Book.defaultProps = {
  books: null,
  author: '',
};

Book.propTypes = {
  books: propTypes.instanceOf(Object),
  author: propTypes.string,
};
