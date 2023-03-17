import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { sharedActions, sharedTypes } from '@/shared';
import { clearRegistrationAC, setUserDataAC } from '../actions/actions';
import { userTemplates } from '@/entities';

const {
	setIsLoadingAC,
	popupFormMessageAC,
	setPopupFormDataAC,
	clearPopupFormDataAC,
} = sharedActions;

export function signUpUserThunk(email: string, password: string) {
	console.log('signUpUserThunk');
	const auth = getAuth();
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user;
				console.log('🚀 ~ user', user);
				dispatch(clearPopupFormDataAC());
				dispatch(setPopupFormDataAC(userTemplates.userPopupData(dispatch)));
			})
			.catch(error => {
				const errorCode = error.code;
				console.log('🚀 ~ errorCode', errorCode);
				const errorMessage = error.message;
				console.log('🚀 ~ errorMessage', errorMessage);
				if (errorCode === 'auth/email-already-in-use') {
					dispatch(
						popupFormMessageAC({
							text: 'Данный E-Mail уже зарегистрирован.',
							isShow: true,
						})
					);
				}
			})
			.finally(() => {
				dispatch(setIsLoadingAC(false));
				dispatch(clearRegistrationAC());
			});
	};
}

export function signInUserThunk(email: string, password: string) {
	console.log('signInUserThunk');
	const auth = getAuth();
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user: any = userCredential.user;
				if (!user.displayName && !user.photoURL) {
					dispatch(setPopupFormDataAC(userTemplates.userPopupData(dispatch)));
				}
				dispatch(
					setUserDataAC({
						isAuth: true,
						accessToken: user.accessToken,
						uid: user.uid,
						displayName: user.displayName,
						hobby: '',
						email: user.email,
						photoURL: user.photoURL,
					})
				);
			})
			.catch(error => {
				const errorCode = error.code;
				console.log('🚀 ~ errorCode', errorCode);
				const errorMessage = error.message;
				console.log('🚀 ~ errorMessage', errorMessage);
			})
			.finally(() => {
				dispatch(setIsLoadingAC(false));
				dispatch(clearPopupFormDataAC());
			});
	};
}

export function updateUserThunk(displayName: string, photoURL: string) {
	const auth = getAuth();
	const { currentUser } = auth;
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		if (currentUser !== null) {
			updateProfile(currentUser, {
				displayName,
				photoURL,
			})
				.then(() => {
					// Profile updated!
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
