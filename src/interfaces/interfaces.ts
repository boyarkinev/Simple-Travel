export interface IPlace {
  placeName: string;
  placePhotoLink: string;
  date: string;
  isLiked: boolean;
}

export interface IFormState {
  placeName: string;
  placePhotoLink: string;
}

export interface IAction {
  type: string;
  payload: Array<IPlace>;
}

export interface IPlacesState {
  places: Array<IPlace>;
}
