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

export const postBook = (book) => async (dispatch) => {
  const postApi = (data) => axios.post('books', data);

  try {
    const res = await postApi(book);

    if (res.status === 201) {
      console.log('POST request successful', book);
      dispatch({ type: POST_BOOKS, payload: book });
    }
  } catch (error) {
    console.log('Error in POST request', error.message);
    throw new Error(error);
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

const initialState2 = [];

const bookReducer = (state = initialState2, action) => {
  switch (action.type) {
    case GET_BOOKS: return action.payload;
    case POST_BOOKS: return [...state,
      {
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      }];
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
