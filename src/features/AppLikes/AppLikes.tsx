import './AppLikes.css';

import React from 'react';
import { AppIconButton, AppLikeIcon, AppLikePreloader } from '@/shared';
import { IAppLikesProps } from './ts/propsTypes';

export const AppLikes: React.FC<IAppLikesProps> = ({
	onLike,
	isFetch,
	likesCount,
}) => {
	return (
		<div className='app-likes-wrapper'>
			<AppIconButton
				onClick={onLike}
				icon={
					isFetch ? (
						<AppLikePreloader width='24px' height='24px' />
					) : (
						<AppLikeIcon likesCount={likesCount} />
					)
				}
			/>
			{likesCount > 0 ? (
				<p className='place-card__like-count'>{likesCount}</p>
			) : null}
		</div>
	);
};
