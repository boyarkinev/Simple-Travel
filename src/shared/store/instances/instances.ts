import { IImageViewData, IWarningData } from '@/shared/ts/interfaces';

export const ImageDataInstance: IImageViewData = {
	link: '',
	name: '',
	onClose: () => {},
	showCondition: false,
};

export const warningDataInstance: IWarningData = {
	text: '',
	sourceData: null,
	showCondition: false,
};
