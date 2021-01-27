import './App.css';

import React, {useEffect, useState} from 'react';
import store from './store/store';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import CardList from './components/CardList/CardList';
import {loadDataAC, loadStorageDataAC} from './store/actionCreators/actionCreators';
import AddCardPopup from './components/Popups/AddCardPopup/AddCardPopup';
import EditUserPopup from './components/Popups/EditUserPopup/EditUserPopup';

type TUseState = {
  [key: string]: boolean
}

const dispatch = (action: any) => store.dispatch(action);

const App: React.FC = () => {

  useEffect(() => {
    dispatch(loadDataAC());
  }, []);

  useEffect(() => {
    dispatch(loadStorageDataAC());
  }, []);

  const [isShown, setIsShown] = useState<TUseState>({cardPopup: false, userPopup: false});

  const addCardPopupVisible = () =>
    !isShown.cardPopup
      ? setIsShown({...isShown, cardPopup: true})
      : setIsShown({...isShown, cardPopup: false});

  const editUserPopupVisible = () =>
    !isShown.userPopup
      ? setIsShown({...isShown, userPopup: true})
      : setIsShown({...isShown, userPopup: false});

  return (
    <div className='root'>
      <Header/>
      <Profile cardPopupVisible={addCardPopupVisible} userPopupVisible={editUserPopupVisible}/>
      <CardList/>
      <AddCardPopup onShow={isShown} cardPopupVisible={addCardPopupVisible}/>
      <EditUserPopup onShow={isShown} userPopupVisible={editUserPopupVisible}/>
    </div>
  );
};

export default App;
