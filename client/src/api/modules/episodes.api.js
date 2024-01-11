import externalClient from '../client/external.client';

const episodesApiEndpoints = {
  getEpisode: episodeId => `/episodes/${episodeId}`,
};

const episodesApi = {
  getEpisode: async (episodeId, params) => {
    try {
      return await externalClient.get(
        episodesApiEndpoints.getEpisode(episodeId),
        {
          params,
        }
      );
    } catch (err) {
      return { err };
    }
  },
};

export default episodesApi;
