import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
<<<<<<< HEAD
import { getMovieDetails } from '../../redux/actions/movieActions';
=======
import { getMovieDetails } from '../../redux/slices/movieSlice';
>>>>>>> origin/master
import MovieDetailsView from './movie-details-view';

const MovieDetailsContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const {movieDetails,status,error} = useSelector((state: RootState) => state.movies);
  
=======
  const movieDetails = useSelector((state: RootState) => state.movies.movieDetails);

>>>>>>> origin/master
  useEffect(() => {
    if (id) {
      dispatch(getMovieDetails(Number(id)));
    }
  }, [dispatch, id]);
<<<<<<< HEAD
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }
=======
>>>>>>> origin/master

  return movieDetails ? <MovieDetailsView movieDetails={movieDetails} /> : null;
};

export default MovieDetailsContainer;
