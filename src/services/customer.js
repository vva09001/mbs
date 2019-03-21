import request from '../utils/request';

const info = params => {
  return request({
    url: '/bond/getCustomerInfo',
    method: 'get',
    params: params
  });
};
const buyFlow = params => {
  return request({
    url: '/bond/getContractBuyFlow',
    method: 'get',
    params: params
  });
};
export { info, buyFlow };