import { IImageViewData, IWarningData } from '@/shared/ts/interfaces';

interface IState {
	isLoading: boolean;
	places: [];
	userStorageData: {};
	imageView: IImageViewData;
	warningData: IWarningData;
}

export const isLoading = (state: IState) => state.isLoading;
export const places = (state: IState) => state.places;
export const imageView = (state: IState) => state.imageView;
export const warningData = (state: IState) => state.warningData;
