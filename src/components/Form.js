import React from 'react';

const Form = () => (
  <div className="book_form">
    <h3>ADD NEW BOOK</h3>
    <form className="book_form_inputs">
      <input className="book_form_inputs_title" name="title" type="text" placeholder="Book title" required />
      <input className="book_form_inputs_category" name="author" type="text" placeholder="Book Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
