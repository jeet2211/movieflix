import { createAction } from "typesafe-actions";

export const getMovies = createAction('movies/GET_MOVIES')();
export const getMoviesSuccess = createAction('movies/GET_MOVIES_SUCCESS')<any>();
export const getMoviesFailure = createAction('movies/GET_MOVIES_FAILURE')<string>();

export const getMovieDetails = createAction('movies/GET_MOVIE_DETAILS')<number>();
export const getMovieDetailsSuccess = createAction('movies/GET_MOVIE_DETAILS_SUCCESS')<any>();
export const getMovieDetailsFailure = createAction('movies/GET_MOVIE_DETAILS_FAILURE')<string>();

export const addMovieToFavorites = createAction('movies/ADD_MOVIE_TO_FAVORITES')<{ accountId: string, sessionId: string, mediaId: number }>();
export const addMovieToFavoritesSuccess = createAction('movies/ADD_MOVIE_TO_FAVORITES_SUCCESS')<any>();
export const addMovieToFavoritesFailure = createAction('movies/ADD_MOVIE_TO_FAVORITES_FAILURE')<string>();

export const addMovieToWatchlist = createAction('movies/ADD_MOVIE_TO_WATCHLIST')<{ accountId: string, sessionId: string, mediaId: number }>();
export const addMovieToWatchlistSuccess = createAction('movies/ADD_MOVIE_TO_WATCHLIST_SUCCESS')<any>();
export const addMovieToWatchlistFailure = createAction('movies/ADD_MOVIE_TO_WATCHLIST_FAILURE')<string>();

export const getFavorites = createAction('movies/GET_FAVORITES')<string>();
export const getFavoritesSuccess = createAction('movies/GET_FAVORITES_SUCCESS')<any>();
export const getFavoritesFailure = createAction('movies/GET_FAVORITES_FAILURE')<string>();
