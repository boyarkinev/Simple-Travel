import {call, put, takeEvery} from 'redux-saga/effects';
import {convertFbObjectToArray} from '../services/api.service';
import {fetchDataAC, fetchStorageDataAC} from './actionCreators/actionCreators';
import {LOAD_DATA_ACTION, LOAD_STORAGE_DATA_ACTION} from './actions/actions';
import {getDataFromLocalStorage} from '../services/localStorage.service';

function* loadDataWorker() {
  const data = yield call(convertFbObjectToArray);
  yield put(fetchDataAC(data));
}

export function* watchPlacesLoadData() {
  yield takeEvery(LOAD_DATA_ACTION, loadDataWorker);
}

function* loadStorageDataWorker() {
  const userData = yield call(getDataFromLocalStorage);
  yield put(fetchStorageDataAC(userData))
}

export function* watchStorageLoadData() {
  yield takeEvery(LOAD_STORAGE_DATA_ACTION, loadStorageDataWorker);
}
