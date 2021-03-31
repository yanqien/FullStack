/**
 * @Author: yanqien@mediinfo.com.cn
 * @Date: 2021-03-25 09:23:10
 * @Last Modified by: yanqien@mediinfo.com.cn
 * @Last Modified time: 2021-03-25 09:23:10
 */
import request from '@/utils/request'

/**
 * 文章 —— 获取文章列表
 * @param {*} params
 */
export function getArticleCate(params: object): any {
  return request({
    url: '/article/getArticleCate',
    method: 'get',
    params,
  })
}

/**
 * 文章 —— 获取文章列表
 * @param {*} params
 */
export function getArticleList(params: object): any {
  return request({
    url: '/article/getArticleList',
    method: 'get',
    params,
  })
}
