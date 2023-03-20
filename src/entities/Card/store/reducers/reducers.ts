import { cardInterfaces } from '@/entities';
import { CARD_ACTIONS } from '../actions/actions';

export const placesReducer = (
	state = [],
	action: cardInterfaces.ICardsAction
) => {
	switch (action.type) {
		case CARD_ACTIONS.CARDS:
			return action.payload;
		default:
			return state;
	}
};
