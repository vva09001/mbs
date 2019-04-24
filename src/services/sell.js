import request from 'utils/request';

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
const Detail = (params, token) => {
  return request({
    url: '/api/bond/getContractBuyDetail',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Info = (params, token) => {
  return request({
    url: '/api/bond/getContractSellInfo',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Flow = (params, token) => {
  return request({
    url: '/api/bond/getContractBuyFlow',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Update = (params, token) => {
  return request({
    url: '/api/bond/updateContractSell',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Approve = (params, token) => {
  return request({
    url: '/bond/approveContractBuy',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Change = (params, token) => {
  return request({
    url: '/api/bond/changeContractSellInfo',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Date = (params, token) => {
  return request({
    url: '/api/bond/getListSellDate',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
export { List, Info, Flow, Update, Approve, Change, Date, Detail };
