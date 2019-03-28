import request from '../utils/request';

const Authentication = params => {
  return request({
    url: '/auth/viettelpay/authorize' + params,
    method: 'get'
  });
};
const Check = params => {
  return request({
    url: '/api/account/checkStatus',
    method: 'get',
    params: params
  });
};
const Register = params => {
  return request({
    url: '/api/account/register',
    method: 'get',
    params: params
  });
};
const CheckLink = params => {
  return request({
    url: '/api/account/checkAccountToLink',
    method: 'get',
    params: params
  });
};
const Link = params => {
  return request({
    url: '/api/account/link',
    method: 'get',
    params: params
  });
};
export { Authentication, Check, Register, CheckLink, Link };
