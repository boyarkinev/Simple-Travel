import { cardActions, cardInterfaces, cardServices } from '@/entities';
import { sharedActions } from '@/shared';

export const getDataThunk = () => {
	return (dispatch: React.Dispatch<React.SetStateAction<object>>): void => {
		cardServices.getCards().then(res => {
			if (res !== null) {
				const places: Array<cardInterfaces.ICardData> = Object.keys(res).map(
					(key: string) => {
						const place = res[key];
						place.id = key;
						return place;
					}
				);
				dispatch(cardActions.setCardsAC(places));
			} else {
				dispatch(cardActions.setCardsAC([]));
			}
		});
	};
};

export const putDataThunk = (placeName: string, placeLink: string) => {
	return (
		dispatch: React.Dispatch<React.SetStateAction<{}>>,
		getState: () => { userData: { uid: string } }
	): void => {
		const { userData } = getState();
		dispatch(sharedActions.setIsLoadingAC(true));
		cardServices
			.putCard({
				placeName,
				placeLink,
				authorId: userData.uid,
				date: new Date().toLocaleDateString(),
				likesUsers: [],
			})
			.then(() => {
				dispatch(getDataThunk());
			})
			.catch(err => console.error(err))
			.finally(() => {
				dispatch(sharedActions.setIsLoadingAC(false));
				dispatch(sharedActions.clearPopupFormDataAC());
				dispatch(sharedActions.clearPopupFormMessageAC());
			});
	};
};

export const deleteDataThunk = (placeId: string) => {
	return (dispatch: React.Dispatch<React.SetStateAction<object>>): void => {
		dispatch(sharedActions.setIsLoadingAC(true));
		cardServices
			.deleteCard(placeId)
			.then(() => {
				dispatch(getDataThunk());
			})
			.catch(err => console.error(err))
			.finally(() => {
				dispatch(sharedActions.setIsLoadingAC(false));
				dispatch(sharedActions.clearWarningDataAC());
			});
	};
};

export const patchLikesThunk = (
	placeId: string,
	likes: Array<string>,
	setIsFetch: React.Dispatch<React.SetStateAction<boolean>>
) => {
	return (dispatch: React.Dispatch<React.SetStateAction<{}>>): void => {
		setIsFetch(true);
		cardServices
			.patchLikes(placeId, likes)
			.then(() => {
				dispatch(getDataThunk());
			})
			.catch(err => console.error(err))
			.finally(() => {
				setIsFetch(false);
			});
	};
};
