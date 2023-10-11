import publicClient from '../client/public.client';

const sheduleEndpoints = {
  getSchedule: ({ query }) => `/schedule?${query}`,
  getFullSchedule: () => `schedule/full`,
};

const sheduleApi = {
  getSchedule: async () => {
    try {
      const response = await publicClient.get(
        sheduleEndpoints.getFullSchedule()
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getFullSchedule: async () => {
    try {
      const response = await publicClient.get(
        sheduleEndpoints.getFullSchedule()
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default sheduleApi;
