import { sharedInterfaces } from '@/shared';
import { ACTIONS } from '../actions/actions';
import {
	ImageDataInitial,
	popupInitial,
	warningDataInitial,
} from '../initials/initials';

export const placesReducer = (
	state = [],
	action: sharedInterfaces.ICardsAction
) => {
	switch (action.type) {
		case ACTIONS.CARDS:
			return action.payload;
		default:
			return state;
	}
};

export const isLoadingReducer = (
	state = false,
	action: sharedInterfaces.ILoadAction
) => {
	switch (action.type) {
		case ACTIONS.IS_LOADING:
			return action.payload;
		default:
			return state;
	}
};

export const imageViewReducer = (
	state = ImageDataInitial,
	action: sharedInterfaces.IImageViewAction
) => {
	switch (action.type) {
		case ACTIONS.IMAGE_VIEW_DATA:
			return action.payload;
		case ACTIONS.CLEAR_IMAGE_VIEW_DATA:
			return ImageDataInitial;
		default:
			return state;
	}
};

export const warningDataReducer = (
	state = warningDataInitial,
	action: sharedInterfaces.IWarningDataAction
) => {
	switch (action.type) {
		case ACTIONS.WARNING_DATA:
			return action.payload;
		case ACTIONS.CLEAR_WARNING_DATA:
			return warningDataInitial;
		default:
			return state;
	}
};

export const popupDataReducer = (
	state = popupInitial,
	action: { type: string; payload: sharedInterfaces.IPopupData }
) => {
	switch (action.type) {
		case ACTIONS.POPUP_FORM_DATA:
			return action.payload;
		case ACTIONS.CLEAR_POPUP_FORM_DATA:
			return popupInitial;
		default:
			return state;
	}
};

const popupFormMessageInitial = {
	text: '',
	textColor: null,
	isShow: false,
};

export const popupFormMessageReducer = (
	state = popupFormMessageInitial,
	action: { type: string; payload: sharedInterfaces.IPopupFormMessage }
) => {
	switch (action.type) {
		case ACTIONS.POPUP_FORM_MESSAGE:
			return action.payload;
		default:
			return state;
	}
};
