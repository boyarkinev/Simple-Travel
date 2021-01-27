import {IAction, ICardFormState} from "../../interfaces/interfaces";
import {
  CHANGE_PLACE_LINK_INPUT_ACTION,
  CHANGE_PLACE_NAME_INPUT_ACTION,
} from '../actions/actions';

const initialState: ICardFormState = {
  placeName: '',
  placePhotoLink: '',
};

const changePlacesPopupInputsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_PLACE_NAME_INPUT_ACTION:
      return {...state, placeName: action.payload};
    case CHANGE_PLACE_LINK_INPUT_ACTION:
      return {...state, placePhotoLink: action.payload};
    default:
      return state;
  }
};

export default changePlacesPopupInputsReducer;