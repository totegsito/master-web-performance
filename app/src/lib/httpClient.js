import axios from 'axios'

import API_CONFIG from '../constants/api';

const { url: baseURL } = API_CONFIG


const baseParams = {
  limit: 10,
};

const httpClientInstance = axios.create({
  baseURL,
  params: baseParams,
});

const get = (url, params) =>
  httpClientInstance.get(url, { params: { ...baseParams, ...params } });


module.exports = {
  get,
};
