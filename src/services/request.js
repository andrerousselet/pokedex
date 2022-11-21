import axios from 'axios';

export const requestData = async (endpoint) => {
  const { data } = await axios.get(endpoint);
  return data;
};
