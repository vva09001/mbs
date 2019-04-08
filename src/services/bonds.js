import request from '../utils/request';

const list = (params, token) => {
  return request({
    url: '/api/bond/getList',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
const detail = (params, token) => {
  return request({
    url: '/api/bond/getdetail',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: params
  });
};
export { list, detail };
