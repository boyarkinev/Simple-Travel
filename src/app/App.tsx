import './App.css';

import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppForm, AppImageView, AppWarning } from '@/features';
import {
	AppCloseButton,
	AppModal,
	sharedActions,
	sharedSelectors,
} from '@/shared';
import { Header, CardList, Profile } from '@/widgets';
import {
	cardSelectors,
	cardTemplates,
	cardThunks,
	userActions,
	userHelpers,
	userSelectors,
	userTemplates,
} from '@/entities';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const { imageView, warningData, isLoading, popupData, popupFormMessage } =
	sharedSelectors;
const {
	setPopupFormDataAC,
	clearPopupFormDataAC,
	clearPopupFormMessageAC,
	setWarningDataAC,
	clearWarningDataAC,
} = sharedActions;

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const cards = useSelector(cardSelectors.places);
	const imageViewData = useSelector(imageView);
	const warning = useSelector(warningData);
	const isDataDeleting = useSelector(isLoading);
	const popup = useSelector(popupData);
	const formMessage = useSelector(popupFormMessage);
	const isDataUploading = useSelector(sharedSelectors.isLoading);
	const isAuth = useSelector(userSelectors.isAuth);

	const auth = getAuth();

	const addCardWarning = useMemo(() => {
		return {
			text: 'Чтобы добавить карточку, необходимо авторизоваться',
			sourceData: [
				{
					name: 'OK',
					label: 'OK',
					onClick: () => dispatch(clearWarningDataAC()),
				},
			],
			showCondition: true,
		};
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				dispatch(
					userActions.setUserDataAC(userHelpers.setUserDataHelper(user))
				);
				dispatch(userActions.setIsAuthAC(true));
			} else {
				console.log('Не авторизован');
				dispatch(userActions.setIsAuthAC(false));
				// Здесь вызывать popup с сообщением, что не авторизован
			}
		});
	}, [auth]);

	useEffect(() => {
		dispatch(cardThunks.getDataThunk());
	}, []);

	const userPopup = useMemo(() => {
		return userTemplates.updateUserPopupData(dispatch);
	}, []);

	const placePopup = useMemo(() => {
		return cardTemplates.placePopupData(
			dispatch,
			<i className='material-icons'>add</i>
		);
	}, []);

	return (
		<div className='app'>
			<Header />
			<Profile
				cardPopupHandler={() => {
					if (!isAuth) {
						dispatch(setWarningDataAC(addCardWarning));
					} else {
						dispatch(setPopupFormDataAC(placePopup));
					}
				}}
				userPopupHandler={() => dispatch(setPopupFormDataAC(userPopup))}
			/>
			<CardList places={cards} />

			<AppModal
				title={<h3 className='app-title'>{popup.title}</h3>}
				condition={popup.condition}
				closePopupButton={
					<AppCloseButton
						onClose={() => {
							dispatch(clearPopupFormDataAC());
							dispatch(clearPopupFormMessageAC());
						}}
					/>
				}>
				<AppForm
					inputs={popup.formData}
					onSubmit={popup.onSubmit}
					buttonLabel={
						<span className='app-classic-button__label'>{popup.button}</span>
					}
					checkBox={popup.checkBox}
					message={formMessage}
					isDataUploading={isDataUploading}
				/>
			</AppModal>
			<AppImageView
				link={imageViewData.link}
				name={imageViewData.name}
				onClose={imageViewData.onClose}
				showCondition={imageViewData.showCondition}
			/>
			<AppWarning
				text={warning.text}
				sourceData={warning.sourceData}
				showCondition={warning.showCondition}
				preloaderCondition={isDataDeleting}
			/>
		</div>
	);
};
