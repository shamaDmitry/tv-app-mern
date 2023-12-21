import externalClient from '../client/external.client';

const peopleEndpoints = {
  getPersonDetail: ({ personId }) => `/people/${personId}`,
  all: `/people`,
};

const peopleApi = {
  getPersonDetail: async ({ personId }) => {
    try {
      return await externalClient.get(
        peopleEndpoints.getPersonDetail({ personId })
      );
    } catch (err) {
      return { err };
    }
  },
  getAllPeople: async params => {
    try {
      return await externalClient.get(peopleEndpoints.all, {
        params,
      });
    } catch (err) {
      return { err };
    }
  },
};

export default peopleApi;
