import { IFormData } from '@/shared/ts/interfaces';

export interface IPopupFormProps {
	inputs: Array<IFormData>;
	setIsPopupShow: React.Dispatch<React.SetStateAction<boolean>>;
	buttonLabel: React.ReactNode;
}
