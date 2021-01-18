import { IAction, IPlacesState } from '../../interfaces/interfaces';
import { PLACES_FETCH_DATA_ACTION } from '../actions/actions';

const initialState: IPlacesState = {
  places: [],
};

const placesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case PLACES_FETCH_DATA_ACTION:
      return { ...state, places: action.payload };
    default:
      return state;
  }
};

export default placesReducer;
