export interface ICardData {
  placeName: string;
  placePhotoLink: string;
  date: string;
  likesCount: number;
  id: string;
}

export interface IUserData {
  name: string;
  job: string;
}

export interface ICardFormState {
  placeName: string;
  placePhotoLink: string;
}

export interface IUserFormState {
  userName: string;
  userJob: string;
}

export interface IAction {
  type: string;
  payload?: Array<ICardData> | string;
}

export interface ICardsDataState {
  places: Array<ICardData>;
}

export interface IUserDataState {
  user: IUserData
}
