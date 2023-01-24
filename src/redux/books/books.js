const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: Math.floor(Math.random() * 100),
    author: 'JK Rowlings',
    title: 'Harry Potter',
  },
  {
    id: Math.floor(Math.random() * 100),
    author: 'Ken Follet',
    title: 'Fire',
  },
  {
    id: Math.floor(Math.random() * 100),
    author: 'Kalani Pickhart',
    title: 'I will die in a foreign land',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: { return [...state, action.book]; }
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export function newBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

export default bookReducer;
export { ADD_BOOK, REMOVE_BOOK };
