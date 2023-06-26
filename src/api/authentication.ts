import api from './BaseApi';

interface authorizeType {
  login: string;
  password: string;
}

interface registerType {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export const login = (data: authorizeType) => {
  return api.post('/account/login', data);
};

export const refresh = () => {
  return api.post('/account/refresh-token');
};

export const logout = () => {
  return api.post('/account/logout');
};

export const register = (data: registerType) => {
  return api.post('/account/register', data);
};
