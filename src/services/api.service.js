import axios from 'axios';
import localStorageUtils from '../utils/localStorage.utils';

class ApiServices {
  constructor() {
    this.api = axios.create({});


    // permite configurar o request antes dele ser feito pelo axios
    this.api.interceptors.request.use((config) => {
      if (config.url.includes('/public')) {
        return config;
      }

      const { token } = localStorageUtils.get();

      config.headers.Authorization = `Bearer ${token}`;

      return config;

    });

    this.api.interceptors.response.use(
      response => response,
      error => {
        if (error.response.data.status === 401 && error.response.data.type === 'Auth-Token-Expired') {
          localStorageUtils.delete();

          window.location = '/login'
        }

        return Promise.reject(error);
      },
    );
  }

  addResidents = async data => {
    await this.api.post(`${process.env.REACT_APP_API_BASE_URL}/residents/private/register`, data);
  }
}


export default new ApiServices();


