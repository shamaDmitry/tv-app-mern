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
  };
});

publicClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  err => {
    throw err;
  }
);

export default publicClient;
