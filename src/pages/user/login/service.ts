import { request } from '@umijs/max';

export async function login(data: any) {
  return request('/api/sys/login/account', {
    method: 'POST',
    data
  });
}
