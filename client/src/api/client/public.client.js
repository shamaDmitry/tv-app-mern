import axios from 'axios';
import queryString from 'query-string';
import { API_URL } from '../../../config';

const publicClient = axios.create({
  baseURL: API_URL,
  paramsSerializer: {
    encode: params => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
  };
});

publicClient.interceptors.response.use(
  response => {
    console.log('publicClient response', response);

    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  err => {
    throw err.response.data;
  }
);

export default publicClient;
