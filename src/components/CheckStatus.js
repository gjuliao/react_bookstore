import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CheckStatus = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handleClick = (e) => {
    dispatch(checkStatus(e.target.innerHTML));
  };
  return (
    <div>
      <p>{status}</p>
      <button onClick={handleClick} type="button">CheckStatus</button>
    </div>
  );
};

export default CheckStatus;
