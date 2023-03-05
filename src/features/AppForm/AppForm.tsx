import './AppForm.css';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	AppClassicButton,
	AppInput,
	AppPreloader,
	selectors,
	thunks,
} from '@/shared';
import { IOnValue } from '@/shared/ts/interfaces';
import { IPopupFormProps } from './ts/propsTypes';

export const AppForm: React.FC<IPopupFormProps> = ({
	inputs,
	setIsPopupShow,
	buttonLabel,
}) => {
	const dispatch = useDispatch();

	const isDataUploading = useSelector(selectors.isLoading);

	const [isValid, setIsValid] = useState<{ [key: string]: boolean }>({});
	const [values, setValues] = useState<{ [key: string]: string }>({});

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(
			thunks.putDataThunk(values.placeName, values.placeLink, setIsPopupShow)
		);
	};

	return (
		<form className='app__form' onSubmit={handleFormSubmit} noValidate>
			{inputs?.map(input => (
				<AppInput
					key={input.name}
					input={input}
					onValue={(obj: IOnValue) => {
						setIsValid((prev: { [key: string]: boolean }) => ({
							...prev,
							[obj.name]: obj.regex.test(obj.value),
						}));
						setValues(prev => ({ ...prev, [obj.name]: obj.value }));
					}}
					isShowAlerts={true}
				/>
			))}
			<AppClassicButton
				isDisabled={!Object.values(isValid).every(el => el === true)}
				style={{ marginTop: '48px' }}
				label={isDataUploading ? <AppPreloader /> : buttonLabel}
			/>
		</form>
	);
};
