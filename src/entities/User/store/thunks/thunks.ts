import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { sharedActions, sharedTypes } from '@/shared';
import { setUserDataAC } from '../actions/actions';
import {
	REQUESTS_ERRORS,
	WARNING_DATA,
	userHelpers,
	userTemplates,
	userInterfaces,
} from '@/entities';

const {
	setIsLoadingAC,
	popupFormMessageAC,
	setPopupFormDataAC,
	clearPopupFormDataAC,
	clearPopupFormMessageAC,
} = sharedActions;

export function signUpUserThunk(email: string, password: string) {
	const auth = getAuth();
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				dispatch(clearPopupFormDataAC());
				dispatch(popupFormMessageAC(WARNING_DATA.REGISTER_SUCCESS));
				dispatch(setPopupFormDataAC(userTemplates.userPopupData(dispatch)));
			})
			.catch(error => {
				const errorCode = error.code;
				console.log('🚀 ~ errorCode', errorCode);
				const errorMessage = error.message;
				console.log('🚀 ~ errorMessage', errorMessage);
				if (errorCode === REQUESTS_ERRORS.USER_ALREADY_EXIST) {
					dispatch(popupFormMessageAC(WARNING_DATA.USER_ALREADY_EXIST));
				}
			})
			.finally(() => {
				dispatch(setIsLoadingAC(false));
			});
	};
}

export function signInUserThunk(email: string, password: string) {
	const auth = getAuth();
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user: userInterfaces.IUserData = userCredential.user;
				if (!user.displayName && !user.photoURL) {
					dispatch(setPopupFormDataAC(userTemplates.userPopupData(dispatch)));
				}
				dispatch(setUserDataAC(userHelpers.setUserDataHelper(user)));
				dispatch(clearPopupFormDataAC());
				dispatch(clearPopupFormMessageAC());
			})
			.catch(error => {
				const errorCode = error.code;
				console.log('🚀 ~ errorCode', errorCode);
				const errorMessage = error.message;
				console.log('🚀 ~ errorMessage', errorMessage);
				if (errorCode === REQUESTS_ERRORS.USER_NOT_FOUND) {
					dispatch(popupFormMessageAC(WARNING_DATA.USER_NOT_FOUND));
				}
				if (errorCode === REQUESTS_ERRORS.WRONG_PASSWORD) {
					dispatch(popupFormMessageAC(WARNING_DATA.WRONG_PASSWORD));
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
	return (dispatch: sharedTypes.TDispatch): void => {
		dispatch(setIsLoadingAC(true));
		if (currentUser !== null) {
			updateProfile(currentUser, {
				displayName,
				photoURL,
			})
				.then(() => {
					dispatch(setUserDataAC(userHelpers.setUserDataHelper(currentUser)));
				})
				.catch(error => {
					console.error('🚀 ~ error', error);
					// An error occurred
				})
				.finally(() => {
					dispatch(setIsLoadingAC(false));
					dispatch(clearPopupFormDataAC());
					dispatch(clearPopupFormMessageAC());
				});
		}
	};
}
