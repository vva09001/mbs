import request from '../utils/request';

const List = params => {
  return request({
    url: '/bond/getListContractSell',
    method: 'get',
    params: params
  });
};
const Detail = params => {
  return request({
    url: '/bond/getContractSellDetail',
    method: 'get',
    params: params
  });
};
const Info = params => {
  return request({
    url: '/bond/getContractSellInfo',
    method: 'get',
    params: params
  });
};
const Flow = params => {
  return request({
    url: '/bond/getContractBuyFlow',
    method: 'get',
    params: params
  });
};
const Update = params => {
  return request({
    url: '/bond/updateContractSell',
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
    url: '/bond/changeContractSellInfo',
    method: 'get',
    params: params
  });
};
const ChangeUdp = params => {
  return request({
    url: '/bond/changeContractSellUdp',
    method: 'get',
    params: params
  });
};
const Delete = params => {
  return request({
    url: '/bond/deleteContractSell',
    method: 'get',
    params: params
  });
};
const Date = params => {
  return request({
    url: '/bond/getListSellDate',
    method: 'get',
    params: params
  });
};
export { List, Detail, Info, Flow, Update, Approve, Change, ChangeUdp, Delete, Date };
