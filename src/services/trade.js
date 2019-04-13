import request from '../utils/request';

const List = (params, token) => {
  return request({
    url: '/api/bond/getListContractSell',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Detail = (params, token) => {
  return request({
    url: '/api/bond/getContractSellDetail',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Change = (params, token) => {
  return request({
    url: '/api/bond/changeContractSellUdp',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Delete = (params, token) => {
  return request({
    url: '/api/bond/deleteContractSell',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
export { List, Detail, Change, Delete };
