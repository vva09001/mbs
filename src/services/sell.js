import request from '../utils/request';

const List = params => {
  return request({
    url: '/api/bond/getListContractSell',
    method: 'get',
    params: params
  });
};
const Detail = params => {
  return request({
    url: '/api/bond/getContractSellDetail',
    method: 'get',
    params: params
  });
};
const Info = params => {
  return request({
    url: '/api/bond/getContractSellInfo',
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
    url: '/api/bond/updateContractSell',
    method: 'get',
    params: params
  });
};
const Approve = params => {
  return request({
    url: '/bond/approveContractBuy',
    method: 'get',
    params: params
  });
};
const Change = params => {
  return request({
    url: '/api/bond/changeContractSellInfo',
    method: 'get',
    params: params
  });
};
const ChangeUdp = params => {
  return request({
    url: '/api/bond/changeContractSellUdp',
    method: 'get',
    params: params
  });
};
const Delete = params => {
  return request({
    url: '/api/bond/deleteContractSell',
    method: 'get',
    params: params
  });
};
const Date = params => {
  return request({
    url: '/api/bond/getListSellDate',
    method: 'get',
    params: params
  });
};
export { List, Detail, Info, Flow, Update, Approve, Change, ChangeUdp, Delete, Date };
