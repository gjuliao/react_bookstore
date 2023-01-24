const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// eslint-disable-next-line no-unused-vars
const initialState = [
  {
    id: 0,
    author: 'JK Rowlings',
    title: 'Harry Potter',
  },
  {
    id: 1,
    author: 'Ken Follet',
    title: 'Fire',
  },
  {
    id: 3,
    author: 'Kalani Pickhart',
    title: 'I will die in a foreign land',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return (payload) => [...state.splice(0, payload),
      ...state.splice(payload + 1, state.length)];
    default: return state;
  }
};

export function newBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,
});

export default bookReducer;
export { ADD_BOOK, REMOVE_BOOK };
