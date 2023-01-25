import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOK_API_URL;
const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

const instance = axios.create({
  baseURL: `${BASE_URL}/apps/${API_KEY}/`,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
});

export default instance;
