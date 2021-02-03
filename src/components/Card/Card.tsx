import './Card.css';
import cn from 'classnames';

import preloader from '../../images/preloader-red.svg'

import React, {useState} from 'react';
import store from "../../store/store";
import {IAction, ICardData} from '../../interfaces/interfaces';
import { patchLikesDataToDB} from "../../services/api.service";
import {loadDataAC} from "../../store/actionCreators/actionCreators";
import ImagePopup from "../Popups/ImagePopup/ImagePopup";
import DeleteAlertPopup from "../Popups/DeleteAlertPopup/DeleteAlertPopup";

type TProps = { data: ICardData }

type TUseState = {
  imagePopup: boolean;
  alertPopup: boolean;
}

const dispatch = (action: IAction) => store.dispatch(action);

const Card: React.FC<TProps> = (props) => {

  const {placeName, placePhotoLink, id, likesCount} = props.data;

  const [isShown, setIsShown] = useState<TUseState>({imagePopup: false, alertPopup: false});
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const changeImagePopupVisible = () => {
    !isShown.imagePopup
      ? setIsShown({...isShown, imagePopup: true})
      : setIsShown({...isShown, imagePopup: false});
  }

  const alertPopupVisible = () => {
    !isShown.alertPopup
      ? setIsShown({...isShown, alertPopup: true})
      : setIsShown({...isShown, alertPopup: false});
  }

  const handleDeleteButtonClick = () => {
    alertPopupVisible();
  };

  const handleLikeButtonClick = async (event: React.BaseSyntheticEvent) => {
    const count = 1;
    let newLikesCount = likesCount + count;
    setIsFetching(true)
    await patchLikesDataToDB(event.target.closest('.place-card').id, newLikesCount);
    dispatch(loadDataAC());
    setIsFetching(false)
  };

  const handleImageClick = () => {
    changeImagePopupVisible()
  };

  const likesCountShow = cn(
    'place-card__like-count', {
      'place-card__like-count_show': likesCount !== 0,
    },
  );

  const likeIconIsLiked = cn(
    'material-icons', {
      'place-card__like-icon_is-liked': likesCount !== 0,
    },
  );

  return (
    <div className='place-card' id={id}>
      <div className='place-card__image-container'>
        <img
          onClick={handleImageClick}
          className='place-card__image'
          src={placePhotoLink}
          alt={placeName}
        />
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
            { isFetching
              ? <img src={preloader} alt='Preloader'/>
              : <i className={likeIconIsLiked}>
                {
                  likesCount === 0 ? 'favorite_border' : 'favorite'
                }</i> }
          </button>
          <p className={likesCountShow}>{likesCount}</p>
        </div>
      </div>
      <ImagePopup
        link={placePhotoLink}
        name={placeName}
        onShow={isShown}
        changeImagePopupVisible={changeImagePopupVisible}
      />
      <DeleteAlertPopup onShow={isShown} alertPopupVisible={alertPopupVisible} />
    </div>
  );
};

export default Card;
