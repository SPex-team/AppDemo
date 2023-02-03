<template>
  <el-dialog
      title="Change Price"
      :visible.sync="is_visible"
      width="60%">
    <el-form :model="form_data" label-width="100px" style="padding-right: 50px; margin-top: 20px">
      <el-form-item
          label="Price:"
          prop="price"
          required
      >
        <el-input v-model="form_data.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
      >
        <el-button :loading="loading" type="primary" style="width: 100%" @click="onChangePrice">Confirm</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>


<script>
import df_admin from "df-admin";
import store from "@/store";

export default {
  mixins: [df_admin.mixins.create_update_dialog_mixin],
  data() {
    return {
      url: `spex/miners/${this.item.miner_id}`
    }
  },
  methods: {
    async onChangePrice() {
      this.loading = true
      const tx = await store.state.contract.changePrice(this.item.miner_id, this.form_data.price, {gasLimit: 10000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
      this.on_submit()
    },
    // before_submit() {
    //
    //   return this.form_data
    // }
  }
};
</script>
