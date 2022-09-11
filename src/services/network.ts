import axios from 'axios';

const AUTHORIZATION_HEADER = 'authorization';

class Network {
    axios;
    settings;

    constructor(url = '', accessToken : string | undefined = undefined, customSettings = null) {
      this.settings = customSettings || {
        baseURL: url,
        timeout: 10000,
      };
      this.axios = axios.create(this.settings);
      if (accessToken) {
        this.axios.interceptors.request.use((config) => {
          const newConfig = { ...config };
          newConfig.headers[AUTHORIZATION_HEADER] = `Bearer ${accessToken}`;

          return newConfig;
        });
      }
    }
}

export default (url, token = '') => new Network(url, token).axios;
