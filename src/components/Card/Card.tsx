import './Card.css';
import cn from 'classnames';

import React from 'react';
import store from "../../store/store";
import {IAction, ICardData} from '../../interfaces/interfaces';
import {deleteDataToDB, patchLikesDataToDB} from "../../services/api.service";
import {loadDataAC} from "../../store/actionCreators/actionCreators";

type TProps = {
  data: ICardData
}

const dispatch = (action: IAction) => store.dispatch(action);

const Card: React.FC<TProps> = (props) => {

  const {placeName, placePhotoLink, id, likesCount} = props.data;

  const handleDeleteButtonClick = async (event: any) => {
    event.preventDefault();
    await deleteDataToDB(event.target.closest('.place-card').id);
    dispatch(loadDataAC());
  };

  const handleLikeButtonClick = async (event: any) => {
    event.preventDefault();
    const card = event.target.closest('.place-card');
    const count = 1;
    let newLikesCount = likesCount + count;
    await patchLikesDataToDB(card.id, newLikesCount);
    dispatch(loadDataAC());
  };

  const likesCountShow = cn(
    'place-card__like-count', {
      'place-card__like-count_show': likesCount !== 0,
    });

  const likeIconIsLiked = cn(
    'material-icons', {
      'place-card__like-icon_is-liked': likesCount !== 0,
    });

  return (
    <div className='place-card' id={id}>
      <div className='place-card__image-container'>
        <img className='place-card__image' src={placePhotoLink} alt={placeName}/>
        <button
          onClick={handleDeleteButtonClick}
          className='place-card__delete-icon'
        >
          <i className='material-icons'>delete</i>
        </button>
      </div>
      <div className='place-card__description'>
        <h3 className='place-card__name'>{placeName}</h3>
        <div className='place-card__likes-wrapper'>
          <button
            onClick={handleLikeButtonClick}
            className='place-card__like-icon'
          >
            <i className={likeIconIsLiked}>{
              likesCount === 0 ? 'favorite_border' : 'favorite'
            }</i>
          </button>
          <p className={likesCountShow}>{likesCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
