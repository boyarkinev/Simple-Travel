import { sharedInterfaces } from '@/shared';

export interface IPopupFormProps {
	inputs: Array<sharedInterfaces.IFormData>;
	buttonLabel: React.ReactNode;
	onSubmit: (param: sharedInterfaces.IKeyString) => void;
	checkBox?: sharedInterfaces.ICheckBox;
	message?: sharedInterfaces.IPopupFormMessage;
}
