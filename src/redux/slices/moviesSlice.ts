import { createSlice, createAsyncThunk, isAction } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovieDetails, addToFavorites, addToWatchlist, getFavorites as fetchFavorites } from "../../api/api";

export const getMovies: any = createAsyncThunk("movies/getMovies", async () => {
    const movies = await fetchMovies();
    return movies;
});

export const getMovieDetails: any = createAsyncThunk("movies/getMovieDetails", async (id: number) => {
    const movieDetails = await fetchMovieDetails(id);
    return movieDetails;
});

export const addMovieToFavorites: any = createAsyncThunk("movies/addMovieToFavorites", async ({ accountId, sessionId, mediaId }: { accountId: string, sessionId: string, mediaId: number }) => {
    const response = await addToFavorites(accountId, sessionId, mediaId, 'movie', true);
    return response;
});

export const addMovieToWatchlist: any = createAsyncThunk("movies/addMovieToWatchlist", async ({ accountId, sessionId, mediaId }: { accountId: string, sessionId: string, mediaId: number }) => {
    const response = await addToWatchlist(accountId, sessionId, mediaId, 'movie', true);
    return response;
});

const getFavorites: any = createAsyncThunk("movies/getFavouites", async(id:string)=> {
    const favorites = await fetchFavorites(id)
    return favorites;
});

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieDetails: null,
        favorites: [],
        error: null,
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.movies = action.payload;
            state.error = null;
        })
        builder.addCase(getMovies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        builder.addCase(getFavorites.pending,(state)=>{
            state.status = "loding",
            state.error = null;
        })
        builder.addCase(getFavorites.succeeded,(state,action)=> {
            state.status = "succeeded",
            state.favorites = action.payload;
            state.error = null
        })
        builder.addCase(getFavorites.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message
        })
        builder.addCase(getMovieDetails.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(getMovieDetails.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.movieDetails = action.payload;
            state.error = null;
        })
        builder.addCase(getMovieDetails.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        builder.addCase(addMovieToFavorites.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(addMovieToFavorites.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.error = null;
        })
        builder.addCase(addMovieToFavorites.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        builder.addCase(addMovieToWatchlist.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(addMovieToWatchlist.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.error = null;
        })
        builder.addCase(addMovieToWatchlist.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export default movieSlice.reducer;
