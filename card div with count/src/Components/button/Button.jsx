import React, { useContext } from 'react'
import Context from '../Context';

const Button = ({btnname}) => {

   const {count, setCount} =  useContext(Context);
  return (
    <>
      <button
        className="card-button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {btnname}
      </button>
    </>
  );
}

export default Button
