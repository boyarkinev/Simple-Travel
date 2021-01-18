import { combineReducers } from 'redux';
import changeInputsReducer from './changeInputsReducer';
import placesReducer from './placesReducer';

const reducers = combineReducers({
  popupData: changeInputsReducer,
  placesData: placesReducer,
});

export default reducers;