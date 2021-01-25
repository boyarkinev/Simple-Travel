import './UserPopup.css';

import React from 'react';
import cn from 'classnames';
import {IFormState} from '../../../interfaces/interfaces';
import {bindActionCreators} from 'redux';
import {changePlaceLinkInputAC, changePlaceNameInputAC} from '../../../store/actionCreators/actionCreators';
import {connect} from 'react-redux';
import UserPopupForm from "../UserPopupForm/UserPopupForm";

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

const UserPopup: React.FC<IPopupProps> = (props) => {

  const {popupVisible, changePlaceName, changePlacePhotoLink, onShow} = props;

  const handlePopupClose = () => {
    changePlaceName('');
    changePlacePhotoLink('');
    popupVisible();
  };

  return (
    <div id='addImagePopup' className={cn('popup', {isShown: onShow})}>
      <div className='popup__content'>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
        <UserPopupForm data={props}/>
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
    changePlaceName: bindActionCreators(changePlaceNameInputAC, dispatch),
    changePlacePhotoLink: bindActionCreators(changePlaceLinkInputAC, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopup);