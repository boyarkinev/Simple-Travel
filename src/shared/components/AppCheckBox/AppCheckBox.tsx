import './AppCheckBox.css';

import React from 'react';
import { IAppCheckBoxProps } from './ts/propsTypes';

export const AppCheckBox: React.FC<IAppCheckBoxProps> = ({
	label,
	onChange,
}) => {
	return (
		<div className='app-checkbox'>
			<input
				id='checkBox'
				type='checkbox'
				onChange={e => onChange(e.target.checked)}
			/>
			<label htmlFor='checkBox' className='app-checkbox__label'>
				{label}
			</label>
		</div>
	);
};
