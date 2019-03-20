import request from '../utils/request';

const list = params => {
  return request({
    url: '/bond/getList',
    method: 'get',
    params: params
  });
};
const detail = params => {
  return request({
    url: '/bond/getdetail',
    method: 'get',
    params: params
  });
};
export { list, detail };
