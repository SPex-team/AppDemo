import Vue from "vue"

// const install = function (Vue, options) {

//     // df-admin 组件请求后端数据默认axios实例
//     Vue.prototype.$c_master = options.$c_master

//     // 添加对话框
//     Vue.prototype.$df_add_dialog = (name, props = {}) => {
//         var Comp = Vue.component(name)
//         var vm = new Comp({ propsData: props })
//         vm.$mount()
//         document.body.appendChild(vm.$el)
//         return vm
//     }

//     // 计算页码大小
//     Vue.$df_calc_page_size = (line_height = 49, other_height = 340, mini = 8) => {
//         var page_size = Math.floor((window.innerHeight - other_height) / line_height)
//         return page_size > mini ? page_size : mini
//     }
// }

export const $df_add_dialog = (name, props = {}) => {
    var Comp = Vue.component(name)
    var vm = new Comp({ propsData: props })
    vm.$mount()
    document.body.appendChild(vm.$el)
    return vm
}

export const $df_calc_page_size = (line_height = 49, other_height = 340, mini = 8) => {
    var page_size = Math.floor((window.innerHeight - other_height) / line_height)
    return page_size > mini ? page_size : mini
}

// 时间字符串截取到分钟 更友好
export const $df_datetime = (value) => {
    return value ? value.substr(0, 16) : value
  }
