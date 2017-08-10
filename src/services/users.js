import request from '../utils/request';
import config from '../utils/config';

// 查询
export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=${config.PAGE_SIZE}`);
}
// 删除
export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}
// 修改
export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}
// 新增
export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
