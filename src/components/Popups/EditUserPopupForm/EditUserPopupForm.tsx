import React, {useEffect, useState} from 'react';
import {setDataToLocalStorage} from '../../../services/localStorage.service';
import {loadStorageDataAC} from '../../../store/actionCreators/actionCreators';
import store from '../../../store/store';
import {connect} from 'react-redux';
import preloader from '../../../images/preloader-white.svg';

interface IPopupProps {
  data: {
    userName: string;
    userJob: string;
    changeUserName(arg: string): void;
    changeUserJob(arg: string): void;
    userPopupVisible(): void;
    divRef: any;
  },
}

const dispatch = (action: any) => store.dispatch(action);

const EditUserPopupForm: React.FC<IPopupProps> = (props) => {

  const {userName, userJob, changeUserName, changeUserJob, userPopupVisible, divRef} = props.data

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<{ [key: string]: boolean }>({name: false, link: false});
  const [isError, setIsError] = useState<{ [key: string]: string }>({name: 'Поле не должно быть пустым', job: 'Поле не должно быть пустым'});
  const [isValid, setIsValid] = useState<boolean>(false)

  useEffect(() => {
    (isError.name || isError.job)
      ? setIsValid(false)
      : setIsValid(true)
  }, [isError.name, isError.job])

  const handleOnBlur = (event: any) => {
    switch (event.target.name) {
      case 'userName':
        setIsDirty({...isDirty, name: true});
        break
      case 'userJob':
        setIsDirty({...isDirty, job: true});
        break
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case 'userName':
        changeUserName(event.target.value)
        const nameRegex = /([A-Za-z]|[А-ЯЁа-яё])/gi
        !nameRegex.test(event.target.value)
          ? setIsError({...isError, name: 'Введите корректное имя'})
          : setIsError({...isError, name: ''})
          break
      case 'userJob':
        changeUserJob(event.target.value)
        const jobRegex = /([A-Za-z]|[А-ЯЁа-яё])/gi
        !jobRegex.test(event.target.value)
          ? setIsError({...isError, job: 'Введите корректную информацию'})
          : setIsError({...isError, job: ''})
          break
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFetching(true)
    setDataToLocalStorage(userName, userJob);
    dispatch(loadStorageDataAC());
    userPopupVisible();
    setIsFetching(false);
    divRef.current.parentElement.removeChild(divRef.current);
  }

  return (
    <>
      <h3 className='popup__title'>Редактировать</h3>
      <form
        onSubmit={handleFormSubmit}
        id='edit-user-form'
        className='popup__form'
      >
        <div className='popup__input-container'>
          <div className='alert-message'>
            {(isDirty.name && isError.name) && <span>{isError.name}</span>}
          </div>
          <input
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            value={userName}
            type='text'
            name='userName'
            className='popup__input'
            placeholder='Имя, фамилия'
          />
        </div>
        <div className='popup__input-container'>
          <div className='alert-message'>
            {(isDirty.job && isError.name) && <span>{isError.job}</span>}
          </div>
          <input
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            value={userJob}
            type='text'
            name='userJob'
            className='popup__input'
            placeholder='Род занятий или профессия'
          />
        </div>
        <button
          disabled={!isValid}
          type='submit'
          name='popupButton'
          className='button popup__button'>
          {isFetching ?
            <img src={preloader} alt='Preloader' className='preloader'/>
            : 'Сохранить'}</button>
      </form>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.userStorageData.user
  }
}

export default connect(mapStateToProps)(EditUserPopupForm)
