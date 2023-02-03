<template>
  <el-dialog
      title="Change Price"
      :visible.sync="dialogVisible"
      width="30%">
    <el-form :model="formData" label-width="100px" v-show="stepActive==0" style="padding-right: 70px; margin-top: 20px">
      <el-form-item
          label="New Price:"
          prop="price"
      >
        <el-input autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
      >
<!--        <el-button type="primary">Confirm</el-button>-->
<!--        <el-button>Cancel</el-button>-->
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      dialogVisible: true,
      stepActive: 0,
      formData: {
        price: ""
      }
    }
  },
  methods: {
    next() {
      if (this.stepActive++ > 1) this.stepActive = 0;
    }
  }
}
</script>
