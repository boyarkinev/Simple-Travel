import './AppAlert.css';

import React, { useEffect, useState } from 'react';
import { IAppAlertProps } from './ts/propsTypes';

export const AppAlert: React.FC<IAppAlertProps> = ({ value, regex, error }) => {
	const [errorMsg, setErrorMsg] = useState<string>('');
	const [isDirty, setIsDirty] = useState<boolean>(false);

	useEffect(() => {
		setErrorMsg(!regex.test(value) ? error : '');
	}, [value]);

	useEffect(() => {
		setIsDirty(Boolean(value));
	}, [value]);

	return (
		<div className='app-alert__message'>
			{isDirty && error && <span>{errorMsg}</span>}
		</div>
	);
};
