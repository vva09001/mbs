import request from 'utils/request';

const Authentication = params => {
  return request({
    url: '/auth/viettelpay/authorize',
    method: 'get',
    params: params
  });
};
const PaymentGateway = (params, token) => {
  return request({
    url: '/api/viettelpay/paymentGateway',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const VerifyResult = (params, token) => {
  return request({
    url: '/api/viettelpay/verifyResult',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
export { Authentication, PaymentGateway, VerifyResult };
