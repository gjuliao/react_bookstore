/* eslint-disable no-console */
import axios from '../axiosInstance';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const POST_BOOKS = 'POST_BOOKS';
const DELETE_BOOK = 'DELETE_BOOK';

export const fetchData = async (dispatch) => {
  try {
    const res = await axios.get('books');
    const books = Object.keys(res.data).map((key) => ({
      item_id: key,
      ...res.data[key][0],
    }));

    if (res.status === 200) {
      console.log('GET request working', books);
      dispatch({ type: GET_BOOKS, payload: books });
    }
  } catch (error) {
    console.log('Error in GET request', error.message);
    throw new Error(error);
  }
};

fetchData();

export const postBook = (book) => async (dispatch) => {
  try {
    const res = await axios.post('books', book);

    if (res.status === 201) {
      console.log('POST request successful', book);
      dispatch({ type: 'POST_BOOKS', payload: book });
    }
  } catch (error) {
    console.log('Error in POST request', error.message);
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    const res = await axios.delete('books/item_id');
    console.log(res);
    dispatch({ type: 'DELETE_BOOK', payload: id });
  } catch (error) {
    console.log('Error in DELETE request', error.message);
  }
};

// const initialState = [
//   {
//     id: Math.floor(Math.random() * 100),
//     author: 'JK Rowlings',
//     title: 'Harry Potter',
//   },
//   {
//     id: Math.floor(Math.random() * 100),
//     author: 'Ken Follet',
//     title: 'Fire',
//   },
//   {
//     id: Math.floor(Math.random() * 100),
//     author: 'Kalani Pickhart',
//     title: 'I will die in a foreign land',
//   },
// ];

const initialState2 = [];

const bookReducer = (state = initialState2, action) => {
  switch (action.type) {
    case GET_BOOKS: return action.payload;
    //  case ADD_BOOK: { return [...state, action.book]; }
    case POST_BOOKS: { return [...state, action.book]; }
    //  case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    case DELETE_BOOK: return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export function newBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

export default bookReducer;
export { GET_BOOKS, POST_BOOKS, DELETE_BOOK };
