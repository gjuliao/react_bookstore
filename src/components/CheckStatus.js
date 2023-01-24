import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CheckStatus = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.text);
  const handleClick = (e) => {
    dispatch(checkStatus(e.target.innerHTML));
  };
  return (
    <div className="checkstatus">
      <h2>{status}</h2>
      <button onClick={handleClick} type="button">CheckStatus</button>
    </div>
  );
};

export default CheckStatus;
