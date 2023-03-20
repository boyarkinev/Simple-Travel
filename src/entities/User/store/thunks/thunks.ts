import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { sharedActions, sharedTypes } from '@/shared';
import { setUserDataAC } from '../actions/actions';
import { REQUESTS_ERRORS, userHelpers, userTemplates } from '@/entities';

const {
	setIsLoadingAC,
	popupFormMessageAC,
	setPopupFormDataAC,
	clearPopupFormDataAC,
} = sharedActions;

export function signUpUserThunk(email: string, password: string) {
	const auth = getAuth();
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user;
				console.log('🚀 ~ user', user);
				dispatch(clearPopupFormDataAC());
				dispatch(
					popupFormMessageAC({
						text: 'Вы успешно зарегистрировались. \n Заполните ваши данные и авторизуйтесь',
						textColor: 'var(--app-focus-active)',
						isShow: true,
					})
				);
				dispatch(setPopupFormDataAC(userTemplates.userPopupData(dispatch)));
			})
			.catch(error => {
				const errorCode = error.code;
				console.log('🚀 ~ errorCode', errorCode);
				const errorMessage = error.message;
				console.log('🚀 ~ errorMessage', errorMessage);
				if (errorCode === REQUESTS_ERRORS.USER_ALREADY_EXIST) {
					dispatch(
						popupFormMessageAC({
							text: 'Такой E-Mail уже зарегистрирован.',
							isShow: true,
						})
					);
				}
			})
			.finally(() => {
				dispatch(setIsLoadingAC(false));
			});
	};
}

export function signInUserThunk(email: string, password: string) {
	console.log('SignInUser');
	const auth = getAuth();
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user: any = userCredential.user;
				if (!user.displayName && !user.photoURL) {
					dispatch(setPopupFormDataAC(userTemplates.userPopupData(dispatch)));
				}
				dispatch(setUserDataAC(userHelpers.setUserDataHelper(user)));
				dispatch(clearPopupFormDataAC());
			})
			.catch(error => {
				const errorCode = error.code;
				console.log('🚀 ~ errorCode', errorCode);
				const errorMessage = error.message;
				console.log('🚀 ~ errorMessage', errorMessage);
				if (errorCode === REQUESTS_ERRORS.USER_NOT_FOUND) {
					dispatch(
						popupFormMessageAC({
							text: 'Пользователя с таким e-mail не существует.',
							isShow: true,
						})
					);
				}
				if (errorCode === REQUESTS_ERRORS.WRONG_PASSWORD) {
					dispatch(
						popupFormMessageAC({
							text: 'Неверный пароль.',
							isShow: true,
						})
					);
				}
			})
			.finally(() => {
				dispatch(setIsLoadingAC(false));
			});
	};
}

export function updateUserThunk(displayName: string, photoURL: string) {
	const auth = getAuth();
	const { currentUser } = auth;
	console.log('🚀 ~ currentUser', currentUser);
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		if (currentUser !== null) {
			updateProfile(currentUser, {
				displayName,
				photoURL,
			})
				.then(() => {
					console.log('Profile updated!');
					dispatch(setUserDataAC(userHelpers.setUserDataHelper(currentUser)));
				})
				.catch(error => {
					console.error('🚀 ~ error', error);
					// An error occurred
				})
				.finally(() => {
					dispatch(setIsLoadingAC(false));
					dispatch(clearPopupFormDataAC());
				});
		}
	};
}
