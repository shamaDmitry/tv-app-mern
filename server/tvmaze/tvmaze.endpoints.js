const API_URL = process.env.API_URL;

const tvmazeEndpoints = {
  personDatail: ({ personId }) => `${API_URL}/people/${personId}`,
};

export default tvmazeEndpoints;
