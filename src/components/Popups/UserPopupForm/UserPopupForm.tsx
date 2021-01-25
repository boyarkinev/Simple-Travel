import React from 'react';

interface IPopupProps {
  data: {
    placeName: string;
    placePhotoLink: string;
    changePlaceName(arg: string): void;
    changePlacePhotoLink(arg: string): void;
    popupVisible(): void;
  }
}

const UserPopupForm: React.FC<IPopupProps> = (props) => {

  return (
    <>
      <h3 className='popup__title'>Редактировать пользователя</h3>
      <form
        id='addImageForm'
        className='popup__form'
        noValidate
      >
        <div className='popup__input-container'>
          <input
            type='text'
            id='name'
            className='popup__input'
            placeholder='Название'
          />
          <span id='error-name' className='alert-message'></span>
        </div>
        <div className='popup__input-container'>
          <input
            type='url'
            id='link'
            className='popup__input'
            placeholder='Ссылка на картинку'
          />
          <span id='error-link' className='alert-message'></span>
        </div>
        <button
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

export default UserPopupForm;
