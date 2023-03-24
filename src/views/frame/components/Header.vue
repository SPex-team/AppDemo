<template>
  <div
      style="background: #409EFF; padding: 0px 100px; display: flex; align-items: center; justify-content: space-between">
    <div>
      <!--      <img-->
      <!--          style="height: 44px; display: inline-block; vertical-align: middle; box-sizing: border-box; vertical-align: middle;"-->
      <!--          src="../../../assets/logo_hellman.png"-->
      <!--      />-->
      <span
          style="color: #FFFFFF; margin-left: 8px; letter-spacing:2px; font-weight: 700; font-size: 34px; height: 100%; display: inline-block; box-sizing: border-box; vertical-align: middle;">&nbsp;SPex </span>
    </div>
    <el-menu mode="horizontal" :default-active="$route.name" background-color="#409EFF" text-color="rgb(232, 230, 227)"
             active-text-color="#FFFFFF">
      <!--      <el-menu-item style="height: 80px; font-size: 20px; padding-top: 10px" index="home" route="home" @click="$router.push('home')">Home</el-menu-item>-->
      <el-menu-item style="height: 80px; font-size: 20px; padding-top: 10px" index="market" route="market"
                    @click="$router.push('market')">Maket
      </el-menu-item>
      <el-menu-item style="height: 80px; font-size: 20px; padding-top: 10px" index="history" route="history"
                    @click="$router.push('history')">History
      </el-menu-item>
      <el-menu-item style="height: 80px; font-size: 20px; padding-top: 10px" index="me" @click="$router.push('me')">Me
      </el-menu-item>
    </el-menu>
    <div> <span style="color: white; margin-right: 10px">Network:</span>
      <el-dropdown style="margin-right: 30px">
      <span class="el-dropdown-link" style="color: white">
    HyperSpace<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>HyperSpace</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button v-if="$store.state.userAddress==null" @click="$df_add_dialog('FrameWalletList')">Connect Wallet</el-button>
      <el-button style="width: 124px" v-else>{{
          $store.state.userAddress.slice(0, 6)
        }}...{{ $store.state.userAddress.slice(37, 41) }}
      </el-button>
    </div>
  </div>
</template>

<script>

import {ethers} from "ethers"
import abi from "../../../others/abi"
import config from "../../../config"

export default {
  methods: {
    async onClickConnectWallet() {
      const addresses = await window.ethereum.request({method: 'eth_requestAccounts'})
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(config.contractAddress, abi, signer)
      this.$store.commit("setUserAddress", addresses[0])
      this.$store.commit("setProvider", provider)
      this.$store.commit("setContract", contract)
    }
  }
}
</script>

<style scoped>

</style>
