import { combineReducers } from 'redux';
import changeInputsReducer from './changeInputsReducer';
import cardsReducer from './cardsReducer';

const reducers = combineReducers({
  popupData: changeInputsReducer,
  placesData: cardsReducer,
});

export default reducers;