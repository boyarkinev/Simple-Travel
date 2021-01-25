import './Profile.css';
import avatar from '../../images/avatar.jpg';

import React from 'react';

interface MyProps {
  popupVisible(): void
}

const Profile: React.FC<MyProps> = (props) => {

  const {popupVisible} = props;

  const handlePopupOpen = () => {
    popupVisible();
  };

  return (
    <div className='profile root__section'>
      <div className='user-info'>
        <img src={avatar} alt='Avatar' className='user-info__photo'/>
        <div className='user-info__data'>
          <h1 className='user-info__name'>Jaques Causteau</h1>
          <p className='user-info__job'>Sailor, Researcher</p>
          <button className="button button__edit-profile">Edit</button>
        </div>
        <button onClick={handlePopupOpen} className='button button__add-card'>
          <i className='material-icons'>add</i>
        </button>
      </div>
    </div>
  );
};

export default Profile;