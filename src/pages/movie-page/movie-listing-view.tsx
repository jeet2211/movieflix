import React from 'react';
import MovieListingRowView from './movie-listing-row-view';
import './index.css'
interface MovieListingViewProps {
  movies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
  onAddToFavorites: (id: number) => void;
  onAddToWatchlist: (id: number) => void;
}

const MovieListingView: React.FC<MovieListingViewProps> = ({ movies, onAddToFavorites, onAddToWatchlist }) => {
  return (
    <div className='movie-grid'>
      {movies.map((movie) => (
        <MovieListingRowView 
          key={movie.id} 
          movie={movie} 
          onAddToFavorites={() => onAddToFavorites(movie.id)} 
          onAddToWatchlist={() => onAddToWatchlist(movie.id)} />
      ))}
    </div>
  );
};

export default MovieListingView;
