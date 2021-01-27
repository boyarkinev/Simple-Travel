import '../PopupStyles/PopupStyles.css';

import React from 'react';
import cn from 'classnames';
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
}

type TFormState = {
  userData: IUserFormState;
};

const EditUserPopup: React.FC<IPopupProps> = (props) => {

  const {userPopupVisible, onShow} = props;

  const handlePopupClose = () => {
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