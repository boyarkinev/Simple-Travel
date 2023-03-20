import { sharedInterfaces } from '@/shared';

export const USER = {
	DATA: 'DATA',
	CLEAR_DATA: 'CLEAR_DATA',
	IS_AUTH: 'IS_AUTH',
};

export const setUserDataAC = (data: sharedInterfaces.IUserData) => ({
	type: USER.DATA,
	payload: data,
});

export const clearUserDataAC = () => ({
	type: USER.CLEAR_DATA,
});

export const setIsAuthAC = (bool: boolean) => ({
	type: USER.IS_AUTH,
	payload: bool,
});
