import request from '../utils/request';

const list = () => {
  return request({
    url: '/coin',
    method: 'get'
  });
};
const get = id => {
  return request({
    url: '/coin/' + id,
    method: 'get'
  });
};
export { list, get };
