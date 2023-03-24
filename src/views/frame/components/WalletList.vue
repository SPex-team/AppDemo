<template>
  <el-dialog
      title="Select a Wallet"
      :visible.sync="dialogVisible"
      width="30%">
        <el-button style="width: 100%" @click="onClickConnectWallet">MetaMask</el-button>
  </el-dialog>
</template>
<script>

import df_admin from "df-admin";

import store from "../../../store"

import {ethers} from "ethers"
import abi from "../../../others/abi"
import config from "../../../config"

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
    async onClickConnectWallet() {
      const addresses = await window.ethereum.request({method: 'eth_requestAccounts'})
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(config.contractAddress, abi, signer)
      store.commit("setUserAddress", addresses[0])
      store.commit("setProvider", provider)
      store.commit("setContract", contract)
      this.on_close(false)
    }
  }
}
</script>
