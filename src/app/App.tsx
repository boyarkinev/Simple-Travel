import './App.css';

import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppForm, AppImageView, AppWarning } from '@/features';
import {
	AppCloseButton,
	AppModal,
	sharedActions,
	sharedSelectors,
	sharedThunks,
} from '@/shared';
import { Header, CardList, Profile } from '@/widgets';
import {
	cardTemplates,
	userActions,
	userHelpers,
	userTemplates,
} from '@/entities';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const {
	places,
	imageView,
	warningData,
	isLoading,
	popupData,
	popupFormMessage,
} = sharedSelectors;
const { setPopupFormDataAC, clearPopupFormDataAC } = sharedActions;

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const cards = useSelector(places);
	const imageViewData = useSelector(imageView);
	const warning = useSelector(warningData);
	const isDataDeleting = useSelector(isLoading);
	const popup = useSelector(popupData);
	const formMessage = useSelector(popupFormMessage);

	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				dispatch(
					userActions.setUserDataAC(userHelpers.setUserDataHelper(user))
				);
			} else {
				console.log('Не авторизован');
				// Здесь вызывать popup с сообщением, что не авторизован
			}
		});
	}, [auth]);

	useEffect(() => {
		dispatch(sharedThunks.getDataThunk());
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
				cardPopupHandler={() => dispatch(setPopupFormDataAC(placePopup))}
				userPopupHandler={() => dispatch(setPopupFormDataAC(userPopup))}
			/>
			<CardList places={cards} />

			<AppModal
				title={<h3 className='app-title'>{popup.title}</h3>}
				condition={popup.condition}
				closePopupButton={
					<AppCloseButton onClose={() => dispatch(clearPopupFormDataAC())} />
				}>
				<AppForm
					inputs={popup.formData}
					onSubmit={popup.onSubmit}
					buttonLabel={
						<span className='app-classic-button__label'>{popup.button}</span>
					}
					checkBox={popup.checkBox}
					message={formMessage}
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
