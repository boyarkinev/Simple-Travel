import { VALIDATION_REGEX } from '../constants/VALIDATION_REGEX';
import { IFormData } from '@/shared/ts/interfaces';

export const placeInputsData: Array<IFormData> = [
	{
		name: 'placeName',
		placeholder: 'Название',
		type: 'text',
		regex: VALIDATION_REGEX.SIMPLE_TEXT,
	},
	{
		name: 'placeLink',
		placeholder: 'Ссылка на картинку',
		type: 'url',
		regex: VALIDATION_REGEX.URL_TEXT,
	},
];

export const userInputsData: Array<IFormData> = [
	{
		name: 'userName',
		placeholder: 'Имя, фамилия',
		type: 'text',
		regex: VALIDATION_REGEX.SIMPLE_TEXT,
	},
	{
		name: 'userJob',
		placeholder: 'Хобби или профессия',
		type: 'text',
		regex: VALIDATION_REGEX.SIMPLE_TEXT,
	},
];
