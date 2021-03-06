import Mock from 'mockjs'
import * as login from './modules/login'
import * as user from './modules/user'
import * as menu from './modules/menu'

// 1. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 2. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
fnCreate(login, true)
fnCreate(user, true)
fnCreate(menu, true)

/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mod, isOpen = true) {
  if (isOpen) {
    for (var key in mod) {
      ((res) => {
        if (res.isOpen !== false) {
          let baseUrl = 'http://localhost:8080'
          let url = baseUrl + res.url
          Mock.mock(res.url, res.type, res.data)
        }
      })(mod[key]() || {})
    }
  }
}