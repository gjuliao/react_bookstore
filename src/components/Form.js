import React from 'react';

const Form = () => (
  <div>
    <form>
      <input name="title" type="text" placeholder="Book title" required />
      <input name="author" type="text" placeholder="Book Author" required />
    </form>
  </div>
);

export default Form;
