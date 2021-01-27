import './Profile.css';
import avatar from '../../images/avatar.jpg';

import React from 'react';
import {connect} from 'react-redux';

interface MyProps {
  cardPopupVisible(): void
  userPopupVisible(): void
  user: {
    [key: string]: string
  }
}

const Profile: React.FC<MyProps> = (props) => {

  const {name, job} = props.user

  const {cardPopupVisible, userPopupVisible} = props;

  const handleCardPopupOpen = () => {
    cardPopupVisible();
  };

  const handleUserPopupOpen = () => {
    userPopupVisible();
  };

  return (
    <div className='profile root__section'>
      <div className='user-info'>
        <img src={avatar} alt='Avatar' className='user-info__photo'/>
        <div className='user-info__data'>
          <h1 className='user-info__name'>
            {name !== '' ? name : 'Иван Сусанин'}
          </h1>
          <p className='user-info__job'>
            {job !== '' ? job : 'Волонтёр, проводник'}
          </p>
          <button onClick={handleUserPopupOpen} className="button button__edit-profile">Редактировать</button>
        </div>
        <button onClick={handleCardPopupOpen} className='button button__add-card'>
          <i className='material-icons'>add</i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.userStorageData.user
  }
}

export default connect(mapStateToProps)(Profile);