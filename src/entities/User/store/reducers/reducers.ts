import { sharedInterfaces } from '@/shared';
import { USER } from '../actions/actions';
import { userDataInitials } from '../initials/initials';

export const userDataReducer = (
	state = userDataInitials,
	action: { type: string; payload: sharedInterfaces.IKeyString }
) => {
	switch (action.type) {
		case USER.DATA:
			return { ...state, ...action.payload };
		case USER.CLEAR_DATA:
			return userDataInitials;
		default:
			return state;
	}
};

export const isAuthReducer = (
	state = false,
	action: { type: string; payload: boolean }
) => {
	switch (action.type) {
		case USER.IS_AUTH:
			return action.payload;
		default:
			return state;
	}
};
