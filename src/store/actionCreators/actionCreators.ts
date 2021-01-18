import { IPlacesState } from '../../interfaces/interfaces';
import {
  CHANGE_NAME_INPUT_ACTION,
  CHANGE_LINK_INPUT_ACTION,
  PLACES_FETCH_DATA_ACTION,
  PLACES_LOAD_DATA_ACTION,
} from '../actions/actions';

export const changeNameInputAC = (value: string) => {
  return {
    type: CHANGE_NAME_INPUT_ACTION,
    payload: value,
  };
};

export const changeLinkInputAC = (value: string) => {
  return {
    type: CHANGE_LINK_INPUT_ACTION,
    payload: value,
  };
};

export const placesFetchDataAC = (data: IPlacesState) => {
  return {
    type: PLACES_FETCH_DATA_ACTION,
    payload: data,
  };
};

export const placesLoadDataAC = () => {
  return {
    type: PLACES_LOAD_DATA_ACTION,
  };
};
