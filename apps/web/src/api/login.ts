/**
 * @Author: yanqien
 * @Date: 2021-05-04 18:13:46
 * @Last Modified by: yanqien
 * @Last Modified time: 2021-05-04 18:13:46
 */
import request from '@/utils/request'

/**
 * 登录
 * @param {*} params
 */
export function userLogin(params: object): any {
  return request({
    url: '/user/login',
    method: 'post',
    params,
  })
}

/**
 * 注册
 * @param {*} params
 */
export function getArticleList(params: object): any {
  return request({
    url: '/user/register',
    method: 'get',
    params,
  })
}
