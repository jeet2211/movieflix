// src/api/api.ts
import axios from 'axios';

const API_KEY = 'f91b9ff84727d10259b3e5e67b64bdde'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};
export const fetchMovies = async () => {
  const response = await api.get('/movie/popular');
  return response.data.results;
};

export const fetchMovieDetails = async (id: number) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};
