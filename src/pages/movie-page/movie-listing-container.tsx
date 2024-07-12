import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getMovies } from '../../redux/slices/movieSlice';
import MovieListingView from './movie-listing-view';

const MovieListingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMovies());
    }
  }, [dispatch, status]);

  return <MovieListingView movies={movies} />;
};

export default MovieListingContainer;
