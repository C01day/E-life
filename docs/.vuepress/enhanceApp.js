import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
  }) => {
    Vue.use(ElementUI)
    // ...做一些其他的应用级别的优化
  }