import './App.css';

import React, { useState } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Popup from './components/Popup/Popup';
import CardList from './components/CardList/CardList';

const App: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const popupVisible = () =>
    !isActive ? setIsActive(true) : setIsActive(false);

  return (
    <div className='root'>
      <Header />
      <Profile popupVisible={popupVisible} />
      <CardList />
      <Popup onShow={isActive} popupVisible={popupVisible} />
    </div>
  );
};

export default App;
