import './CardPopup.css';

import React from 'react';
import cn from 'classnames';
import CardPopupForm from '../CardPopupForm/CardPopupForm';
import {IFormState} from '../../../interfaces/interfaces';
import {bindActionCreators} from 'redux';
import {changeLinkInputAC, changeNameInputAC} from '../../../store/actionCreators/actionCreators';
import {connect} from 'react-redux';

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

const CardPopup: React.FC<IPopupProps> = (props) => {

  const {popupVisible, changePlaceName, changePlacePhotoLink, onShow} = props

  const handlePopupClose = () => {
    changePlaceName('');
    changePlacePhotoLink('');
    popupVisible();
  }

  return (
    <div id='addImagePopup' className={cn('popup', {isShown: onShow})}>
      <div className='popup__content'>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
        <CardPopupForm data={props}/>
      </div>
    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CardPopup);