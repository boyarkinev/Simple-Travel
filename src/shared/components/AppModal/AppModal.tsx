import './AppModal.css';

import React from 'react';
import { IPopupProps } from './ts/interfaces';

export const AppModal: React.FC<IPopupProps> = ({
	title,
	closePopupButton,
	condition = false,
	children,
}) => {
	return (
		<>
			{condition ? (
				<div className='app-modal'>
					<div className='app-modal__content'>
						{closePopupButton}
						{title ? title : null}
						{children}
					</div>
				</div>
			) : null}
		</>
	);
};
