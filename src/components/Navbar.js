import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/">Categories</NavLink>
    </ul>
  </nav>
);

export default Navbar;
