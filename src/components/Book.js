/* eslint-disable no-console */
import React from 'react';
import propTypes from 'prop-types';
import Form from './Form';

const Book = ({ books }) => {
  const { author, title } = books;

  return (
    <>
      <div>
        <h4>Science Fiction</h4>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <ul className="book_button_list">
          <li><a href="/">Comments</a></li>
          <li><a href="/">Remove</a></li>
          <li><a href="/">Edit</a></li>
        </ul>
      </div>
      <div>
        <div>
          <h1>Image Icon</h1>
          <h1>8%</h1>
          <h4>Completed</h4>
        </div>
        <div>
          <h4>Current Chapter</h4>
          <h3>Chapter 3: A Lesson Learned</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
