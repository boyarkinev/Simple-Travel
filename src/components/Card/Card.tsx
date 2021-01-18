import './Card.css'

import React from 'react';
import { IPlace } from '../../interfaces/interfaces';

type TProps = {
  data: IPlace
}

const Card: React.FC<TProps> = (props) => {

  const { placeName, placePhotoLink } = props.data;

  return (
    <div className='place-card'>
      <div className='place-card__image-container'>
        <img className='place-card__image' src={placePhotoLink} alt={placeName} />
        <button className='place-card__delete-icon '>
          <i className='material-icons'>delete</i>
        </button>
      </div>
      <div className='place-card__description'>
        <h3 className='place-card__name'>{placeName}</h3>
        <button className='place-card__like-icon'>
          <i className='material-icons'>favorite_border</i>
        </button>
      </div>
    </div>
  );
};

export default Card;
