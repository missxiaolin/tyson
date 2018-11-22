import fetch from '@/common/js/fetch'

/**
 * axm列表
 * @param {*} query
 */
export function axmList (data) {
  return fetch({
    url: `/manage/securityCode/listSecurityCodes?page=${data.page}&pageSize=20`,
    method: 'post',
    data: data
  })
}
  