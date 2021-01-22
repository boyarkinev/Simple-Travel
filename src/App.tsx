import './App.css';

import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Popup from './components/Popups/CardPopup/CardPopup';
import CardList from './components/CardList/CardList';
import {loadDataAC} from "./store/actionCreators/actionCreators";
import store from "./store/store";

const dispatch = (action: any) => store.dispatch(action);

const App: React.FC = () => {

  useEffect(() => {
    dispatch(loadDataAC());
  }, []);

  const [isActive, setIsActive] = useState<boolean>(false);

  const popupVisible = () =>
    !isActive ? setIsActive(true) : setIsActive(false);

  return (
    <div className='root'>
      <Header/>
      <Profile popupVisible={popupVisible}/>
      <CardList/>
      <Popup onShow={isActive} popupVisible={popupVisible}/>
    </div>
  );
};

export default App;
