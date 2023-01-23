import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Bookstore CMS</h1>
    <ul className="nav_list">
      <NavLink className="nav_link" to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </ul>
    <div>User</div>
  </nav>
);

export default Navbar;
