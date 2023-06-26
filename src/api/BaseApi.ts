import {authenticationActions} from '@bus/authentication/actions';
import store from '@redux/store';
import axios, {AxiosRequestConfig} from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: `${process.env.API_URL}`,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig & any): AxiosRequestConfig => {
    const token = localStorage.getItem('@fun_ACCESS_TOKEN');
    config.headers[`Access-Control-Allow-Credentials`] = true;
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
);
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response: any = await axios({
          method: 'POST',
          url: `${process.env.API_URL}/account/refresh-token`,
          data: {},
          withCredentials: true,
        });
        localStorage.setItem('@fun_ACCESS_TOKEN', response.data.token);
        return api.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    if (error.response.status === 401 && error.config?._isRetry) {
      store.dispatch(authenticationActions.authenticationSuccess(false));
      localStorage.removeItem('@fun_ACCESS_TOKEN');
      // window.location.reload();
    }
  },
);

export default api;
