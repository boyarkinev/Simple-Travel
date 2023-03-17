import { sharedInterfaces } from '@/shared';

export interface IInputProps {
	input: sharedInterfaces.IFormData;
	onValue?: (param: sharedInterfaces.IOnValue) => void;
	alert?: React.ReactNode;
	isShowAlerts: boolean;
}
