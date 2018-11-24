import fetch from '@/common/js/fetch'

/**
 * 登录
 * @param {*} query
 */
export function login (query) {
  return fetch({
    url: '/manage/login',
    method: 'post',
    data: query
  })
}
