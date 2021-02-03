import '../PopupStyles/PopupStyles.css';
import cn from 'classnames';

import React from 'react';
import {createPortal} from 'react-dom';
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
  divRef: any;
}

type TFormState = {
  cardData: ICardFormState;
};

const AddCardPopup: React.FC<IPopupProps> = (props) => {

  const {cardPopupVisible, changePlaceName, changePlacePhotoLink, onShow, divRef} = props;

  const popupClasses = cn(
    'popup', {
      'popup_is-shown': onShow.cardPopup,
    }
  );

  const handlePopupClose = () => {
    changePlaceName('');
    changePlacePhotoLink('');
    cardPopupVisible();
    divRef.current.parentElement.removeChild(divRef.current);
  };

  return createPortal(
    <div className={popupClasses}>
      <div className='popup__content'>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
        <AddCardPopupForm data={props} />
      </div>
    </div>, divRef.current
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