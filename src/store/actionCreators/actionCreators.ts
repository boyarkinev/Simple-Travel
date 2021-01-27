import {ICardsDataState, IUserDataState} from '../../interfaces/interfaces';
import {
  CHANGE_PLACE_LINK_INPUT_ACTION,
  CHANGE_PLACE_NAME_INPUT_ACTION,
  FETCH_DATA_ACTION,
  LOAD_DATA_ACTION,
  CHANGE_USER_JOB_INPUT_ACTION,
  CHANGE_USER_NAME_INPUT_ACTION,
  FETCH_STORAGE_DATA_ACTION,
  LOAD_STORAGE_DATA_ACTION,
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


export const changeUserNameInputAC = (value: string) => {
  return {
    type: CHANGE_USER_NAME_INPUT_ACTION,
    payload: value,
  };
};

export const changeUserJobInputAC = (value: string) => {
  return {
    type: CHANGE_USER_JOB_INPUT_ACTION,
    payload: value,
  };
};

export const fetchStorageDataAC = (data: IUserDataState) => {
  return {
    type: FETCH_STORAGE_DATA_ACTION,
    payload: data
  };
};

export const loadStorageDataAC = () => {
  return {
    type: LOAD_STORAGE_DATA_ACTION,
  };
};
