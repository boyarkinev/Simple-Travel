import './Card.css'

import React, {PropsWithChildren} from 'react';
import {ICardData} from '../../interfaces/interfaces';
import {deleteDataToDB} from "../../services/api.service";

type TProps = {
  data: ICardData
}

const Card: React.FC<TProps> = (props: PropsWithChildren<TProps>) => {

  const {placeName, placePhotoLink, id} = props.data;

  const handleDeleteButtonClick = async (event: any) => {
    event.preventDefault();
    // console.log(event.target.id)
    await deleteDataToDB(event.target.id)
  }

  return (
    <div className='place-card'>
      <div className='place-card__image-container'>
        <img className='place-card__image' src={placePhotoLink} alt={placeName}/>
        <button
          onClick={handleDeleteButtonClick}
          // type='submit'
          className='place-card__delete-icon'
        >
          <i className='material-icons' id={id}>delete</i>
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
