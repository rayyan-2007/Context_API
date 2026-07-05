import React from 'react'
import Button from '../button/Button';

const Card = ({name,email,btnname}) => {
  return (
    <>
      <div className="card-container">
        <div className="card-content">
          <h1>{name}</h1>
          <p>{email}</p>
        </div>

        <div className="card-btn">
          <Button btnname={btnname} />
        </div>
      </div>
    </>
  );
}

export default Card
