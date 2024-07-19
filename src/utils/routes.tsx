import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieListingContainer from '../pages/movie-page/movie-listing-container';
import MovieDetailsContainer from '../pages/movie-page/movie-details-container';
<<<<<<< HEAD
import LoginPage from '../pages/loginPage';
const AppRoutes: React.FC = () => {
  return (
    <Routes>
       <Route path="/login" element={<LoginPage />} />
=======

const AppRoutes: React.FC = () => {
  return (
    <Routes>
>>>>>>> origin/master
      <Route path="/" element={<MovieListingContainer />} />
      <Route path="/movie/:id" element={<MovieDetailsContainer />} />
    </Routes>
  );
};

export default AppRoutes;
