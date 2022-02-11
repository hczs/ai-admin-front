import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import Plugin from 'v-fit-columns' // 列宽自适应插件
import AFTableColumn from 'af-table-column' // 列宽自适应插件2
import intro from 'intro.js' // 新手引导js库
import 'intro.js/introjs.css' // 新手引导css样式

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
// 国际化
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(Plugin)
Vue.use(AFTableColumn)
// 新手引导 所有option统一设置
Vue.prototype.$intro = intro().setOptions({
  nextLabel: i18n.t('intro.next'),
  prevLabel: i18n.t('intro.prev'),
  doneLabel: i18n.t('intro.done'),
  showStepNumbers: true
})

// 封装一个v-intro-if指令 用于判断在某些特定条件下显示引导内容
Vue.directive('intro-if', {
  bind: function(el, binding, vnode) {
    if (binding.value === false) {
      delete el.dataset.intro
      delete el.dataset.hint
    }
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
