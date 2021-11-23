// 打包的入口文件
import countDowns from './countDowns/index.vue'

const components = [
  countDowns
]
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {install, countDowns}