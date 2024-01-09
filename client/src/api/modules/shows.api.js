import externalClient from '../client/external.client';

const showsEndpoints = {
  all: `/shows`,
  oneShow: showId => `/shows/${showId}`,
};

const showsApi = {
  getAllShows: async params => {
    try {
      return await externalClient.get(showsEndpoints.all, {
        params,
      });
    } catch (err) {
      return { err };
    }
  },
  getShow: async (showId, params) => {
    try {
      return await externalClient.get(showsEndpoints.oneShow(showId), {
        params,
      });
    } catch (err) {
      return { err };
    }
  },
};

export default showsApi;
