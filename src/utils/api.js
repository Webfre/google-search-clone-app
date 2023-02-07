import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/customsearch/v1';

const params = {
  key: 'AIzaSyDLoZeUd6Ss1p-tdhmPogKdwBsqxn2w_Fs',
  cx: '73df2c4e3e2e74efb',
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
