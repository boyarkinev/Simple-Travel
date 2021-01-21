import { takeEvery, put, call } from 'redux-saga/effects';
import { convertFbObjectToArray } from '../services/api.service';
import { fetchDataAC } from './actionCreators/actionCreators';
import { LOAD_DATA_ACTION } from './actions/actions';

function* loadDataWorker() {
  const data = yield call(convertFbObjectToArray);
  yield put(fetchDataAC(data))
}

export function* watchPlacesLoadData() {
  yield takeEvery(LOAD_DATA_ACTION, loadDataWorker);
}
