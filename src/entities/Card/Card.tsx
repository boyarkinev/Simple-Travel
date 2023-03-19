import './Card.css';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppLikes } from '@/features';
import { userSelectors } from '@/entities';
import {
	AppIconButton,
	sharedActions,
	sharedInterfaces,
	sharedThunks,
} from '@/shared';

const { setImageViewDataAC, setWarningDataAC, clearImageViewDataAC } =
	sharedActions;
const { patchLikesThunk } = sharedThunks;

/**
 * @name Card
 * @description Содержит изображение, подпись к нему,
 * иконку удаления карточки и иконку и счетчик лайков
 * @param data Данные карточки
 * @returns
 */
export const Card: React.FC<{ card: sharedInterfaces.ICardData }> = ({
	card,
}) => {
	const { placeName, placeLink, id, likesUsers } = card;

	const user = useSelector(userSelectors.userData);
	const dispatch = useDispatch();

	const [isFetch, setIsFetch] = useState<boolean>(false);

	const handleLikeButtonClick = (): void => {
		let likes: Array<string> = [];
		if (!likesUsers?.includes(user.uid)) {
			likesUsers ? (likes = [...likesUsers, user.uid]) : (likes = [user.uid]);
		}
		if (likesUsers?.includes(user.uid)) {
			likes = [...likesUsers.filter(uid => uid !== user.uid)];
		}
		dispatch(patchLikesThunk(id, likes, setIsFetch));
	};

	const warningButtons = useMemo(() => {
		return [
			{
				name: 'delete',
				label: 'Удалить',
				type: 'submit',
				onClick: () => dispatch(sharedThunks.deleteDataThunk(id)),
			},
			{
				name: 'Cancel',
				label: 'Отмена',
				type: 'button',
				onClick: () => dispatch(sharedActions.clearWarningDataAC()),
			},
		];
	}, [id]);

	return (
		<div className='place-card' id={id}>
			<div className='place-card__image-container'>
				<img
					onClick={() => {
						dispatch(
							setImageViewDataAC({
								link: placeLink,
								name: placeName,
								onClose: () => dispatch(clearImageViewDataAC()),
								showCondition: true,
							})
						);
					}}
					className='place-card__image'
					src={placeLink}
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
						likesCount={likesUsers?.length || 0}
					/>
				</div>
			</div>
		</div>
	);
};
