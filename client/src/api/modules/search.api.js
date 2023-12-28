import externalClient from '../client/external.client';

const searchApiEndpoints = {
  showSearch: `/search/shows`,
  peopleSearch: `/search/people`,
};

const searchApi = {
  getShowSearch: async params => {
    try {
      return await externalClient.get(searchApiEndpoints.showSearch, {
        params,
      });
    } catch (err) {
      return { err };
    }
  },
  getPeopleSearch: async (params) => {
    try {
      return await externalClient.get(searchApiEndpoints.peopleSearch, {
        params,
      });
    } catch (err) {
      return { err };
    }
  },
};

export default searchApi;
