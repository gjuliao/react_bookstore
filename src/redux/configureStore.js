import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default rootReducer;
