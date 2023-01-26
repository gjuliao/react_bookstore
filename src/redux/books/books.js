import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axiosInstance';

const GET_BOOKS = 'GET_BOOKS';
const POST_BOOKS = 'POST_BOOKS';
const DELETE_BOOK = 'DELETE_BOOK';

export const fetchData = createAsyncThunk(
  'books/getBooks',
  async (dispatch) => {
    try {
      const res = await axios.get('books');
      const books = Object.keys(res.data).map((key) => ({
        item_id: key,
        ...res.data[key][0],
      }));

      if (res.status === 200) {
        dispatch({ type: GET_BOOKS, payload: books });
      }
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const postBook = (book) => async (dispatch) => {
  const postApi = (data) => axios.post('books', data);

  try {
    const res = await postApi(book);

    if (res.status === 201) {
      dispatch({ type: POST_BOOKS, payload: book });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteData = (id) => async (dispatch) => {
  const deleteApi = (data) => axios.delete(`books/${id}`, data);
  try {
    const res = await deleteApi(id);
    if (res.status === 201) {
      dispatch({ type: DELETE_BOOK, payload: id });
    }
  } catch (error) {
    throw new Error(error);
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
    case DELETE_BOOK: return state.filter((book) => book.item_id !== action.payload);
    default: return state;
  }
};

export default bookReducer;
export { GET_BOOKS, POST_BOOKS, DELETE_BOOK };
