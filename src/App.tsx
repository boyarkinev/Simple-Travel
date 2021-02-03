import './App.css';

import React, {useEffect, useRef, useState} from 'react';
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

  const divRef = useRef(document.createElement('div'));

  const createModalContainer = () => {
    document.body.appendChild(divRef.current);
  }

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
      <Profile
        cardPopupVisible={addCardPopupVisible}
        userPopupVisible={editUserPopupVisible}
        createModalContainer={createModalContainer} />
      <CardList />
      <AddCardPopup
        onShow={isShown}
        cardPopupVisible={addCardPopupVisible}
        divRef={divRef} />
      <EditUserPopup
        onShow={isShown}
        userPopupVisible={editUserPopupVisible}
        divRef={divRef} />
    </div>
  );
};

export default App;
