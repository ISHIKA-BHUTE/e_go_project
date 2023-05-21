import axios from 'axios'
import configData from '../../Config/Config.json'

const bikeLocationApi = axios.create({
  
    baseURL: configData.api.bikeLocationApi,
    timeout: 5000,
    headers: {
      'Accept-Version': 1,
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

export default bikeLocationApi