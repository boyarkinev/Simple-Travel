import {IAction, IUserDataState} from '../../interfaces/interfaces';
import {FETCH_STORAGE_DATA_ACTION} from '../actions/actions';

const initialState: IUserDataState = {
  user: {
    name: '',
    job: '',
  },
};

const userStorageDataReducer = (state: IUserDataState = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_STORAGE_DATA_ACTION:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

export default userStorageDataReducer;
