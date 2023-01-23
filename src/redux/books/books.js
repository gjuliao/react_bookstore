import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add_book: (state = initialState, book) => [...state, ...state.push(book)],
    remove_book: (state = initialState, index) => [...state.splice(0, index),
      ...state.splice(index + 1, state.length)],
  },
});

export default bookSlice.reducer;
export const { bookSliceActions } = bookSlice.actions;
