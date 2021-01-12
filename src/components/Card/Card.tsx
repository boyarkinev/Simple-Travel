import React from 'react';

const Card: React.FC = () => {
  return (
    <div className='place-card'>
      <div className='place-card__image'>
        <button className='place-card__delete-icon'></button>
      </div>
      <div className='place-card__description'>
        <h3 className='place-card__name'>Имя</h3>
        <button className='place-card__like-icon'></button>
      </div>
    </div>
  );
};

export default Card;
