import externalClient from '../client/external.client';

const sheduleEndpoints = {
  getSchedule: ({ query }) => `/schedule?${query}`,
  getFullSchedule: () => `schedule/full`,
};

const sheduleApi = {
  getSchedule: async () => {
    try {
      return await externalClient.get(sheduleEndpoints.getFullSchedule());
    } catch (err) {
      return { err };
    }
  },
  getFullSchedule: async () => {
    try {
      const response = await externalClient.get(
        sheduleEndpoints.getFullSchedule()
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default sheduleApi;
