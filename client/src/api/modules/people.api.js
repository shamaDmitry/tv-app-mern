import externalClient from '../client/external.client';

const peopleEndpoints = {
  getPersonDetail: personId => `/people/${personId}`,
  all: `/people`,
};

const peopleApi = {
  getAllPeople: async params => {
    try {
      return await externalClient.get(peopleEndpoints.all, {
        params,
      });
    } catch (err) {
      return { err };
    }
  },
  getPersonDetail: async (personId, params) => {
    try {
      return await externalClient.get(
        peopleEndpoints.getPersonDetail(personId),
        {
          params: params,
        }
      );
    } catch (err) {
      return { err };
    }
  },
};

export default peopleApi;
