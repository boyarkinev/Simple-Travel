import { cardInterfaces } from '@/entities';

export const CARD_ACTIONS = {
	CARDS: 'CARDS',
	IS_CARDS: 'IS_CARDS',
};

export const setCardsAC = (data: Array<cardInterfaces.ICardData>) => ({
	type: CARD_ACTIONS.CARDS,
	payload: data,
});

export const setIsLoadCardsAC = (bool: boolean) => ({
	type: CARD_ACTIONS.IS_CARDS,
	payload: bool,
});
