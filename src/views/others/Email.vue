<template>
  <div style="height: 100%; width: 100%; margin: auto">
    <h1>Email</h1>
    <img style="width: 100%; margin-top: 60px" src="./assets/email_1.png"/>
    <img style="width: 100%; margin-top: 60px" src="./assets/email_2.png"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    load() {
      this.count += 2
    }
  }
}
</script>
