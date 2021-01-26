import '../PopupStyles/PopupStyles.css';

import preloader from '../../../images/preloader-black.svg';

import React, {useState} from 'react';
import cn from "classnames";

import store from "../../../store/store";
import {deleteDataToDB} from "../../../services/api.service";
import {IAction} from "../../../interfaces/interfaces";
import {loadDataAC} from "../../../store/actionCreators/actionCreators";

interface IAlertPopupProps {
  onShow: { alertPopup: boolean };
  alertPopupVisible(): void
}

const dispatch = (action: IAction) => store.dispatch(action);

const DeleteAlertPopup: React.FC<IAlertPopupProps> = (props) => {

  const {onShow, alertPopupVisible} = props;

  const [isFetching, setIsFetching] = useState<boolean>(false)

  const handleConfirmDeleteButtonClick = async (event: React.BaseSyntheticEvent) => {
    setIsFetching(true)
    await deleteDataToDB(event.target.closest('.place-card').id);
    dispatch(loadDataAC());
    alertPopupVisible();
    setIsFetching(false)
  };

  const handleAbortDeleteButtonClick = () => {
    alertPopupVisible()
  }

  const popupClasses = cn(
    'popup', {
      'popup_is-shown': onShow.alertPopup,
    },
  );

  return (
    <div className={popupClasses}>
      <div className='popup__content'>
        <p className='popup__text'>Выбранная карточка будет удалена</p>
        <div className="popup__preloader-wrapper">
          { isFetching && <img src={preloader} alt='Preloader' /> }
        </div>
        <div className='popup__button-wrapper'>
          <button
            onClick={handleConfirmDeleteButtonClick}
            className='button popup__button'>OK</button>
          <button
            onClick={handleAbortDeleteButtonClick}
            className='button popup__button'>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlertPopup;