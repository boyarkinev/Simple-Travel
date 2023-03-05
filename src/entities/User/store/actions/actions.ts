import { IUserData } from '@/shared/ts/interfaces';

export const USER_DATA = 'PROFILE/USER_DATA';

export const setUserDataAC = (data: IUserData) => ({
	type: USER_DATA,
	payload: data,
});
