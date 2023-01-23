const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return (payload) => [...state.splice(0, payload),
      ...state.splice(payload + 1, state.length)];
    default: return state;
  }
};

export const newBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,
});

export default bookReducer;
