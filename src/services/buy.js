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
    url: '/api/bond/getContractBuyInfo',
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
const FlowCash = (params, token) => {
  return request({
    url: '/api/bond/getflowcash',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Update = (params, token) => {
  return request({
    url: '/api/bond/updateContractBuy',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Contract = (params, token) => {
  return request({
    url: '/api/bond/getContractBuyDetail',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Approve = (params, token) => {
  return request({
    url: '/api/bond/approveContractBuy',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const Delete = (params, token) => {
  return request({
    url: '/api/bond/deleteContractBuy',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
export { List, Detail, Info, Flow, FlowCash, Update, Contract, Approve, Delete };
