import request from '../utils/request';

const List = params => {
  return request({
    url: '/api/bond/getListContractBuy',
    method: 'get',
    params: params
  });
};
const Detail = params => {
  return request({
    url: '/api/bond/getContractBuyDetail',
    method: 'get',
    params: params
  });
};
const Info = params => {
  return request({
    url: '/api/bond/getContractBuyInfo',
    method: 'get',
    params: params
  });
};
const Flow = params => {
  return request({
    url: '/api/bond/getContractBuyFlow',
    method: 'get',
    params: params
  });
};
const Update = params => {
  return request({
    url: '/api/bond/updateContractBuy',
    method: 'get',
    params: params
  });
};
const Approve = params => {
  return request({
    url: '/api/bond/approveContractBuy',
    method: 'get',
    params: params
  });
};
const Delete = params => {
  return request({
    url: '/api/bond/deleteContractBuy',
    method: 'get',
    params: params
  });
};
export { List, Detail, Info, Flow, Update, Approve, Delete };
