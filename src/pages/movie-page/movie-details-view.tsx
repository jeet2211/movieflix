import React from 'react';

interface MovieDetailsViewProps {
  movieDetails: {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  };
}

const MovieDetailsView: React.FC<MovieDetailsViewProps> = ({ movieDetails }) => {
  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
    </div>
  );
};

export default MovieDetailsView;
