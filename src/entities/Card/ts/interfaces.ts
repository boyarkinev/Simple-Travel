export interface ICardData {
	placeName: string;
	placeLink: string;
	authorId: string;
	date: string;
	likesUsers: Array<string>;
	id: string;
}

export interface ICardsAction {
	type: string;
	payload?: Array<ICardData> | string;
}
