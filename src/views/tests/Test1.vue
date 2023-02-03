<template>
  <div>
    <h1>Test1</h1>
    <el-button @click="onTest">test</el-button>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Test1",
  methods: {
    onTest() {

      // this.$api.get("spex/miners").then(response=>{
      //   console.log("response: ", response)
      // })

      // const instance = axios.create({
      //   baseURL: 'https://some-domain.com/api/',
      //   timeout: 1000,
      //   headers: {'X-Custom-Header': 'foobar'}
      // });
      //
      //
      // console.log("instance: ", instance)
      // console.log("this.$api: ", this.$api)
      //
      // instance.get("spex/miners").then(response => {
      //   console.log("response: ", response)
      // })

      console.log("1")

      this.$backend.get("/spex/miners").then(response => {
        console.log("response: ", response)
      })

    }
  }
}
</script>

<style scoped>

</style>
