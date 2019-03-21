import request from '../utils/request';

const Check = params => {
  return request({
    url: '/account/checkStatus',
    method: 'get',
    params: params
  });
};
const Register = params => {
  return request({
    url: '/account/register',
    method: 'get',
    params: params
  });
};
const CheckLink = params => {
  return request({
    url: '/account/checkAccountToLink',
    method: 'get',
    params: params
  });
};
const Link = params => {
  return request({
    url: '/account/link',
    method: 'get',
    params: params
  });
};
export { Check, Register, CheckLink, Link };
