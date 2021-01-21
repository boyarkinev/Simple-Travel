import { ICardsDataState } from '../../interfaces/interfaces';
import {
  CHANGE_NAME_INPUT_ACTION,
  CHANGE_LINK_INPUT_ACTION,
  FETCH_DATA_ACTION,
  LOAD_DATA_ACTION,
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
