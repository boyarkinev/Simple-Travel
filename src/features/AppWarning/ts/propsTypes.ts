import { ISourceData } from '@/shared/ts/interfaces';

export interface IAlertPopupProps {
	text: string;
	sourceData: Array<ISourceData> | null;
	showCondition: boolean;
	preloaderCondition: boolean;
}
