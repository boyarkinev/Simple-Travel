import './AppClassicButton.css';

import React from 'react';
import { IAppClassicButtonProps } from './ts/interfaces';

export const AppClassicButton: React.FC<IAppClassicButtonProps> = props => {
	const {
		buttonId,
		type = 'submit',
		name,
		isDisabled = false,
		label = null,
		style,
		buttonStyle = 'fill',
		onClick,
	} = props;

	return (
		<button
			id={buttonId}
			type={type}
			name={name}
			style={style}
			className={
				buttonStyle === 'outline'
					? 'app-classic-button app-classic-button_outlined'
					: 'app-classic-button app-classic-button_filled'
			}
			disabled={isDisabled}
			onClick={onClick}>
			{label}
		</button>
	);
};
