import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

interface MovieListingRowViewProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
  onAddToFavorites: () => void;
  onAddToWatchlist: () => void;
}

const MovieListingRowView: React.FC<MovieListingRowViewProps> = ({ movie ,onAddToFavorites, onAddToWatchlist}) => {
  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        <h3 className="movie-title">{movie.title}</h3>
      </Link>
      <button onClick={onAddToFavorites}>Add to Favorites</button>
      <button onClick={onAddToWatchlist}>Add to Watchlist</button>
    </div>
  );
};

export default MovieListingRowView;
