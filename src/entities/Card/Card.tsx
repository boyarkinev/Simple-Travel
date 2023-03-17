import './Card.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { AppLikes } from '@/features';
import {
	AppIconButton,
	sharedActions,
	sharedInterfaces,
	sharedThunks,
} from '@/shared';

const {
	setImageViewDataAC,
	setWarningDataAC,
	clearImageViewDataAC,
	clearWarningDataAC,
} = sharedActions;
const { deleteDataThunk, patchLikesThunk } = sharedThunks;

/**
 * @name Card
 * @description Содержит изображение, подпись к нему,
 * иконку удаления карточки и иконку и счетчик лайков
 * @param data Данные карточки
 * @returns
 */
export const Card: React.FC<{ data: sharedInterfaces.ICardData }> = ({
	data,
}) => {
	const { placeName, placePhotoLink, id, likesCount } = data;

	const dispatch = useDispatch();

	const [isFetch, setIsFetch] = useState<boolean>(false);

	const handleLikeButtonClick = (): void => {
		const count = 1;
		let newLikesCount = likesCount + count;
		dispatch(patchLikesThunk(id, newLikesCount, setIsFetch));
	};

	const likesCountShow = cn('place-card__like-count', {
		'place-card__like-count_show': likesCount !== 0,
	});

	const warningButtons = [
		{
			name: 'delete',
			label: 'Удалить',
			type: 'submit',
			onClick: () => dispatch(deleteDataThunk(id)),
		},
		{
			name: 'Cancel',
			label: 'Отмена',
			type: 'button',
			onClick: () => dispatch(clearWarningDataAC()),
		},
	];

	return (
		<div className='place-card' id={id}>
			<div className='place-card__image-container'>
				<img
					onClick={() => {
						dispatch(
							setImageViewDataAC({
								link: placePhotoLink,
								name: placeName,
								onClose: () => dispatch(clearImageViewDataAC()),
								showCondition: true,
							})
						);
					}}
					className='place-card__image'
					src={placePhotoLink}
					alt={placeName}
				/>
				<AppIconButton
					onClick={() => {
						dispatch(
							setWarningDataAC({
								text: 'Выбранная карточка будет удалена',
								sourceData: warningButtons,
								showCondition: true,
							})
						);
					}}
					icon={<i className='material-icons place-card__delete'>delete</i>}
				/>
			</div>
			<div className='place-card__description'>
				<h3 className='app-title'>{placeName}</h3>
				<div className='place-card__likes-wrapper'>
					<AppLikes
						onLike={handleLikeButtonClick}
						isFetch={isFetch}
						likesCount={likesCount}
						likesCountView={likesCountShow}
					/>
				</div>
			</div>
		</div>
	);
};
