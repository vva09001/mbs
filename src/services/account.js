import request from 'utils/request';

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
const CheckLink = (params, token) => {
  return request({
    url: '/api/account/checkAccountToLink',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Link = (params, token) => {
  return request({
    url: '/api/account/link',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const List = (params, token) => {
  return request({
    url: '/api/bond/getReportAsset',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Info = (params, token) => {
  return request({
    url: '/api/bond/getCustomerInfo',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};

const CheckAccountCode = (params, token) => {
  return request({
    url: '/api/payment/getAccountInfo',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Transfer = (params, token) => {
  return request({
    url: '/api/viettelpay/paymentCashIn',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};

export { Check, Register, CheckLink, Link, List, Info, CheckAccountCode, Transfer };
