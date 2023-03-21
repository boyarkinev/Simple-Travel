import './AppInput.css';

import React, { useEffect, useState } from 'react';

import { AppAlert } from '../AppAlert/AppAlert';
import { IInputProps } from './ts/interfaces';

export const AppInput: React.FC<IInputProps> = ({
	input,
	onValue,
	isShowAlerts,
}) => {
	const [inputValue, setInputValue] = useState<string>(input.value || '');

	useEffect(() => {
		onValue?.({ name: input.name, regex: input.regex, value: inputValue });
	}, [inputValue]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			{isShowAlerts ? (
				<AppAlert value={inputValue} regex={input.regex} error={input.error} />
			) : null}
			<input
				className='app-input'
				type={input.type}
				name={input.name}
				value={inputValue}
				placeholder={input.placeholder}
				onChange={handleInputChange}
			/>
		</>
	);
};
