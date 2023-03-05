import { combineReducers } from 'redux';
import { userDataReducer } from '@/entities/User/store/reducers/reducers';
import {
	imageViewReducer,
	isLoadingReducer,
	placesReducer,
	warningDataReducer,
} from '@/shared/store/reducers/reducers';

export const rootReducer = combineReducers({
	isLoading: isLoadingReducer,
	places: placesReducer,
	imageView: imageViewReducer,
	warningData: warningDataReducer,
	userData: userDataReducer,
});
