import request from 'utils/request';

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
export { buyFlow };
