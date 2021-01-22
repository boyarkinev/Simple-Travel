import {IAction, ICardsDataState} from '../../interfaces/interfaces';
import {FETCH_DATA_ACTION} from '../actions/actions';

const initialState: ICardsDataState = {
  places: [],
};

const cardsReducer = (state: ICardsDataState = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_DATA_ACTION:
      return {...state, places: action.payload};
    default:
      return state;
  }
};

export default cardsReducer;
