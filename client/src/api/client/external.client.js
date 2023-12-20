import axios from 'axios';
import queryString from 'query-string';
import { EXTERNAL_URL } from '../../../config';

const externalClient = axios.create({
  baseURL: EXTERNAL_URL,
  paramsSerializer: {
    encode: params => queryString.stringify(params),
  },
});

externalClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
  };
});

externalClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  err => {
    throw err.response.data;
  }
);

export default externalClient;
