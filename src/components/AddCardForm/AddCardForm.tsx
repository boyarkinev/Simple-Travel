import React, { useState } from 'react';
import { IForm } from '../../interfaces/interfaces';

const AddCardForm: React.FC = () => {
  const [isInput, setIsInput] = useState<IForm>({ name: '', link: '' });

  const handleInputSend = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'name':
        setIsInput({ ...isInput, name: event.target.value });
        break;
      case 'link':
        setIsInput({ ...isInput, link: event.target.value });
        break;
      default:
        break;
    }
  };

  const handleButtonClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    setIsInput({ name: '', link: '' });
    console.log(isInput);
  };

  return (
    <>
      <h3 className='popup__title'>Новая карточка</h3>
      <form id='addImageForm' className='popup__form' name='new' noValidate>
        <div className='popup__input-container'>
          <input
            onChange={handleInputSend}
            value={isInput.name}
            id='name'
            type='text'
            className='popup__input'
            placeholder='Название'
          />
          <span id='error-name' className='alert-message'></span>
        </div>
        <div className='popup__input-container'>
          <input
            onChange={handleInputSend}
            value={isInput.link}
            id='link'
            type='url'
            className='popup__input'
            placeholder='Ссылка на картинку'
          />
          <span id='error-link' className='alert-message'></span>
        </div>
        <button
          onClick={handleButtonClick}
          id='submit-addImageForm'
          type='submit'
          name='popupButton'
          className='button popup__button'>
          +
        </button>
      </form>
    </>
  );
};

export default AddCardForm;
