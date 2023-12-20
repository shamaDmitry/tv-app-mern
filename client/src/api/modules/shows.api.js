import externalClient from '../client/external.client';

const showsEndpoints = {
  all: `/shows`,
};

const showsApi = {
  getAllShows: async () => {
    try {
      return await externalClient.get(showsEndpoints.all);
    } catch (err) {
      return { err };
    }
  },
};

export default showsApi;
