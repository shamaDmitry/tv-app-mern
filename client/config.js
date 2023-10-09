export const LOCAL_STORAGE_TOKEN_NAME = 'userToken';
export const API_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5000/api/v1'
    : '';
