import { takeEvery, put, call } from 'redux-saga/effects';
import { placesFetchData } from '../services/api.service';
import { placesFetchDataAC } from './actionCreators/actionCreators';
import { PLACES_LOAD_DATA_ACTION } from './actions/actions';

function* loadDataWorker() {
  const data = yield call(placesFetchData);
  yield put(placesFetchDataAC(data))
}

export function* watchPlacesLoadData() {
  yield takeEvery(PLACES_LOAD_DATA_ACTION, loadDataWorker);
}
