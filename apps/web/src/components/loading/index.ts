/**
 * @Author: yqe@360shop.cn
 * @Date: 2019-12-02 10:29:38
 * @Last Modified by: yqe@360shop.cn
 * @Last Modified time: 2019-12-02 10:29:38
 */

// import LoadingVue from './index.vue'

// // 定义插件对象
// const LoadingWrap = {}

// // vue的install方法，用于定义vue插件
// LoadingWrap.install = function (Vue, options) {
//   const LoadingInstance = Vue.extend(LoadingVue)
//   let currentLoading
//   const initInstance = () => {
//     // 实例化vue实例
//     currentLoading = new LoadingInstance()
//     const loadingBoxEl = currentLoading.$mount().$el
//     document.body.appendChild(loadingBoxEl)
//   }
//   // 在Vue的原型上添加实例方法，以全局调用
//   Vue.prototype.$loadingWrap = {
//     show(options) {
//       if (!currentLoading) {
//         initInstance()
//       }
//       // if (typeof options === 'string') {
//       //   currentLoading.content = options
//       // } else if (typeof options === 'object') {
//       //   Object.assign(currentLoading, options)
//       // }
//       // return currentLoading.show()
//       //   .then(val => {
//       //     currentLoading = null
//       //     return Promise.resolve(val)
//       //   })
//       //   .catch(err => {
//       //     currentLoading = null
//       //     return Promise.reject(err)
//       //   })
//       currentLoading.loadingVisible = true
//     },
//     close() {
//       return currentLoading.close()
//     },
//     showMsgBox(options) {
//       if (!currentLoading) {
//         initInstance()
//       }
//       if (typeof options === 'string') {
//         currentLoading.content = options
//       } else if (typeof options === 'object') {
//         Object.assign(currentLoading, options)
//       }
//       return currentLoading
//         .showMsgBox()
//         .then((val) => {
//           currentLoading = null
//           return Promise.resolve(val)
//         })
//         .catch((err) => {
//           currentLoading = null
//           return Promise.reject(err)
//         })
//     },
//   }
// }
// export default LoadingWrap

import LoadingVue from './index.vue'
import { createApp } from 'vue'
let instance: any
const LoadingWrap = (text: any): void => {
  if (instance) {
    instance.text = text
    instance.show()
    instance.close()
    return
  }
  instance = createApp(LoadingVue).mount(document.createElement('div'))
  instance.text = text
  document.body.appendChild(instance.$el)
}

export { LoadingWrap }
