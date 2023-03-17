import './Avatar.css';

import React from 'react';
import { IAppAvatarProps } from './ts/propsTypes';
import { AppImage } from '@/shared';

export const Avatar: React.FC<IAppAvatarProps> = ({ avatar }) => {
	return (
		<div
			className='avatar'
			style={{ width: avatar.width, height: avatar.height }}>
			{!avatar.image ? (
				<i className='material-icons avatar__guest'>account_circle</i>
			) : (
				<AppImage image={avatar.image} width={avatar.width} />
			)}
		</div>
	);
};
