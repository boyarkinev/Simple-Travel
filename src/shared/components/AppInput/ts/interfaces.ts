import { IFormData, IOnValue } from '@/shared/ts/interfaces';

export interface IInputProps {
	input: IFormData;
	onValue?: (arg: IOnValue) => void;
	alert?: React.ReactNode;
	isShowAlerts: boolean;
}
