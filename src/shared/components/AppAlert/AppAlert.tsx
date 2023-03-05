import './AppAlert.css';

import React, { useEffect, useState } from 'react';
import { IAppAlertProps } from './ts/propsTypes';
import { ERROR_MESSAGES as messages } from './constants/ERROR_MESSAGES';

export const AppAlert: React.FC<IAppAlertProps> = ({ value, regex, name }) => {
	const [error, setError] = useState<string>('');
	const [isDirty, setIsDirty] = useState<boolean>(false);

	useEffect(() => {
		setError(!regex.test(value) ? messages[name] : '');
	}, [value]);

	useEffect(() => {
		setIsDirty(Boolean(value));
	}, [value]);

	return (
		<div className='app-alert__message'>
			{isDirty && error && <span>{error}</span>}
		</div>
	);
};
