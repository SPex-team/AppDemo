<template>
  <el-dialog
      title="Change Owner"
      :visible.sync="is_visible"
      width="40%">
    <el-steps :active="stepActive" style="padding: 10px 50px; margin-left: 50px" finish-status="success">
      <el-step title="Transfer Miner Out"></el-step>
      <el-step title="Accept Transfer"></el-step>
      <el-step title="Complete"></el-step>
    </el-steps>

    <el-form :model="form_data" v-show="stepActive==1" label-width="100px"
             style="padding-right: 50px; margin-top: 20px">
      <el-form-item
          label="New owner address:"
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

    <el-form v-show="stepActive==2" label-width="100px" style="padding-right: 70px; margin-top: 0px">
      <el-form-item>
        <span>Sign {{ buildMessage.msg_cid_hex }} with {{ form_data.owner }} to confirm transfer owner to new owner address</span>
      </el-form-item>
      <el-form-item
          label="Sign:"
          prop="sign"
          required
      >
        <el-input v-model="form_data.sign" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 0px">
        <el-button type="primary" style="margin-top: 12px; width: 100%" @click="on_submit">I have executed</el-button>
      </el-form-item>
    </el-form>

    <el-result v-show="stepActive==3" icon="success" title="成功提示" subTitle="请根据提示进行操作">
      <template slot="extra">
        <el-button type="primary" size="medium">返回</el-button>
      </template>
    </el-result>
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
      stepActive: 3,
      config: config,
      confirmSignContent: "",
      buildMessage: {},
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
    updateBuildMessage() {
      var data = {
        miner_id: this.item.miner_id,
        owner: this.formData.new_owner_address
      }
      this.$backend.post("spex/messages/build-change-owner-out", data).then(response => {
        this.buildMessage = response.data
      })
    },
    async onChangeOwner() {
      this.updateBuildMessage()
      this.loading = true
      await this._chainChangeOwner(this.item.miner_id, this.form_data.owner)
      this.stepActive = 1
    },
  },
  // watch: {
  //   step
  // }
};
</script>
