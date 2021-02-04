import '../PopupStyles/PopupStyles.css';

import React from 'react';
import cn from 'classnames';
import {createPortal} from 'react-dom';

interface IImagePopupProps {
  link: string
  name: string
  onShow: { imagePopup: boolean };
  changeImagePopupVisible(): void;
  divRef: any;
}

const ImagePopup: React.FC<IImagePopupProps> = (props) => {

  const {link, name, onShow, changeImagePopupVisible, divRef} = props;

  const handlePopupClose = () => {
    changeImagePopupVisible();
    divRef.current.parentElement.removeChild(divRef.current);
  };

  const popupClasses = cn(
    'popup', {
      'popup_is-shown': onShow.imagePopup,
    },
  );

  return createPortal(
    <div className={popupClasses}>
      <div className="popup-card">
        <img src={link} alt={name} className="popup-card__image"/>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
      </div>
    </div>, divRef.current
  );
};

export default ImagePopup;