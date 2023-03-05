import './AppIconButton.css';
import React from 'react';
import { IAppIconButtonProps } from './ts/interfaces';

export const AppIconButton: React.FC<IAppIconButtonProps> = ({
	onClick,
	icon,
}) => {
	return (
		<button onClick={onClick} className='app-icon-button'>
			{icon}
		</button>
	);
};
