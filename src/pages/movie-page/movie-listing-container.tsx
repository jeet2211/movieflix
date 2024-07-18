import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getMovies, addMovieToFavorites,addMovieToWatchlist } from '../../redux/actions/movieActions'
import MovieListingView from './movie-listing-view';

const MovieListingContainer: React.FC = () => {
    const dispatch = useDispatch();
    const { movies, status, error } = useSelector((state: RootState) => state.movies);
    const accountId = useSelector((state: RootState) => state.auth.accountId);
    const sessionId = useSelector((state: RootState) => state.auth.sessionId);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const handleAddToFavorites = (id: number) => {
        if (accountId && sessionId) {
            dispatch(addMovieToFavorites({ accountId, sessionId, mediaId: id }));
        }
    };

    const handleAddToWatchlist = (id: number) => {
        if (accountId && sessionId) {
            dispatch(addMovieToWatchlist({ accountId, sessionId, mediaId: id }));
        }
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return <MovieListingView movies={movies} onAddToFavorites={handleAddToFavorites} onAddToWatchlist={handleAddToWatchlist} />;
};

export default MovieListingContainer;
