export interface IKeyString {
	[key: string]: string;
}

export interface IKeyBool {
	[key: string]: boolean;
}

export interface IKeyStrBoolNum {
	[key: string]: string | boolean | number;
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
	accessToken?: string;
	uid: string;
	displayName: string | null;
	email: string | null;
	photoURL: string | null;
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

export interface IFormData {
	name: string;
	placeholder: string;
	type: string;
	regex: RegExp;
	error: string;
}

export interface ICheckBox {
	isShow: boolean;
	label: string;
}

export interface IPopupData {
	title?: string;
	condition: boolean;
	button: string | React.ReactNode;
	onSubmit: (data: IKeyString) => void;
	formData: Array<IFormData>;
	checkBox?: ICheckBox;
}

export interface IPopupFormMessage {
	text: string;
	textColor?: string;
	isShow: boolean;
}

export interface IState {
	isLoading: boolean;
	places: [];
	imageView: IImageViewData;
	warningData: IWarningData;
	popupData: IPopupData;
	popupFormMessage: IPopupFormMessage;
	isAuth: boolean;
	userData: IUserData;
}
