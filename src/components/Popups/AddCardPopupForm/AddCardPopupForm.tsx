import React, {useEffect, useState} from 'react';

import preloader from '../../../images/preloader-white.svg';

import store from '../../../store/store';
import {putDataToDB} from '../../../services/api.service';
import {loadDataAC} from '../../../store/actionCreators/actionCreators';

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

  const [isDirty, setIsDirty] = useState<{ [key: string]: boolean }>({name: false, link: false});
  const [isError, setIsError] = useState<{ [key: string]: string }>({name: 'Поле должно содержать слово', link: 'Поле должно содержать ссылку'});
  const [isValid, setIsValid] = useState<boolean>(false)

  useEffect(() => {
    (isError.name || isError.link)
      ? setIsValid(false)
      : setIsValid(true)
  }, [isError.name, isError.link])

  const blurHandler = (event: any) => {
    switch (event.target.name) {
      case 'placeName':
        setIsDirty({...isDirty, name: true});
        break
      case 'placePhotoLink':
        setIsDirty({...isDirty, link: true});
        break
    }
  }

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case 'placeName':
        changePlaceName(event.target.value);
        const nameRegex = /([A-Za-z]|[А-ЯЁа-яё])/gi
        !nameRegex.test(event.target.value)
          ? setIsError({...isError, name: 'Введите корректное название'})
          : setIsError({...isError, name: ''})
        break
      case 'placePhotoLink':
        changePlacePhotoLink(event.target.value);
        const linkRegex = /(^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$)/
        !linkRegex.test(event.target.value)
          ? setIsError({...isError, link: 'Введите корректную ссылку'})
          : setIsError({...isError, link: ''})
        break
    }
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
          <div className='alert-message'>
            {(isDirty.name && isError.name) && <span>{isError.name}</span>}
          </div>
          <input
            name='placeName'
            onChange={(event) => handleInputChange(event)}
            onBlur={(event) => blurHandler(event)}
            value={placeName}
            type='text'
            className='popup__input'
            placeholder='Название'
          />
        </div>
        <div className='popup__input-container'>
          <div className='alert-message'>
            {(isDirty.link && isError.link) && <span>{isError.link}</span>}
          </div>
          <input
            name='placePhotoLink'
            onChange={(event) => handleInputChange(event)}
            onBlur={(event) => blurHandler(event)}
            value={placePhotoLink}
            type='url'
            className='popup__input'
            placeholder='Ссылка на картинку'
          />
        </div>
        <button
          id='submit-add-image-form'
          type='submit'
          name='popupButton'
          className='button popup__button'
          disabled={!isValid}
        >
          {isFetching ?
            <img src={preloader} alt='Preloader' className='preloader'/>
            : <i className='material-icons'>add</i>}
        </button>
      </form>
    </>
  );
};

export default AddCardPopupForm;