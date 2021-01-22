import {IAction, IFormState} from "../../interfaces/interfaces";
import {CHANGE_LINK_INPUT_ACTION, CHANGE_NAME_INPUT_ACTION} from "../actions/actions";

const initialState: IFormState = {
  placeName: '',
  placePhotoLink: '',
}

const changeInputsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_NAME_INPUT_ACTION:
      return {...state, placeName: action.payload};
    case CHANGE_LINK_INPUT_ACTION:
      return {...state, placePhotoLink: action.payload};
    default:
      return state;
  }
}

export default changeInputsReducer;

/*
  Данные приходят из actionCreator элемента.
  Здесь мы раскрываем state и создаем на его основе
  новый state
*/