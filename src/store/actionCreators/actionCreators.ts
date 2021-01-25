import {ICardsDataState} from '../../interfaces/interfaces';
import {
  CHANGE_PLACE_LINK_INPUT_ACTION,
  CHANGE_PLACE_NAME_INPUT_ACTION,
  FETCH_DATA_ACTION,
  LOAD_DATA_ACTION,
} from '../actions/actions';

export const changePlaceNameInputAC = (value: string) => {
  return {
    type: CHANGE_PLACE_NAME_INPUT_ACTION,
    payload: value,
  };
};

export const changePlaceLinkInputAC = (value: string) => {
  return {
    type: CHANGE_PLACE_LINK_INPUT_ACTION,
    payload: value,
  };
};

export const fetchDataAC = (data: ICardsDataState) => {
  return {
    type: FETCH_DATA_ACTION,
    payload: data,
  };
};

export const loadDataAC = () => {
  return {
    type: LOAD_DATA_ACTION,
  };
};
