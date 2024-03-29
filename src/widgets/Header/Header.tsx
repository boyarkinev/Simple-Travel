import './Header.css';

import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';

import {
	AppClassicButton,
	AppLogo,
	sharedActions,
	sharedInterfaces,
	template,
} from '@/shared';
import { userActions, userThunks, userSelectors } from '@/entities';

export const Header: React.FC = () => {
	const dispatch = useDispatch();
	const user = useSelector(userSelectors.userData);

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

	const handleAuth = () => {
		const auth = getAuth();
		if (!auth.currentUser) {
			dispatch(sharedActions.setPopupFormDataAC(authPopupData));
		} else {
			signOut(auth)
				.then(() => {
					dispatch(userActions.clearUserDataAC());
				})
				.catch(error => {
					console.error(error);
				});
		}
	};

	return (
		<header className='header app__section'>
			<AppLogo fill='var(--app-light-active)' />
			<AppClassicButton
				label={!user.accessToken ? 'Вход/Регистрация' : 'Выйти'}
				buttonStyle='outline'
				style={{
					width: 'max-content',
					height: 'auto',
				}}
				onClick={handleAuth}
			/>
		</header>
	);
};
