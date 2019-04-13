import request from 'utils/request';

const info = (params, token) => {
  return request({
    url: '/api/bond/getCustomerInfo',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const buyFlow = (params, token) => {
  return request({
    url: '/api/bond/getContractBuyFlow',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
export { info, buyFlow };
