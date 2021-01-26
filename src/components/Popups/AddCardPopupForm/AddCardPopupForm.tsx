import React, {useState} from 'react';

import preloader from '../../../images/preloader-white.svg';

import store from "../../../store/store";
import {putDataToDB} from '../../../services/api.service';
import {loadDataAC} from "../../../store/actionCreators/actionCreators";

interface IPopupProps {
  data: {
    placeName: string;
    placePhotoLink: string;
    changePlaceName(arg: string): void;
    changePlacePhotoLink(arg: string): void;
    cardPopupVisible(): void;
  },
}

const dispatch = (action: any) => store.dispatch(action);

const AddCardPopupForm: React.FC<IPopupProps> = (props) => {

  const {
    placeName,
    placePhotoLink,
    changePlaceName,
    changePlacePhotoLink,
    cardPopupVisible,
  } = props.data;

  const [isFetching, setIsFetching] = useState<boolean>(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.id === 'name' && changePlaceName(event.target.value);
    event.target.id === 'link' && changePlacePhotoLink(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFetching(true);
    await putDataToDB({
      placeName,
      placePhotoLink,
      date: new Date().toLocaleDateString(),
      likesCount: 0,
    });
    changePlaceName('');
    changePlacePhotoLink('');
    cardPopupVisible();
    dispatch(loadDataAC());
    setIsFetching(false);
  };

  return (
    <>
      <h3 className='popup__title'>Новая карточка</h3>
      <form
        id='add-image-form'
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
          id='submit-add-image-form'
          type='submit'
          name='popupButton'
          className='button popup__button'>
          { isFetching ?
            <img src={preloader} alt='Preloader' className='preloader' />
            : <i className='material-icons'>add</i> }
        </button>
      </form>
    </>
  );
};

export default AddCardPopupForm;
