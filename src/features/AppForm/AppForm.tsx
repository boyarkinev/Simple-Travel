import './AppForm.css';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
	AppCheckBox,
	AppClassicButton,
	AppInput,
	AppPreloader,
	sharedInterfaces,
	sharedSelectors,
} from '@/shared';
import { IPopupFormProps } from './ts/propsTypes';

export const AppForm: React.FC<IPopupFormProps> = ({
	inputs,
	buttonLabel,
	onSubmit,
	checkBox,
	message,
}) => {
	const isDataUploading = useSelector(sharedSelectors.isLoading);

	const [isValid, setIsValid] = useState<sharedInterfaces.IKeyBool>({});
	const [values, setValues] = useState<sharedInterfaces.IKeyString>({});
	const [isDisabled, setIsDisabled] = useState<boolean>(true);

	useEffect(() => {
		setIsDisabled(!Object.values(isValid).every(el => el === true));
	}, [isValid]);

	const handleValue = (obj: sharedInterfaces.IOnValue) => {
		setIsValid((prev: sharedInterfaces.IKeyBool) => ({
			...prev,
			[obj.name]: obj.regex.test(obj.value),
		}));
		setValues(prev => ({ ...prev, [obj.name]: obj.value }));
	};

	return (
		<form
			className='app-form'
			onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault();
				onSubmit(values);
			}}
			noValidate>
			{inputs?.map(input => (
				<AppInput
					key={input.name}
					input={input}
					isShowAlerts={true}
					onValue={(obj: sharedInterfaces.IOnValue) => handleValue(obj)}
				/>
			))}
			{checkBox?.isShow ? (
				<AppCheckBox
					label={checkBox.label}
					onChange={bool =>
						setValues(prev => ({ ...prev, isChecked: `${Number(bool)}` }))
					}
				/>
			) : null}
			{message?.isShow ? (
				<p className='app-form__message'>{message.text}</p>
			) : null}
			<AppClassicButton
				isDisabled={isDisabled}
				style={{ marginTop: '36px' }}
				label={isDataUploading ? <AppPreloader /> : buttonLabel}
			/>
		</form>
	);
};
