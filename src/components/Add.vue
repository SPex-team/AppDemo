<template>
  <el-dialog
      title="Add List"
      :visible.sync="dialogVisible"
      width="60%">
    <div style="height: 400px">
      <el-steps :active="stepActive" finish-status="success">
        <el-step title="Transfer Miner"></el-step>
        <el-step title="Confirm"></el-step>
        <el-step title="Set Price"></el-step>
      </el-steps>

      <el-form :model="formData" label-width="100px" v-show="stepActive==1"
               style="padding-right: 70px; margin-top: 50px">
        <el-form-item>
          <span>Run command to transfer miner: </span>
          <br />
          <span>./lotus-miner actor set-owner --really-do-it=true {{
              config.contractT4Address
            }} &#60Owner address&#62</span>
        </el-form-item>
        <el-form-item style="margin-top: 100px">
          <el-button type="primary" style="margin-top: 12px; width: 100%" @click="next">I have executed</el-button>
        </el-form-item>
      </el-form>

      <el-form :model="formData" label-width="100px" v-show="stepActive==2"
               style="padding-right: 70px; margin-top: 50px">
        <el-form-item
            label="Miner Id:"
            prop="miner_id"
            required
        >
          <el-input v-model="formData.miner_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <p>lotus wallet sign &#60Owner address&#62 {{ stringToHex(formData.miner_id) }}</p>
        </el-form-item>
        <el-form-item
            label="Sign:"
            prop="sign"
            required
        >
          <el-input v-model="formData.sign" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="confirmLoading" style="margin-top: 12px; width: 100%" @click="onConfirm">
            Confirm
          </el-button>
        </el-form-item>
      </el-form>

      <el-form v-model="formData.price" :model="formData" label-width="100px" v-show="stepActive==3"
               style="padding-right: 70px; margin-top: 100px">
        <el-form-item
            label="Price:"
            prop="price"
        >
          <el-input v-model="formData.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" :loading="listLoading" type="primary" @click="onList">List Order</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>

import store from "../store"

import config from "../config"

import df_admin from "df-admin";

export default {
  mixins: [df_admin.mixins.dialog_mixin],
  props: {},
  data() {
    return {
      dialogVisible: true,
      stepActive: 1,
      maxStep: 3,
      formData: {
        miner_id: "",
        is_list: false,
        sign: "",
        price: 0,
        list_time: Date.now()
      },
      confirmLoading: false,
      listLoading: false,
      config: config,
      miner: {}
    }
  },
  methods: {
    next() {
      if (this.stepActive++ > this.maxStep) this.stepActive = this.maxStep;
    },
    back() {
      if (this.stepActive-- < 1) this.stepActive = 1;
    },
    async confirmChangeOwnerToSpex(minerId, sign) {
      const tx = await store.state.contract.confirmChangeOwnerToSpex(minerId, sign, {gasLimit: 10000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)

      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    async onConfirm() {
      this.confirmLoading = true
      await this.confirmChangeOwnerToSpex(this.formData.miner_id, this.formData.sign)
      this.formData.owner = store.state.userAddress
      console.log("this.formData: ", this.formData)
      console.log("this.$backend: ", this.$backend)
      this.$backend.post("spex/miners", this.formData).then(response => {
        this.$message.success("Successful")
        this.miner = response.data
      })
      this.next()
      this.confirmLoading = false
    },
    async listMiner(minerId, price) {
      const tx = await store.state.contract.confirmChangeOwnerToSpex(minerId, price, {gasLimit: 10000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)

    },
    async onList() {
      this.listLoading = true
      this.formData.is_list = true
      await this.listMiner(this.formData.miner_id, this.formData.price)
      this.$backend.put(`spex/miners/${this.miner.miner_id}`, this.formData).then(response => {
        this.$message.success("Successful")
        this.listLoading = false
        this.$emit("add_item", response.data)
        this.on_close(false)
      })
    },
    stringToHex(content){
      var hex, i;
      var result = "";
      for (i=0; i<content.length; i++) {
        hex = content.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
      }
      return result
    }
  }
}
</script>
