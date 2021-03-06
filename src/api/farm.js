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
export function addFarm (data) {
  return fetch({
    url: `/manage/farm/addFarm`,
    method: 'post',
    data: data
  })
}

  /**
   * 修改
   * @param {*} data
   */
export function editFarm (data) {
  return fetch({
    url: `/manage/farm/modifyFarm`,
    method: 'post',
    data: data
  })
}

  /**
   * 修改
   * @param {*} data
   */
export function infoFarm (data) {
  return fetch({
    url: `/manage/farm/queryFarmInfo`,
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
