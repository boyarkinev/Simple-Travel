import React, {PropsWithChildren} from 'react';

import {putDataToDB} from '../../services/api.service';
import store from "../../store/store";
import {loadDataAC} from "../../store/actionCreators/actionCreators";

interface IPopupProps {
  data: {
    placeName: string;
    placePhotoLink: string;
    changePlaceName(arg: string): void;
    changePlacePhotoLink(arg: string): void;
    popupVisible(): void;
  }
}

const dispatch = (action: any) => store.dispatch(action);

const PopupForm: React.FC<IPopupProps> = (props: PropsWithChildren<IPopupProps>) => {
  const {
    placeName,
    placePhotoLink,
    changePlaceName,
    changePlacePhotoLink,
    popupVisible,
  } = props.data;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.id === 'name' && changePlaceName(event.target.value);
    event.target.id === 'link' && changePlacePhotoLink(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await putDataToDB({
      placeName,
      placePhotoLink,
      date: new Date().toLocaleDateString(),
      isLiked: false,
    });
    changePlaceName('');
    changePlacePhotoLink('');
    popupVisible();
    dispatch(loadDataAC())
  };

  return (
    <>
      <h3 className='popup__title'>Новая карточка</h3>
      <form
        id='addImageForm'
        className='popup__form'
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className='popup__input-container'>
          <input
            onChange={handleInputChange}
            value={placeName}
            type='text'
            id='name'
            className='popup__input'
            placeholder='Название'
          />
          <span id='error-name' className='alert-message'></span>
        </div>
        <div className='popup__input-container'>
          <input
            onChange={handleInputChange}
            value={placePhotoLink}
            type='url'
            id='link'
            className='popup__input'
            placeholder='Ссылка на картинку'
          />
          <span id='error-link' className='alert-message'></span>
        </div>
        <button
          // onClick={handleButtonClick}
          id='submit-addImageForm'
          type='submit'
          name='popupButton'
          className='button popup__button'>
          <i className='material-icons'>add</i>
        </button>
      </form>
    </>
  );
};

export default PopupForm;
