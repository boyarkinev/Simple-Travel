import '../PopupStyles/PopupStyles.css';

import React from 'react';
import cn from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {ICardFormState} from '../../../interfaces/interfaces';
import {changePlaceLinkInputAC, changePlaceNameInputAC} from '../../../store/actionCreators/actionCreators';
import AddCardPopupForm from "../AddCardPopupForm/AddCardPopupForm";

interface IPopupProps {
  changePlaceName(arg: string): void;
  changePlacePhotoLink(arg: string): void;
  placeName: string;
  placePhotoLink: string;
  cardPopupVisible(): void;
  onShow: { [key: string]: boolean };
}

type TFormState = {
  cardData: ICardFormState;
};

const AddCardPopup: React.FC<IPopupProps> = (props) => {

  const {cardPopupVisible, changePlaceName, changePlacePhotoLink, onShow} = props;

  const handlePopupClose = () => {
    changePlaceName('');
    changePlacePhotoLink('');
    cardPopupVisible();
  };

  const popupClasses = cn(
    'popup', {
      'popup_is-shown': onShow.cardPopup,
    }
  );

  return (
    <div className={popupClasses}>
      <div className='popup__content'>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
        <AddCardPopupForm data={props}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state: TFormState) => {
  return {
    placeName: state.cardData.placeName,
    placePhotoLink: state.cardData.placePhotoLink,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changePlaceName: bindActionCreators(changePlaceNameInputAC, dispatch),
    changePlacePhotoLink: bindActionCreators(changePlaceLinkInputAC, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardPopup);