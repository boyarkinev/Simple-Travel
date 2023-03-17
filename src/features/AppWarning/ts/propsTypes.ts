import { sharedInterfaces } from '@/shared';

export interface IAlertPopupProps {
	text: string;
	sourceData: Array<sharedInterfaces.ISourceData> | null;
	showCondition: boolean;
	preloaderCondition: boolean;
}
