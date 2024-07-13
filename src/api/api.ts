import axios from 'axios';

const API_KEY = 'f91b9ff84727d10259b3e5e67b64bdde'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});


export const fetchMovies = async () => {
  const response = await api.get('/movie/popular');
  return response.data.results;
};

export const fetchMovieDetails = async (id: number) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const addToFavorites = async (accountId: string, sessionId: string, mediaId: number, mediaType: string, favorite: boolean) => {
  const response = await api.post(`/account/${accountId}/favorite`, {
      media_type: mediaType,
      media_id: mediaId,
      favorite: favorite,
  }, {
      params: { session_id: sessionId }
  });
  return response.data;
};

export const addToWatchlist = async (accountId: string, sessionId: string, mediaId: number, mediaType: string, watchlist: boolean) => {
  const response = await api.post(`/account/${accountId}/watchlist`, {
      media_type: mediaType,
      media_id: mediaId,
      watchlist: watchlist,
  }, {
      params: { session_id: sessionId }
  });
  return response.data;
};

export const getFavorites = async (sessionId: string) => {
  const response = await api.get(`/account/{account_id}/favorite/movies`, {
    params: { session_id: sessionId },
  });
  return response.data.results;
};

export const getFavoriteTV = async (sessionId: string) => {
  const response = await api.get(`/account/{account_id}/favorite/tv`, {
    params: { session_id: sessionId },
  });
  return response.data.results;
};

export const createSession = async (requestToken: string) => {
  const response = await api.post(`/authentication/session/new`, {
      request_token: requestToken,
  });
  return response.data;
};

export const createGuestSession = async () => {
  const response = await api.get(`/authentication/guest_session/new`);
  return response.data;
};

export const createRequestToken = async () => {
  const response = await api.get(`/authentication/token/new`);
  return response.data;
};

export const validateWithLogin = async (username: string, password: string, requestToken: string) => {
  const response = await api.post(`/authentication/token/validate_with_login`, {
      username,
      password,
      request_token: requestToken,
  });
  return response.data;
};