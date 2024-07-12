import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { getMovieDetails } from '../../redux/slices/movieSlice';
import MovieDetailsView from './movie-details-view';

const MovieDetailsContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state: RootState) => state.movies.movieDetails);

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetails(Number(id)));
    }
  }, [dispatch, id]);

  return movieDetails ? <MovieDetailsView movieDetails={movieDetails} /> : null;
};

export default MovieDetailsContainer;
