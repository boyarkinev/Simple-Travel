import { sharedInterfaces } from '@/shared';

export const ACTIONS = {
	IS_LOADING: 'IS_LOADING',
	WARNING_DATA: 'WARNING_DATA',
	CLEAR_WARNING_DATA: 'CLEAR_WARNING_DATA',
	IMAGE_VIEW_DATA: 'IMAGE_VIEW_DATA',
	CLEAR_IMAGE_VIEW_DATA: 'CLEAR_IMAGE_VIEW_DATA',
	CARDS: 'CARDS',
	IS_CARDS: 'IS_CARDS',
	POPUP_FORM_DATA: 'POPUP_FORM_DATA',
	CLEAR_POPUP_FORM_DATA: 'CLEAR_POPUP_FORM_DATA',
	POPUP_FORM_MESSAGE: 'POPUP_FORM_MESSAGE',
};

export const setIsLoadingAC = (bool: boolean) => {
	return {
		type: ACTIONS.IS_LOADING,
		payload: bool,
	};
};

export const setImageViewDataAC = (data: sharedInterfaces.IImageViewData) => ({
	type: ACTIONS.IMAGE_VIEW_DATA,
	payload: data,
});

export const clearImageViewDataAC = () => ({
	type: ACTIONS.CLEAR_IMAGE_VIEW_DATA,
});

export const setWarningDataAC = (data: sharedInterfaces.IWarningData) => ({
	type: ACTIONS.WARNING_DATA,
	payload: data,
});

export const clearWarningDataAC = () => ({
	type: ACTIONS.CLEAR_WARNING_DATA,
});

export const setCardsAC = (data: Array<sharedInterfaces.ICardData>) => ({
	type: ACTIONS.CARDS,
	payload: data,
});

export const setIsLoadCardsAC = (bool: boolean) => ({
	type: ACTIONS.IS_CARDS,
	payload: bool,
});

export const setPopupFormDataAC = (data: sharedInterfaces.IPopupData) => ({
	type: ACTIONS.POPUP_FORM_DATA,
	payload: data,
});

export const clearPopupFormDataAC = () => ({
	type: ACTIONS.CLEAR_POPUP_FORM_DATA,
});

export const popupFormMessageAC = (
	data: sharedInterfaces.IPopupFormMessage
) => ({
	type: ACTIONS.POPUP_FORM_MESSAGE,
	payload: data,
});
