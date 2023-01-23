const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = {
  categories: [],
  text: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export const checkStatus = (text) => ({
  type: CHECK_STATUS,
  payload: text,
});

export default categoriesReducer;
