import { all } from 'redux-saga/effects';

// Sagas
import counterSaga from './counter/saga';
import userDataSaga from './userData/saga';

export default function* rootSaga() {
  return yield all([
    counterSaga,
    userDataSaga,
  ]);
}