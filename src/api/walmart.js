import fetch from '@/common/js/fetch'

/**
 * axm列表
 * @param {*} query
 */
export function walmartAdd (query) {
  return fetch({
    url: '/manage/securityCode/listSecurityCodes?page=1&pageSize=20',
    method: 'post',
    data: query
  })
}
