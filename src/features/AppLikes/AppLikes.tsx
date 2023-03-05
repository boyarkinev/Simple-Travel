import './AppLikes.css';

import React from 'react';
import { AppIconButton, AppLikeIcon, AppLikePreloader } from '@/shared';
import { IAppLikesProps } from './ts/propsTypes';

export const AppLikes: React.FC<IAppLikesProps> = ({
	onLike,
	isFetch,
	likesCount,
	likesCountView,
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
			<p className={likesCountView}>{likesCount}</p>
		</div>
	);
};
