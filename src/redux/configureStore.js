import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default rootReducer;
