import './User.css';

import React from 'react';
import { AppClassicButton } from '@/shared';
import { IUserProps } from './ts/propsTypes';

export const User: React.FC<IUserProps> = ({ user, onEdit }) => {
	return (
		<div className='user__data'>
			<h1 className='user__name'>{user.name}</h1>
			<p className='user__occupation'>{user.occupation}</p>
			<AppClassicButton
				type='button'
				buttonStyle='outline'
				style={{
					width: 'auto',
					height: 'auto',
					padding: '2px 6px',
					marginTop: '16px',
				}}
				label='Редактировать'
				onClick={onEdit}
			/>
		</div>
	);
};
