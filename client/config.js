export const LOCAL_STORAGE_TOKEN_NAME = 'userToken';
export const API_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5000/api/v1'
    : 'https://tv-app-mern-server.vercel.app/api/v1';

export const EXTERNAL_URL = 'https://api.tvmaze.com/';
