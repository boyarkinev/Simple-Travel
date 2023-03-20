export const REQUESTS_ERRORS = {
	USER_NOT_FOUND: 'auth/user-not-found',
	USER_ALREADY_EXIST: 'auth/email-already-in-use',
	WRONG_PASSWORD: 'auth/wrong-password',
};

export const WARNING_DATA = {
	REGISTER_SUCCESS: {
		text: 'Вы успешно зарегистрировались. \n Заполните ваши данные и авторизуйтесь',
		textColor: 'var(--app-focus-active)',
		isShow: true,
	},
	WRONG_PASSWORD: {
		text: 'Неверный пароль.',
		isShow: true,
	},
	USER_NOT_FOUND: {
		text: 'Пользователя с таким e-mail не существует.',
		isShow: true,
	},
	USER_EXIST: {
		text: 'Такой E-Mail уже зарегистрирован.',
		isShow: true,
	},
};
