import { sharedInterfaces } from '@/shared';

export const userData = (state: sharedInterfaces.IState) => state.userData;
export const isRegistration = (state: sharedInterfaces.IState) =>
	state.isRegistration;
