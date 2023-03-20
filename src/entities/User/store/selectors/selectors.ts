import { sharedInterfaces } from '@/shared';

export const userData = (state: sharedInterfaces.IState) => state.userData;
export const isUserFetch = (state: sharedInterfaces.IState) =>
	state.isUserFetch;
