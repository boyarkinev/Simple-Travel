import { combineReducers } from 'redux';
import { userReducers } from '@/entities';
import { sharedReducers } from '@/shared';

export const rootReducer = combineReducers({
	isLoading: sharedReducers.isLoadingReducer,
	places: sharedReducers.placesReducer,
	imageView: sharedReducers.imageViewReducer,
	warningData: sharedReducers.warningDataReducer,
	popupData: sharedReducers.popupDataReducer,
	popupFormMessage: sharedReducers.popupFormMessageReducer,
	userData: userReducers.userDataReducer,
});
