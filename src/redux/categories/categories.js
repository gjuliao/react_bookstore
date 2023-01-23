/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    add_categories: () => { console.log('adding book'); },
    remove_categories: () => { console.log('removing book'); },
  },
});

export default categoriesSlice.reducer;
export const { categoriesSliceActions } = categoriesSlice.actions;
