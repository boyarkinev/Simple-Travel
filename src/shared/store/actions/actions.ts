import {
	ICardData,
	IImageViewData,
	IWarningData,
} from '@/shared/ts/interfaces';

export const ACTIONS = {
	IS_LOADING: 'IS_LOADING',
	WARNING_DATA: 'WARNING_DATA',
	CLEAR_WARNING_DATA: 'CLEAR_WARNING_DATA',
	IMAGE_VIEW_DATA: 'IMAGE_VIEW_DATA',
	CLEAR_IMAGE_VIEW_DATA: 'CLEAR_IMAGE_VIEW_DATA',
	LOADING_CARDS: 'LOADING_CARDS',
	IS_LOADING_CARDS: 'IS_LOADING_CARDS',
};

export const setIsLoadingAC = (bool: boolean) => {
	return {
		type: ACTIONS.IS_LOADING,
		payload: bool,
	};
};

export const setImageViewDataAC = (data: IImageViewData) => ({
	type: ACTIONS.IMAGE_VIEW_DATA,
	payload: data,
});

export const clearImageViewDataAC = () => ({
	type: ACTIONS.CLEAR_IMAGE_VIEW_DATA,
});

export const setWarningDataAC = (data: IWarningData) => ({
	type: ACTIONS.WARNING_DATA,
	payload: data,
});

export const clearWarningDataAC = () => ({
	type: ACTIONS.CLEAR_WARNING_DATA,
});

export const setCardsAC = (data: Array<ICardData>) => ({
	type: ACTIONS.LOADING_CARDS,
	payload: data,
});

export const setIsLoadCardsAC = (bool: boolean) => ({
	type: ACTIONS.IS_LOADING_CARDS,
	payload: bool,
});
