import './Popup.css';
import close from '../../images/close.svg';

import React from 'react';
import cn from 'classnames';
import CardForm from '../CardForm/CardForm';

interface PopupProps {
  onShow: boolean,
  popupVisible(): void
}

const Popup: React.FC<PopupProps> = (props) => {

  const handlePopupClose = () => {
    props.popupVisible();
  }

  return (
    <div id='addImagePopup' className={cn('popup', {isShown: props.onShow})}>
      <div className='popup__content'>
        <img onClick={handlePopupClose} src={close} alt='Close' className='popup__close' />
        <CardForm />
      </div>
    </div>
  );
};

export default Popup;
