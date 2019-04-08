import request from '../utils/request';

const Authentication = params => {
  return request({
    url: '/auth/viettelpay/authorize' + params,
    method: 'get'
  });
};
const PaymentGateway = params => {
  return request({
    url: '/api/viettelpay/paymentGateway' + params,
    method: 'get'
  });
};
const VerifyResult = params => {
  return request({
    url: '/api/viettelpay/verifyResult' + params,
    method: 'get'
  });
};
export { Authentication, PaymentGateway, VerifyResult };
