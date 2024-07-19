import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
<<<<<<< HEAD

=======
>>>>>>> origin/master
interface MovieListingRowViewProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
<<<<<<< HEAD
  onAddToFavorites: () => void;
  onAddToWatchlist: () => void;
}

const MovieListingRowView: React.FC<MovieListingRowViewProps> = ({ movie ,onAddToFavorites, onAddToWatchlist}) => {
=======
}

const MovieListingRowView: React.FC<MovieListingRowViewProps> = ({ movie }) => {
>>>>>>> origin/master
  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        <h3 className="movie-title">{movie.title}</h3>
      </Link>
<<<<<<< HEAD
      <button onClick={onAddToFavorites}>Add to Favorites</button>
      <button onClick={onAddToWatchlist}>Add to Watchlist</button>
=======
>>>>>>> origin/master
    </div>
  );
};

export default MovieListingRowView;
