import fetch from '@/common/js/fetch'

/**
 * 工厂列表
 * @param {*} query
 */
export function factoryList (data) {
  return fetch({
    url: `/manage/factory/listFactories?page=${data.page}&pageSize=20`,
    method: 'post',
    data: data
  })
}

/**
 * 添加
 * @param {*} data
 */
export function addFactory (data) {
  return fetch({
    url: `/manage/factory/addFactory`,
    method: 'post',
    data: data
  })
}

/**
 * 修改
 * @param {*} data
 */
export function modifyFactory (data) {
  return fetch({
    url: `/manage/factory/modifyFactory`,
    method: 'post',
    data: data
  })
}

/**
 * 查询单个工厂信息
 * @param {*} data
 */
export function queryFactory (data) {
  return fetch({
    url: `/manage/factory/queryFactory?id=${data.id}`,
    method: 'post',
    data: data
  })
}

/**
 * 删除
 * @param {*} data
 */
export function deleteFactory (data) {
  return fetch({
    url: `/manage/factory/deleteFactory`,
    method: 'post',
    data: data
  })
}
