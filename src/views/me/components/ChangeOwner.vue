<template>
  <el-dialog
      title="Change Owner"
      :visible.sync="is_visible"
      width="40%">
    <el-steps :active="stepActive" style="padding: 10px 50px; margin-left: 50px" finish-status="success">
      <el-step title="Transfer Miner Out"></el-step>
      <el-step title="Accept Miner"></el-step>
    </el-steps>

    <el-form :model="form_data" v-show="stepActive==0" label-width="100px"
             style="padding-right: 50px; margin-top: 20px">
      <el-form-item
          label="Address:"
          prop="owner"
          required
      >
        <el-input v-model="form_data.owner" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
      >
        <el-button :loading="loading" style="width: 100%" type="primary" @click="onChangeOwner">Confirm</el-button>
      </el-form-item>
    </el-form>

    <el-form v-show="stepActive==1" label-width="100px" style="padding-right: 70px; margin-top: 0px">
      <el-form-item>
        <span>Run command to accept miner:</span>
        <br />
          <span>./lotus-miner actor set-owner --really-do-it=true &#60Accept address&#62 {{
              config.contractT4Address
            }}</span>
      </el-form-item>
      <el-form-item style="margin-top: 0px">
        <el-button type="primary" style="margin-top: 12px; width: 100%" @click="on_submit">I have executed</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>


<script>
import df_admin from "df-admin";
import store from "../../../store";
import config from "../../../config"

export default {
  mixins: [df_admin.mixins.create_update_dialog_mixin],
  data() {
    return {
      url: `spex/miners/${this.item.miner_id}`,
      stepActive: 0,
      config: config
    }
  },
  mounted() {
    console.log("store: ", store)
    this.form_data.owner = ""
  },
  methods: {
    async _chainChangeOwner(minerId, newOwner) {
      const tx = await store.state.contract.changeOwner(minerId, newOwner, {gasLimit: 10000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    async onChangeOwner() {
      this.loading = true
      await this._chainChangeOwner(this.item.miner_id, this.form_data.owner)
      this.stepActive = 1
    }
  }
};
</script>
