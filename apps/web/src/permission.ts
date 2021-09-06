import router from './router'
import { Toast } from 'vant'
import { getToken } from '@/utils/auth'

const whiteList = ['/itemList'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // document.title = to.meta.title || '店铺首页'
  console.log(to, from, next, 111111)
  if (getToken()) {
    // 已经登录的状态
    console.log('已登录')
    if (to.path === '/Login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    console.log('未登录')
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      console.log('未登录白名单')
      next()
    } else {
      if (to.path == '/login') {
        next()
      } else {
        next({ name: 'Login' })
      }
      console.log('去登录页')
    }
  }
  // if (getUid || to.query.sid) { // determine if there has token
  //   /* has token*/
  //     // next({ path: '/mb/dashboard', query: { sid: to.query.sid || 6 }})
  //     // 如果是登录页就进首页
  //   } else {
  //     if (to.path === '/') {
  //       console.log(to.path, '当前路由。。。。')
  //       // next({ path: '/mb/dashboard', query: { sid: to.query.sid }})
  //       next()
  //     } else {
  //         next()
  //     }
  //   }
  // } else {
  //   /* has no token*/
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     next({ path: '/mb/loginRegister/login'}) // 否则全部重定向到登录页
  //   }
  // }
})

// 路由出错时
router.onError((error) => {
  console.log(error, '路由错误报告')
})

router.afterEach(() => {})
