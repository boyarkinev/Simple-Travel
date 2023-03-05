import './App.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header, CardList, Profile } from '@/widgets';
import { AppForm, AppImageView, AppWarning } from '@/features';
import {
	AppCloseButton,
	AppModal,
	selectors,
	thunks,
	template,
} from '@/shared';

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const cards = useSelector(selectors.places);
	const imageViewData = useSelector(selectors.imageView);
	const warning = useSelector(selectors.warningData);
	const isDataDeleting = useSelector(selectors.isLoading);

	const [isPopupShow, setIsPopupShow] = useState<boolean>(false);
	const [formName, setFormName] = useState<string | null>(null);
	const [popupTitle, setPopupTitle] = useState<string>('');

	useEffect(() => {
		dispatch(thunks.getDataThunk());
	}, []);

	const handleShowPlacePopup = () => {
		setPopupTitle('Новое место');
		setFormName('place');
		setIsPopupShow(true);
	};

	const handleShowUserPopup = () => {
		setPopupTitle('Редактировать профиль');
		setFormName('user');
		setIsPopupShow(true);
	};

	return (
		<div className='app'>
			<Header />
			<Profile
				cardPopupHandler={handleShowPlacePopup}
				userPopupHandler={handleShowUserPopup}
			/>
			<CardList places={cards} />
			<AppModal
				title={<h3 className='app-title'>{popupTitle}</h3>}
				condition={isPopupShow}
				closePopupButton={
					<AppCloseButton onClose={() => setIsPopupShow(false)} />
				}>
				{formName === 'place' ? (
					<AppForm
						inputs={template.placeInputsData}
						setIsPopupShow={setIsPopupShow}
						buttonLabel={<i className='material-icons'>add</i>}
					/>
				) : null}
				{formName === 'user' ? (
					<AppForm
						inputs={template.userInputsData}
						setIsPopupShow={setIsPopupShow}
						buttonLabel={<p className='app-classic-button__label'>Сохранить</p>}
					/>
				) : null}
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
