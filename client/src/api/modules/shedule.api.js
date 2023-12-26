import externalClient from '../client/external.client';

const sheduleEndpoints = {
  getSchedule: `/schedule`,
  getFullSchedule: `schedule/full`,
};

const sheduleApi = {
  getSchedule: async params => {
    try {
      return await externalClient.get(sheduleEndpoints.getSchedule, {
        params,
      });
    } catch (err) {
      return { err };
    }
  },
  getFullSchedule: async () => {
    try {
      return await externalClient.get(sheduleEndpoints.getFullSchedule);
    } catch (err) {
      return { err };
    }
  },
};

export default sheduleApi;
