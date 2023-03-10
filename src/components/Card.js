import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteData } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Card = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteData(id));
  };

  const percentage = 66;

  return (
    <>
      <div className="card">
        <div className="main_tile">
          <h4 className="book_genre">Science Fiction</h4>
          <h1>{title}</h1>
          <h2>{author}</h2>
          <ul className="book_button_list">
            <li><a href="/">Comments   |</a></li>
            <li><a id={id} onClick={handleClick} href="/">Remove |</a></li>
            <li><a href="/">Edit</a></li>
          </ul>
        </div>
        <div className="completed_tile">
          <CircularProgressbar className="circular" value={percentage} text={`${percentage}%`} />
          <div className="completed_tile_secondary">
            <h1>66%</h1>
            <h4>Completed</h4>
          </div>
        </div>
        <div className="chapter_tile">
          <h4>CURRENT CHAPTER</h4>
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
  id: propTypes.string,
  author: propTypes.string,
  title: propTypes.string,
};
