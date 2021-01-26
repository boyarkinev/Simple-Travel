import '../PopupStyles/PopupStyles.css';

import React from "react";
import cn from "classnames";

interface IImagePopupProps {
  link: string
  name: string
  onShow: { imagePopup: boolean };
  changeImagePopupVisible(): void
}

const ImagePopup: React.FC<IImagePopupProps> = (props) => {

  const {link, name, onShow, changeImagePopupVisible} = props

  const handlePopupClose = () => {
    changeImagePopupVisible()
  };

  const popupClasses = cn(
    'popup', {
      'popup_is-shown': onShow.imagePopup,
    },
  );

  return (
    <div className={popupClasses}>
      <div className="popup-card">
        <img src={link} alt={name} className="popup-card__image"/>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
      </div>
    </div>
  );
};

export default ImagePopup;