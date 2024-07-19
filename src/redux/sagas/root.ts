import { all, fork } from 'redux-saga/effects';
import movieSaga from '../sagas/movie';
import authSaga from '../sagas/auth';

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
    fork(authSaga)
  ]);
}
