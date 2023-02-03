<template>
  <div style="height: 100%; width: 100%; margin: auto">
    <el-result icon="error" title="Acknowledge error">
      <template slot="extra">
        <div>ID: 23</div>
        <div>Name: Account Hellman insufficient balance</div>
        <el-button type="primary" size="medium" @click="$router.push({name: 'alerts'})">Go to list of alerts</el-button>
      </template>
    </el-result>
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
