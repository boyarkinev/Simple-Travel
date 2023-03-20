import { combineReducers } from 'redux';
import { cardReducers, userReducers } from '@/entities';
import { sharedReducers } from '@/shared';

export const rootReducer = combineReducers({
	isLoading: sharedReducers.isLoadingReducer,
	places: cardReducers.placesReducer,
	imageView: sharedReducers.imageViewReducer,
	warningData: sharedReducers.warningDataReducer,
	popupData: sharedReducers.popupDataReducer,
	popupFormMessage: sharedReducers.popupFormMessageReducer,
	isAuth: userReducers.isAuthReducer,
	userData: userReducers.userDataReducer,
});
