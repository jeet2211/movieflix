import React from 'react';
import MovieListingRowView from './movie-listing-row-view';
import './index.css'
interface MovieListingViewProps {
  movies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
}

const MovieListingView: React.FC<MovieListingViewProps> = ({ movies }) => {
  return (
    <div className='movie-grid'>
      {movies.map((movie) => (
        <MovieListingRowView key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieListingView;
