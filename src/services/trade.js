import request from '../utils/request';

const List = (params, token) => {
  return request({
    url: '/api/bond/getListContractBuy',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
export { List };
