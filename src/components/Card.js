import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Card = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeBook(parseInt(e.target.id, 10)));
  };

  return (
    <>
      <div>
        <h4>Science Fiction</h4>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <ul className="book_button_list">
          <li><a href="/">Comments</a></li>
          <li><a id={id} onClick={handleClick} href="/">Remove</a></li>
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
    </>
  );
};

export default Card;

Card.defaultProps = {
  id: '',
  author: '',
  title: '',
};

Card.propTypes = {
  id: propTypes.number,
  author: propTypes.string,
  title: propTypes.string,
};
