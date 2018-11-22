import fetch from '@/common/js/fetch'

/**
 * axm列表
 * @param {*} query
 */
export function farmList (data) {
  return fetch({
    url: `/manage/farm/listFarms?page=${data.page}&pageSize=20`,
    method: 'post',
    data: data
  })
}

/**
 * 添加
 * @param {*} data
 */
export function addAxm (data) {
  return fetch({
    url: `/manage/securityCode/addSecurityCode?securityCode=${data.securityCode}`,
    method: 'post',
    data: data
  })
}

  /**
   * 修改
   * @param {*} data
   */
export function editAxm (data) {
  return fetch({
    url: `/manage/securityCode/modifySecurityCode?securityCode=${data.securityCode}&id=${data.id}`,
    method: 'post',
    data: data
  })
}

  /**
   * 删除
   * @param {*} data
   */
export function delFarm (data) {
  return fetch({
    url: `/manage/farm/deleteFarm`,
    method: 'post',
    data: data
  })
}
