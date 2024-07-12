import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovieDetails } from "../../api";

export const getMovies: any = createAsyncThunk("movies/getMovies", async () => {
    const movies = await fetchMovies();
    return movies;
    }
);

export const getMovieDetails:any = createAsyncThunk("movies/getMovieDetails", async (id: number) => {
    const movieDetails = await fetchMovieDetails(id);
    return movieDetails;
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieDetails: null,
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
    }
});

export default movieSlice.reducer;
