import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import df_admin from "df-admin"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import * as plugins from "./utils/plugins"


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(df_admin, api)

Vue.prototype.$backend = api;

const require_component = require.context(
    './components',
    true,
    /[A-Z]\w+\.(vue|js)$/
)

const require_views_component = require.context(
    './views',
    true,
    /[A-Z]\w+\.(vue|js)$/
)

// 自动注册 src/components目录以及子目录所有组件 注册后的组件名为组件name  子目录文件(名)首字母会自动大写
require_component.keys().forEach(file_name => {
  console.log("file_name: ", file_name)
  const component_config = require_component(file_name)
  console.log("component_config: ", component_config)

  const component_name = upperFirst(
    camelCase(
      file_name.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  console.log("component_name: ", component_name)
  Vue.component(
      component_name,
    component_config.default
  )
})

require_views_component.keys().forEach(file_name => {
  if (file_name.split("/").length != 4 || file_name.split("/")[2] != "components") {
    return
  }
  const component_config = require_views_component(file_name)
  var component_name = upperFirst(
      camelCase(
          file_name.replace(/^\.\/(.*)\.\w+$/, '$1')
      )
  )
  component_name = component_name.split("Components")[0] + component_name.split("Components")[1]
  console.log("component_name: ", component_name)
  Vue.component(
      component_name,
      component_config.default
  )
})


for (let item in plugins) {
  Vue.prototype[item] = plugins[item]
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
