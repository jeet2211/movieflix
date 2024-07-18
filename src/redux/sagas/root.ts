import { all, fork } from 'redux-saga/effects';
import mySaga from '../sagas/movie';

export default function* rootSaga() {
  yield all([
    fork(mySaga),
  ]);
}
