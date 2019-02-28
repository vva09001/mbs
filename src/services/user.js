import request from '../utils/request';

const login = data => {
  return request({
    url: '/login',
    method: 'post',
    data: data
  });
};
const register = data => {
  return request({
    url: '/register',
    method: 'post',
    data: data
  });
};
export { login, register };
