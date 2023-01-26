import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar_main">
      <h1>Bookstore CMS</h1>
      <ul className="nav_list">
        <NavLink className="nav_link" to="/">Books</NavLink>
        <NavLink className="nav_link" to="/categories">Categories</NavLink>
      </ul>
    </div>
    <div className="nav_list_user">
      <span className="material-symbols-outlined">
        account_circle
      </span>
    </div>
  </nav>
);

export default Navbar;
