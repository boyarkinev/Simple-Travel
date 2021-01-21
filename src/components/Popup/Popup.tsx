import './Popup.css';
import close from '../../images/close.svg';

import React from 'react';
import cn from 'classnames';
import PopupForm from '../PopupForm/PopupForm';
import { IFormState } from '../../interfaces/interfaces';
import { bindActionCreators } from 'redux';
import { changeLinkInputAC, changeNameInputAC } from '../../store/actionCreators/actionCreators';
import { connect } from 'react-redux';

interface IPopupProps {
  onShow: boolean;
  changePlaceName(arg: string): void;
  changePlacePhotoLink(arg: string): void;
  placeName: string;
  placePhotoLink: string;
  popupVisible(): void;
}

type TFormState = {
  popupData: IFormState;
};

const Popup: React.FC<IPopupProps> = (props) => {

  const { popupVisible, changePlaceName, changePlacePhotoLink } = props

  const handlePopupClose = () => {
    changePlaceName('');
    changePlacePhotoLink('');
    popupVisible();
  }

  return (
    <div id='addImagePopup' className={cn('popup', {isShown: props.onShow})}>
      <div className='popup__content'>
        <img onClick={handlePopupClose} src={close} alt='Close' className='popup__close' />
        <PopupForm data={props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: TFormState) => {
  return {
    placeName: state.popupData.placeName,
    placePhotoLink: state.popupData.placePhotoLink,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changePlaceName: bindActionCreators(changeNameInputAC, dispatch),
    changePlacePhotoLink: bindActionCreators(changeLinkInputAC, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);