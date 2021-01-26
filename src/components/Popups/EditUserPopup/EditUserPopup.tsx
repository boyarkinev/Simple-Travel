import '../PopupStyles/PopupStyles.css';

import React from 'react';
import cn from 'classnames';
import {IFormState} from '../../../interfaces/interfaces';
import {bindActionCreators} from 'redux';
import {changePlaceLinkInputAC, changePlaceNameInputAC} from '../../../store/actionCreators/actionCreators';
import {connect} from 'react-redux';
import EditUserPopupForm from "../EditUserPopupForm/EditUserPopupForm";

interface IPopupProps {
  onShow: { userPopup: boolean };
  changePlaceName(arg: string): void;
  changePlacePhotoLink(arg: string): void;
  placeName: string;
  placePhotoLink: string;
  userPopupVisible(): void;
}

type TFormState = {
  popupData: IFormState;
};

const EditUserPopup: React.FC<IPopupProps> = (props) => {

  const {userPopupVisible, changePlaceName, changePlacePhotoLink, onShow} = props;

  const handlePopupClose = () => {
    changePlaceName('');
    changePlacePhotoLink('');
    userPopupVisible();
  };

  const popupClasses = cn(
    'popup', {
      'popup_is-shown': onShow.userPopup,
    }
  );

  return (
    <div id='addImagePopup' className={popupClasses}>
      <div className='popup__content'>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
        <EditUserPopupForm data={props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPopup);