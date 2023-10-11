import publicClient from '../client/public.client';

const peopleEndpoints = {
  getPersonDetail: ({ personId }) => `/people/${personId}`,
};

const peopleApi = {
  getPersonDetail: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        peopleEndpoints.getPersonDetail({ personId })
      );

      // const response = await publicClient(' https://api.tvmaze.com').get(
      //   peopleEndpoints.getPersonDetail({ personId })
      // );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default peopleApi;
