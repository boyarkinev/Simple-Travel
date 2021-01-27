import React from 'react';
import { setDataToLocalStorage } from '../../../services/localStorage.service';
import {loadStorageDataAC} from '../../../store/actionCreators/actionCreators';
import store from '../../../store/store';
import {connect} from 'react-redux';

interface IPopupProps {
  data: {
    userName: string;
    userJob: string;
    changeUserName(arg: string): void;
    changeUserJob(arg: string): void;
    userPopupVisible(): void
  },
  user: {
    name: string;
    job: string;
  }
}

const dispatch = (action: any) => store.dispatch(action);

const EditUserPopupForm: React.FC<IPopupProps> = (props) => {

  const {userName, userJob, changeUserName, changeUserJob, userPopupVisible} = props.data
  const {name, job} = props.user

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case 'userName':
        return changeUserName(event.target.value)
      case 'userJob':
        return changeUserJob(event.target.value)
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDataToLocalStorage(userName, userJob)
    dispatch(loadStorageDataAC())
    userPopupVisible()
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
            <span></span>
          </div>
          <input
            onChange={handleInputChange}
            value={userName}
            type='text'
            name='userName'
            className='popup__input'
            placeholder='Имя, фамилия'
          />
        </div>
        <div className='popup__input-container'>
          <div className='alert-message'>
            <span></span>
          </div>
          <input
            onChange={handleInputChange}
            value={userJob}
            type='text'
            name='userJob'
            className='popup__input'
            placeholder='Род занятий или профессия'
          />
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

const mapStateToProps = (state: any) => {
  return {
    user: state.userStorageData.user
  }
}

export default connect(mapStateToProps)(EditUserPopupForm)
