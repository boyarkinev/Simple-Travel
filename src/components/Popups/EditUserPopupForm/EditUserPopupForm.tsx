import React from 'react';

// interface IPopupProps {
//   data: {
//     placeName: string;
//     placePhotoLink: string;
//     changePlaceName(arg: string): void;
//     changePlacePhotoLink(arg: string): void;
//     userPopupVisible(): void
//   }
// }

const EditUserPopupForm: React.FC<any> = (props) => {

  return (
    <>
      <h3 className='popup__title'>Редактировать</h3>
      <form
        id='edit-user-form'
        className='popup__form'
        noValidate
      >
        <div className='popup__input-container'>
          <input
            type='text'
            id='name'
            className='popup__input'
            placeholder='Имя, фамилия'
          />
          <span id='error-name' className='alert-message'></span>
        </div>
        <div className='popup__input-container'>
          <input
            type='url'
            id='link'
            className='popup__input'
            placeholder='Род занятий или профессия'
          />
          <span id='error-link' className='alert-message'></span>
        </div>
        <button
          id='submit-edit-user-form'
          type='submit'
          name='popupButton'
          className='button popup__button'>Сохранить</button>
      </form>
    </>
  );
};

export default EditUserPopupForm;
