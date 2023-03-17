import './Header.css';

import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import {
	AppClassicButton,
	AppLogo,
	sharedActions,
	sharedInterfaces,
	template,
} from '@/shared';
import { userThunks } from '@/entities';

export const Header: React.FC = () => {
	const dispatch = useDispatch();

	const registerUser = (data: sharedInterfaces.IKeyString) => {
		if (+data.isChecked) {
			dispatch(userThunks.signUpUserThunk(data.email, data.password));
		} else {
			dispatch(userThunks.signInUserThunk(data.email, data.password));
		}
	};

	const authPopupData: sharedInterfaces.IPopupData = useMemo(() => {
		return {
			title: 'Авторизация',
			condition: true,
			button: 'Вперед!',
			onSubmit: registerUser,
			formData: template.registrationFormData,
			checkBox: {
				isShow: true,
				label: 'Создать учетную запись',
			},
		};
	}, []);

	return (
		<header className='header app__section'>
			<AppLogo fill='var(--app-light-active)' />
			<AppClassicButton
				label='Вход/Регистрация'
				buttonStyle='outline'
				style={{
					width: 'max-content',
					height: 'auto',
				}}
				onClick={() => {
					dispatch(sharedActions.setPopupFormDataAC(authPopupData));
				}}
			/>
		</header>
	);
};
