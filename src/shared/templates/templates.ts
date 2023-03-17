import { VALIDATION_REGEX } from '../constants/VALIDATION_REGEX';

export const placeFormData = [
	{
		name: 'placeName',
		placeholder: 'Название',
		type: 'text',
		regex: VALIDATION_REGEX.SIMPLE_TEXT,
		error: 'Некорректное название',
	},
	{
		name: 'placeLink',
		placeholder: 'Ссылка на картинку',
		type: 'url',
		regex: VALIDATION_REGEX.URL_TEXT,
		error: 'Некорректная ссылка',
	},
];

export const userFormData = [
	{
		name: 'userName',
		placeholder: 'Имя, фамилия',
		type: 'text',
		regex: VALIDATION_REGEX.SIMPLE_TEXT,
		error: 'Некорректное имя',
	},
	{
		name: 'photoURL',
		placeholder: 'Ссылка на аватар',
		type: 'url',
		regex: VALIDATION_REGEX.URL_TEXT,
		error: 'Некорректная информация',
	},
];

export const registrationFormData = [
	{
		name: 'email',
		placeholder: 'E-Mail',
		type: 'url',
		regex: VALIDATION_REGEX.EMAIL,
		error: 'Некорректный e-mail',
	},
	{
		name: 'password',
		placeholder: 'Пароль',
		type: 'password',
		regex: VALIDATION_REGEX.PASSWORD,
		error: 'Пароль должен содержать a-z, A-Z, 0-9, !@#$%&*-_',
	},
];
