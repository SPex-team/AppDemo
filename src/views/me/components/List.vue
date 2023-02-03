<template>
  <el-dialog
      title="List Miner"
      :visible.sync="is_visible"
      width="30%">
    <el-form :model="form_data" label-width="100px" style="padding-right: 50px; margin-top: 20px">
      <el-form-item
          label="Price:"
          prop="price"
      >
        <el-input v-model="form_data.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
      >
        <el-button type="primary" style="width: 100%" @click="onList" :loading="loading">Confirm</el-button>
<!--        <el-button @click="on_close(false)">Cancel</el-button>-->
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
    async _chainList(minerId, price) {
      const tx = await store.state.contract.listMiner(minerId, price, {gasLimit: 10000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    async onList() {
      this.form_data.is_list = true
      this.loading = true
      await this._chainList(this.item.miner_id, this.form_data.price)
      this.on_submit()
    }
  }
};
</script>
