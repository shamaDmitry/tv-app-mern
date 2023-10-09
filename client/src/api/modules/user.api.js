import publicClient from '../client/public.client';

const userEndpoints = {
  login: '/user/login',
  register: '/user/register',
};

const userApi = {
  login: async ({ email, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.login, {
        email,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },

  register: async ({ username, email, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.register, {
        username,
        email,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
