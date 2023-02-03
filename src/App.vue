<template>
  <div id="app" style="height: 100%">

    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100%;
  overflow-y: hidden;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  /*font-family: Inter,sans-serif;*/
}

html {
  height: 100%;
}
</style>


<script>
// import axios from "axios"

export default {
  // mounted() {
  //   var client = axios.create({
  //     baseURL: "http://localhost:8000",
  //     timeout: 20000,
  //     withCredentials: true
  //   })
  //   var params = {
  //     "public_key": "0x22182Ee4820d399252dD1757BAafE0d4Dc86a389",
  //     "signature": "0xa682add3885787b42d9101b4383b9ab4c1c96e04c5dc90139f3c3c20dc1da3596a871bafa4eaa1f23512e095735c8d85e365623a890ee9faa152a465be27fbee1c"
  //   }
  //   let url = "http://192.168.19.22:8000/api/v1/alerting/alerts"
  //   client.get(url).then(response => {
  //     console.log(response)
  //   }).catch(error => {
  //     console.error(error)
  //   })
  // },
  // login() {
  //   var client = axios.create({
  //     baseURL: "http://localhost:8000",
  //     timeout: 20000,
  //     withCredentials: true
  //   })
  //   var params = {
  //     "public_key": "0x22182Ee4820d399252dD1757BAafE0d4Dc86a389",
  //     "signature": "0xa682add3885787b42d9101b4383b9ab4c1c96e04c5dc90139f3c3c20dc1da3596a871bafa4eaa1f23512e095735c8d85e365623a890ee9faa152a465be27fbee1c"
  //   }
  //   let url = "http://192.168.19.22:8000/api/v1/users/users/login-signature"
  //   client.get(url, {params: params}).then(response => {
  //     console.log(response)
  //   }).catch(error => {
  //     console.error(error)
  //   })
  // }
}
</script>

<style>

</style>
