const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [],
};

const bookSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return (state = initialState, book) => [...state, ...state.push(book)];
    case REMOVE_BOOK: return (state = initialState, index) => [...state.splice(0, index),
      ...state.splice(index + 1, state.length)];
    default: return state;
  }
};

export const newBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});

export default bookSlice.reducer;
