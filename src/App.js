import './index.css';
import { Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Navbar from './components/Navbar';
import CheckStatus from './components/CheckStatus';

const App = () => (
  <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route exact path="categories" element={<CheckStatus />} />
      </Routes>
    </div>
  </>
);

export default App;
