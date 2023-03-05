import './AppLikeIcon.css';
import React from 'react';
import cn from 'classnames';

export const AppLikeIcon: React.FC<{ [key: string]: number }> = ({
	likesCount,
}) => {
	const likeIconIsLiked = cn('material-icons', {
		'app-like-icon_is-liked': likesCount,
	});

	return (
		<i className={likeIconIsLiked}>
			{!likesCount ? 'favorite_border' : 'favorite'}
		</i>
	);
};
