import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    add_category: (state = initialState, category) => [...state, ...state.push(category)],
    remove_category: (state = initialState, index) => [...state.splice(0, index),
      ...state.splice(index + 1, state.length)],
  },
});

export default categoriesSlice.reducer;
export const { categoriesSliceActions } = categoriesSlice.actions;
