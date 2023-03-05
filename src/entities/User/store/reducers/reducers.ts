import { IUserDataAction } from '@/shared/ts/interfaces';
import { USER_DATA } from '../actions/actions';
import { userDataInstance } from '../instances/instances';

export const userDataReducer = (
	state = userDataInstance,
	action: IUserDataAction
) => {
	switch (action.type) {
		case USER_DATA:
			action.payload;
			break;
		default:
			return state;
	}
};
