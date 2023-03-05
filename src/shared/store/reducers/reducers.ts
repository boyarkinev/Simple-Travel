import {
	ICardsAction,
	IImageViewAction,
	ILoadAction,
	IWarningDataAction,
} from '@/shared/ts/interfaces';
import { ACTIONS } from '../actions/actions';
import { ImageDataInstance, warningDataInstance } from '../instances/instances';

export const placesReducer = (state = [], action: ICardsAction) => {
	switch (action.type) {
		case ACTIONS.LOADING_CARDS:
			return action.payload;
		default:
			return state;
	}
};

export const isLoadingReducer = (state = false, action: ILoadAction) => {
	switch (action.type) {
		case ACTIONS.IS_LOADING:
			return action.payload;
		default:
			return state;
	}
};

export const imageViewReducer = (
	state = ImageDataInstance,
	action: IImageViewAction
) => {
	switch (action.type) {
		case ACTIONS.IMAGE_VIEW_DATA:
			return action.payload;
		case ACTIONS.CLEAR_IMAGE_VIEW_DATA:
			return ImageDataInstance;
		default:
			return state;
	}
};

export const warningDataReducer = (
	state = warningDataInstance,
	action: IWarningDataAction
) => {
	switch (action.type) {
		case ACTIONS.WARNING_DATA:
			return action.payload;
		case ACTIONS.CLEAR_WARNING_DATA:
			return warningDataInstance;
		default:
			return state;
	}
};
