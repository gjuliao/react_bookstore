import React from 'react';

const Form = () => (
  <div className="book_form">
    <h3>Add Book</h3>
    <form className="book_form_inputs">
      <input name="title" type="text" placeholder="Book title" required />
      <input name="author" type="text" placeholder="Book Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
