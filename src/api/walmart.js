import fetch from '@/common/js/fetch'

/**
 * 图片列表
 * @param {*} query
 */
export function queryInspectionsByDate (data) {
  return fetch({
    url: `/manage/securityCode/queryInspectionsByDate`,
    method: 'post',
    data: data
  })
}

/**
 * 图片删除
 * @param {*} query
 */
export function deleteInspection (data) {
  return fetch({
    url: `/manage/securityCode/deleteInspection`,
    method: 'post',
    data: data
  })
}
