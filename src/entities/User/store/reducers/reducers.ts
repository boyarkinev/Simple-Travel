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
		default:
			return state;
	}
};

const userRegistrationInitial = false;

export const userRegistrationReducer = (
	state = userRegistrationInitial,
	action: { type: string; payload: boolean }
) => {
	switch (action.type) {
		case USER.IS_REGISTRATION:
			return action.payload;
		case USER.CLEAR_IS_REGISTRATION:
			return userRegistrationInitial;
		default:
			return state;
	}
};
