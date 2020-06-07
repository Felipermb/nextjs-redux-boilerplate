import { all, put, takeLatest } from 'redux-saga/effects';
import { failure, loadDataSuccess } from './actions';
import * as USER_DATA_TYPES from '../../types/userDataTypes';

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json();

    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

export default all([
  takeLatest(USER_DATA_TYPES.LOAD_DATA, loadDataSaga),
]);
