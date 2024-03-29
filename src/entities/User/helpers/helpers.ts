import { userInterfaces } from '@/entities';

export const setUserDataHelper = (user: userInterfaces.IUserData) => {
	return {
		accessToken: user.accessToken,
		uid: user.uid,
		displayName: user.displayName || 'Гость',
		email: user.email,
		photoURL: user.photoURL,
	};
};

export const setUserToken = (accessToken: string) => {
	localStorage.setItem('accessToken', accessToken);
};

export const getUserToken = () => {
	return localStorage.getItem('accessToken');
};

export const clearUserToken = () => {
	localStorage.remove('accessToken');
};
