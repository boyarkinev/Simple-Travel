import './Avatar.css';

import React from 'react';
import { IAppAvatarProps } from './ts/propsTypes';
import { AppIconButton, AppImage } from '@/shared';

export const Avatar: React.FC<IAppAvatarProps> = ({ avatar }) => {
	return (
		<div
			className='avatar'
			style={{ width: avatar.width, height: avatar.height }}>
			<span style={{ position: 'absolute', bottom: '10px' }}>
				<AppIconButton
					onClick={() => console.log('Edit avatar')}
					icon={
						<i
							className='material-icons'
							style={{ color: 'var(--app-light-active)' }}>
							edit
						</i>
					}
				/>
			</span>
			<AppImage image={avatar.image} width={avatar.width} />
		</div>
	);
};
