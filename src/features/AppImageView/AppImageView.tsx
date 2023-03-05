import './AppImageView.css';

import React from 'react';

import { AppCloseButton } from '@/shared';
import { IImageViewProps } from './ts/propsTypes';

export const AppImageView: React.FC<IImageViewProps> = props => {
	const { showCondition, link, name, onClose } = props;
	return (
		<>
			{showCondition ? (
				<div className='app-view-image'>
					<div className='app-view-image__card'>
						<AppCloseButton onClose={onClose} />
						<img src={link} alt={name} className='app-view-image__card-image' />
					</div>
				</div>
			) : null}
		</>
	);
};
