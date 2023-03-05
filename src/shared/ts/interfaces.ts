export interface ICardData {
	placeName: string;
	placePhotoLink: string;
	date: string;
	likesCount: number;
	id: string;
}

export interface ICardsAction {
	type: string;
	payload?: Array<ICardData> | string;
}

export interface IImageViewData {
	link: string;
	name: string;
	onClose: () => void;
	showCondition: boolean;
}

export interface ISourceData {
	name: string;
	label: string;
	onClick: () => void;
}

export interface IWarningData {
	text: string;
	sourceData: Array<ISourceData> | null;
	showCondition: boolean;
}

export interface IUserData {
	name: string;
	occupation: string;
	avatar: string;
}

export interface IUserDataAction {
	type: string;
	payload: IUserData;
}

export interface IOnValue {
	name: string;
	regex: RegExp;
	value: string;
}

export interface IFormData {
	name: string;
	placeholder: string;
	type: string;
	regex: RegExp;
}

export interface IImageViewAction {
	type: string;
	payload: IImageViewData;
}

export interface IWarningDataAction {
	type: string;
	payload: IWarningData;
}

export interface ILoadAction {
	type: string;
	payload?: boolean;
}
