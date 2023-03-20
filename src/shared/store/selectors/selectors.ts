import { sharedInterfaces } from '@/shared';

export const isLoading = (state: sharedInterfaces.IState) => state.isLoading;
export const imageView = (state: sharedInterfaces.IState) => state.imageView;
export const warningData = (state: sharedInterfaces.IState) =>
	state.warningData;
export const popupData = (state: sharedInterfaces.IState) => state.popupData;
export const popupFormMessage = (state: sharedInterfaces.IState) =>
	state.popupFormMessage;
