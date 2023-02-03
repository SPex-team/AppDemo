<template>
  <div style="height: 100%; width: 70%; margin: auto">
<!--    <el-button icon="el-icon-back" @click="$router.back()">Back</el-button>-->
    <div style="margin-top: 30px">
      <span style="font-size: 45px">Account balance</span>
    </div>
    <el-form label-width="80px" style="margin-top: 20px">
      <el-form-item label="Account:">
        <el-select placeholder="search and select" style="width: 100%">
          <el-option label="0x000000000000000000000000" value="0x000000000000000000000000"></el-option>
          <el-option label="0x000000000000000000000001" value="0x000000000000000000000001"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <img style="width: 100%; margin-top: 10px" src="./assets/history_line.png"/>
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
