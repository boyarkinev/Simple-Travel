import { sharedInterfaces } from '@/shared';

export const USER = {
	DATA: 'USER_DATA',
	IS_REGISTRATION: 'IS_REGISTRATION',
	CLEAR_IS_REGISTRATION: 'CLEAR_IS_REGISTRATION',
};

export const setUserDataAC = (data: sharedInterfaces.IUserData) => ({
	type: USER.DATA,
	payload: data,
});

export const setRegistrationAC = (bool: boolean) => ({
	type: USER.IS_REGISTRATION,
	payload: bool,
});

export const clearRegistrationAC = () => ({
	type: USER.CLEAR_IS_REGISTRATION,
});
