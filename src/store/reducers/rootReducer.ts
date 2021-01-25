import {combineReducers} from 'redux';
import changeInputsReducer from './changeInputsReducer';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  popupData: changeInputsReducer,
  placesData: cardsReducer,
});

export default rootReducer;