import axios from 'axios';
import publicClient from '../client/public.client';
import privateClient from '../client/private.client';

const userEndpoints = {
  myInfo: 'https://api.ipregistry.co/?key=w7rmsmjomkkb1u47',
  login: '/user/login',
  register: '/user/register',
  updateInfo: '/user/update-info',
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

  updateInfo: async userData => {
    try {
      const response = await privateClient.post(
        userEndpoints.updateInfo,
        userData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

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

  myInfo: async () => {
    try {
      const code = localStorage.getItem('countryCode');

      if (!code) {
        const response = await axios.get(userEndpoints.myInfo);

        localStorage.setItem(
          'countryCode',
          response?.data?.location?.country?.code || 'EN'
        );
      }

      return code;
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
