import axios from "axios"
import { Message } from "element-ui"


import store from "@/store"

import config from "@/config"


// 参数序列化 1、剔除空值 2、将数组转换为url模式 3.将Date对象转换成iso格式
export const params_serializer = (params) => {
  var param_list = []
  for (let k in params) {
    if (params[k] === "" || params[k] === null || params[k] == undefined) {
      continue
    }
    if (params[k] instanceof Array) {
      for (let v of params[k]) {
        param_list.push(`${k}=${v}`)
      }
      continue
    }
    if (params[k] instanceof Date) {
      var date = params[k]
      param_list.push(`${k}=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
      continue
    }
    param_list.push(`${k}=${params[k]}`)
  }
  return param_list.join("&")
}

export const filter_out_list_empty_str = (data) => {
  var new_data = []
  for (let item of data) {
    if (item instanceof Array) {
      new_data.push(filter_out_list_empty_str(item))
      continue
    }
    if (item instanceof Object) {
      new_data.push(filter_out_empty_str(item))
      continue
    }
    if (item === "") {
      new_data.push(null)
    } else {
      new_data.push(item)
    }
  }
  return new_data
}

export const filter_out_empty_str = (data) => {
  var new_data = {};
  for (let i in data) {
    if (data[i] instanceof Array) {
      new_data[i] = filter_out_list_empty_str(data[i])
      continue
    }
    if (data[i] instanceof Object) {
      new_data[i] = filter_out_empty_str(data[i])
      continue
    }
    if (data[i] === "") {
      new_data[i] = null;
    } else {
      new_data[i] = data[i];
    }
  }
  return new_data;
}

var master = axios.create({
  baseURL: config.base_url,
  timeout: 80000,
  paramsSerializer: params_serializer,                // // 参数序列化 1、剔除空值 2、将数组转换为url模式 3.将Date对象转换成iso格式
  withCredentials: true                               // 跨域也跟上cookie
})

master.interceptors.request.use(config => {
  config.data = filter_out_empty_str(config.data)     // 将表单中的所有空字符转换成null 前端表单默认都为空字符串 后端除了字符串其余类型不填只能为null
  return config
}, error => {
  return Promise.reject(error)
})

master.interceptors.response.use(response => {
  return response
}, error => {
  // 如果没有response 说明没有请求到后端
  if (!error.response) {
    if (axios.isCancel(error)) {
      console.log("跳转取消")
      return Promise.reject(error)
    }
    if (error.message) {
      Message.error(error.message)
    } else {
      Message.error("unknow error")
    }
    return Promise.reject(error)
  }
  // 401 跳转到sso
  if (error.response.status == 401) {
    return;
  }else if (error.response.status >= 500){
    Message.error("服务器出错啦 请联系管理员")
    return Promise.reject(error)
  }
  var data = error.response.data
  if (data.detail) {
    Message.error(data.detail)
  } else if (data.non_field_errors) {
    Message.error(String(data.non_field_errors).slice(0, 100))
  } else {
    Message.error(JSON.stringify(data).slice(0, 100))
  }
  return Promise.reject(error)
})

export default master
