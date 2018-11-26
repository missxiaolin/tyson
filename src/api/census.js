
import fetch from '@/common/js/fetch'

/**
 * 按照日期区间查询统计汇总信息
 * @param {*} query
 */
export function getCodeStatsByDate (data) {
  return fetch({
    url: `/stats/code/getCodeStatsByDate`,
    method: 'post',
    data: data
  })
}

/**
 * 分页查询安心码访问或查询明细列表
 * @param {*} query
 */
export function listVisitCodes (data) {
  return fetch({
    url: `/stats/code/listVisitCodes?page=${data.page}&pageSize=20`,
    method: 'post',
    data: data
  })
}
