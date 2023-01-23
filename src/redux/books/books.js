/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add_book: () => { console.log('adding book'); },
    remove_book: () => { console.log('removing book'); },
  },
});

export default bookSlice.reducer;
export const { bookSliceActions } = bookSlice.actions;
