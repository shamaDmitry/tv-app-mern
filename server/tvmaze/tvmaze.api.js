import axiosClient from '../axios/axios.client.js';
import tvmazeEndpoints from './tvmaze.endpoints.js';

const tvmazeApi = {
  personDetail: async ({ personId }) =>
    await axiosClient.get(tvmazeEndpoints.personDatail({ personId })),
};

export default tvmazeApi;
