import './AppWarning.css';
import React from 'react';

import { AppClassicButton, AppPreloader, AppModal } from '@/shared';
import { IAlertPopupProps } from './ts/propsTypes';

export const AppWarning: React.FC<IAlertPopupProps> = ({
	text,
	sourceData,
	showCondition,
	preloaderCondition,
}) => {
	return (
		<AppModal condition={showCondition}>
			<p className='alert__text'>{text}</p>
			<div className='alert__preloader-wrapper'>
				{preloaderCondition ? (
					<AppPreloader fill='var(--app-dark-active)' />
				) : null}
			</div>
			<div className='alert__button-wrapper'>
				{sourceData?.map(button => (
					<AppClassicButton
						key={button.name}
						onClick={button.onClick}
						label={button.label}
						style={{ height: '38px', marginTop: '10px' }}
					/>
				))}
			</div>
		</AppModal>
	);
};
