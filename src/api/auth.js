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

/**
 * 退出登录
 * @param {*} query
 */
export function userLogout (query) {
  return fetch({
    url: '/manage/logout',
    method: 'post',
    data: query
  })
}

/**
 * 修改密码
 * @param {*} query
 */
export function editPwd (query) {
  return fetch({
    url: '/manage/modifyPassWord',
    method: 'post',
    data: query
  })
}
