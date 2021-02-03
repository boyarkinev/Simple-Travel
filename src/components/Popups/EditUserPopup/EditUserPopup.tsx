import '../PopupStyles/PopupStyles.css';
import cn from 'classnames';

import React from 'react';
import {createPortal} from 'react-dom';
import {IUserFormState} from '../../../interfaces/interfaces';
import {bindActionCreators} from 'redux';
import {changeUserJobInputAC, changeUserNameInputAC} from '../../../store/actionCreators/actionCreators';
import {connect} from 'react-redux';
import EditUserPopupForm from "../EditUserPopupForm/EditUserPopupForm";

interface IPopupProps {
  onShow: { [key: string]: boolean };
  changeUserName(arg: string): void;
  changeUserJob(arg: string): void;
  userName: string;
  userJob: string;
  userPopupVisible(): void;
  divRef: any
}

type TFormState = {
  userData: IUserFormState;
};

const EditUserPopup: React.FC<IPopupProps> = (props) => {

  const {userPopupVisible, onShow, divRef} = props;

  const handlePopupClose = () => {
    userPopupVisible();
    divRef.current.parentElement.removeChild(divRef.current);
  };

  const popupClasses = cn(
    'popup', {
      'popup_is-shown': onShow.userPopup,
    }
  );

  return createPortal(
    <div id='addImagePopup' className={popupClasses}>
      <div className='popup__content'>
        <i onClick={handlePopupClose} className='material-icons popup__close'>clear</i>
        <EditUserPopupForm data={props}/>
      </div>
    </div>, divRef.current
  );
};

const mapStateToProps = (state: TFormState) => {
  return {
    userName: state.userData.userName,
    userJob: state.userData.userJob,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeUserName: bindActionCreators(changeUserNameInputAC, dispatch),
    changeUserJob: bindActionCreators(changeUserJobInputAC, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPopup);