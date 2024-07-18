import { call, put, takeEvery, all, fork  } from 'redux-saga/effects';
import { fetchMovies, fetchMovieDetails, addToFavorites, addToWatchlist, getFavorites } from "../../api/api";
import * as movieAction from '../actions/movieActions';
function* fetchMoviesSaga() {
    try {
      const movies = yield call(fetchMovies);
      yield put(movieAction.getMoviesSuccess(movies));
    } catch (e) {
      yield put(movieAction.getMoviesFailure(e.message));
    }
  }
  
  function* fetchMovieDetailsSaga(action) {
    try {
      const movieDetails = yield call(fetchMovieDetails, action.payload);
      yield put(movieAction.getMovieDetailsSuccess(movieDetails));
    } catch (e) {
      yield put(movieAction.getMovieDetailsFailure(e.message));
    }
  }
  
  function* addMovieToFavoritesSaga(action) {
    try {
      const { accountId, sessionId, mediaId } = action.payload;
      const response = yield call(addToFavorites, accountId, sessionId, mediaId, 'movie', true);
      yield put(movieAction.addMovieToFavoritesSuccess(response));
    } catch (e) {
      yield put(movieAction.addMovieToFavoritesFailure(e.message));
    }
  }
  
  function* addMovieToWatchlistSaga(action) {
    try {
      const { accountId, sessionId, mediaId } = action.payload;
      const response = yield call(addToWatchlist, accountId, sessionId, mediaId, 'movie', true);
      yield put(movieAction.addMovieToWatchlistSuccess(response));
    } catch (e) {
      yield put(movieAction.addMovieToWatchlistFailure(e.message));
    }
  }
  
  function* getFavoritesSaga(action) {
    try {
      const favorites = yield call(getFavorites, action.payload);
      yield put(movieAction.getFavoritesSuccess(favorites));
    } catch (e) {
      yield put(movieAction.getFavoritesFailure(e.message));
    }
  }
  
function* watchFetchMoviesSaga() {
    yield takeEvery(movieAction.getMovies, fetchMoviesSaga)
  }
  
  function* watchFetchMovieDetailsSaga() {
    yield takeEvery(movieAction.getMovieDetails, fetchMovieDetailsSaga);
  }
  
  function* watchAddMovieToFavoritesSaga() {
    yield takeEvery(movieAction.addMovieToFavorites, addMovieToFavoritesSaga);
  }
  
  function* watchAddMovieToWatchlistSaga() {
    yield takeEvery(movieAction.addMovieToWatchlist, addMovieToWatchlistSaga);
  }
  
  function* watchGetFavoritesSaga() {
    yield takeEvery(movieAction.getFavorites, getFavoritesSaga);
  }
  
export default function* mySaga() {
    yield all([
      fork(watchFetchMoviesSaga),
      fork(watchFetchMovieDetailsSaga),
      fork(watchAddMovieToFavoritesSaga),
      fork(watchAddMovieToWatchlistSaga),
      fork(watchGetFavoritesSaga),
    ]);
  }