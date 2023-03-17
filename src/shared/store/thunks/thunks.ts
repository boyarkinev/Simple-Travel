import { sharedActions, sharedInterfaces } from '@/shared';
import { apiServices } from '@/shared/api/api.service';
import {
	clearWarningDataAC,
	setCardsAC,
	setIsLoadingAC,
} from '../actions/actions';

export const getDataThunk = () => {
	return (dispatch: React.Dispatch<React.SetStateAction<object>>): void => {
		apiServices.getCards().then(res => {
			if (res !== null) {
				const places: Array<sharedInterfaces.ICardData> = Object.keys(res).map(
					(key: string) => {
						const place = res[key];
						place.id = key;
						return place;
					}
				);
				dispatch(setCardsAC(places));
			}
		});
	};
};

export const putDataThunk = (placeName: string, placeLink: string) => {
	return (dispatch: React.Dispatch<React.SetStateAction<{}>>): void => {
		dispatch(setIsLoadingAC(true));
		apiServices
			.putCard({
				placeName,
				placeLink,
				date: new Date().toLocaleDateString(),
				likesCount: 0,
			})
			.then(() => {
				dispatch(getDataThunk());
			})
			.catch(err => console.error(err))
			.finally(() => {
				dispatch(setIsLoadingAC(false));
				dispatch(sharedActions.clearPopupFormDataAC());
			});
	};
};

export const deleteDataThunk = (placeId: string) => {
	return (dispatch: React.Dispatch<React.SetStateAction<object>>): void => {
		dispatch(setIsLoadingAC(true));
		apiServices
			.deleteCard(placeId)
			.then(() => {
				dispatch(getDataThunk());
			})
			.catch(err => console.error(err))
			.finally(() => {
				dispatch(setIsLoadingAC(false));
				dispatch(clearWarningDataAC());
			});
	};
};

export const patchLikesThunk = (
	placeId: string,
	likesCount: number,
	setIsFetch: React.Dispatch<React.SetStateAction<boolean>>
) => {
	return (dispatch: React.Dispatch<React.SetStateAction<object>>): void => {
		setIsFetch(true);
		apiServices
			.patchLikes(placeId, likesCount)
			.then(() => {
				dispatch(getDataThunk());
			})
			.catch(err => console.error(err))
			.finally(() => {
				setIsFetch(false);
			});
	};
};
