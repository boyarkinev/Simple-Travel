import {IAction, IUserFormState} from '../../interfaces/interfaces';
import {
  CHANGE_USER_NAME_INPUT_ACTION,
  CHANGE_USER_JOB_INPUT_ACTION,
} from '../actions/actions';

const initialState: IUserFormState = {
  userName: '',
  userJob: '',
};

const changeUserPopupInputsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_USER_NAME_INPUT_ACTION:
      return {...state, userName: action.payload};
    case CHANGE_USER_JOB_INPUT_ACTION:
      return {...state, userJob: action.payload};
    default:
      return state;
  }
};

export default changeUserPopupInputsReducer;