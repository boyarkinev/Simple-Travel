import {combineReducers} from 'redux';
import changePlacesPopupInputsReducer from './changePlacesPopupInputsReducer';
import placesServerDataReducer from './placesServerDataReducer';
import changeUserPopupInputsReducer from './changeUserPopupInputsReducer';
import userStorageDataReducer from './userStorageDataReducer';

const rootReducer = combineReducers({
  cardData: changePlacesPopupInputsReducer,
  placesServerData: placesServerDataReducer,
  userData: changeUserPopupInputsReducer,
  userStorageData: userStorageDataReducer
});

export default rootReducer;