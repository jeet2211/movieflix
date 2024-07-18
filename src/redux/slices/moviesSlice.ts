import { createSlice } from "@reduxjs/toolkit";
import { ActionType, getType } from "typesafe-actions";
import * as actions from './../actions/movieActions';

type MoviesState = {
  movies: any[],
  movieDetails: any | null,
  favorites: any[],
  error: string | null,
  status: string,
};

const initialState: MoviesState = {
  movies: [],
  movieDetails: null,
  favorites: [],
  error: null,
  status: "idle",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getType(actions.getMovies), (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getType(actions.getMoviesSuccess), (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(getType(actions.getMoviesFailure), (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getType(actions.getMovieDetails), (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getType(actions.getMovieDetailsSuccess), (state, action) => {
        state.status = "succeeded";
        state.movieDetails = action.payload;
        state.error = null;
      })
      .addCase(getType(actions.getMovieDetailsFailure), (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getType(actions.addMovieToFavorites), (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getType(actions.addMovieToFavoritesSuccess), (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getType(actions.addMovieToFavoritesFailure), (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getType(actions.addMovieToWatchlist), (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getType(actions.addMovieToWatchlistSuccess), (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getType(actions.addMovieToWatchlistFailure), (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getType(actions.getFavorites), (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getType(actions.getFavoritesSuccess), (state, action) => {
        state.status = "succeeded";
        state.favorites = action.payload;
        state.error = null;
      })
      .addCase(getType(actions.getFavoritesFailure), (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
