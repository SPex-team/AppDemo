<template>
  <div>
    <h1>Test1</h1>
    <el-button @click="onTest">test</el-button>
    <el-button @click="onTest2">test2</el-button>
    <el-button @click="onTest3">test3</el-button>
    <el-button @click="onTest4">test4</el-button>
    <el-button @click="onTest5">test5</el-button>
  </div>
</template>

<script>

import axios from "axios";


import fa from "@glif/filecoin-address"
import {ethers} from "ethers";
import config from "@/config";
import abi from "@/others/abi";

import contractAbi from "./abi"

const { utils } = require("ethers");

export default {
  name: "Test1",
  methods: {
    async onTest() {

      console.log("onTest")

      const addresses = await window.ethereum.request({method: 'eth_requestAccounts'})
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract("0x6F60d38f263a6F1B5b02C1A9b585069F460f763E", contractAbi, signer)
      let tx = await contract.confirmTransferMinerIntoSPex("0x00939801",
          "0x76616c69646174654f776e65725369676e00939801009298012ebd277c069e7ccacdde2cead2d9aab549561c2f0000000000000000000000000000000000000000000000000000000000000c45000000006401b3e7",
          1977833191,{gasLimit: 100000000})
      // let tx = await contract.getSectorSize("0x00da43", {gasLimit: 100000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    onTest2() {
      const minerIdStr = "t021229"
      const minerId = fa.newFromString(minerIdStr);
      console.log("minerIdStr: ", minerIdStr)
      // console.log("minerId: ", minerId);
      // console.log(
      //     "minerId :", minerId.toString(),
      //     "bytes: ", minerId.bytes,
      //     "hex addr:", Buffer.from(minerId.bytes).toString("hex")
      // );
      console.log("Buffer.from(minerId.bytes).toString(\"hex\"): ", Buffer.from(minerId.bytes).toString("hex"))
      console.log("minerId.bytes: ", minerId.bytes)

      const mi = fa.newActorAddress(minerId.bytes, fa.CoinType.MAIN)
      console.log("mi: ", mi.toString())


      // const addr = Buffer.from(fa.newFromString("t3wflhpiwrlxmm2xyhorkgbfco4guq3zebfydtanvjfnhmmld25fwrrhkgnc5xdgne7d6ggu4n24ubk4x4nylq").bytes).toString("hex");
      // console.log("addr: ", addr)

// minerId : t01000 ,bytes:  Uint8Array(3) [ 0, 232, 7 ] hex addr: 00e807
    },
    onTest3() {
      // const packed = ethers.utils.solidityPack(["string", "uint64", "uint64", "address", "uint256", "uint256"], ["validateOwnerSign", 21218, 26437, "0x2EBD277C069e7CCAcdDe2cEAD2d9aab549561C2f", 3141, 1678776404])
      const abi = ethers.utils.defaultAbiCoder;
      const packed = abi.encode(["string", "uint64", "uint64", "address", "uint256", "uint256"], ["validateOwnerSign", 33014, 20412, "0x2EBD277C069e7CCAcdDe2cEAD2d9aab549561C2f", 3141, 1678776404])
      // const packed = abi.encode(["string", "uint64", "uint64", "address", "uint256", "uint256"], ["validateOwnerSign", 21218, 26437, "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", 3141, 1678776404])
      console.log("packed: ", packed)
    },
    async get_transaction_result(txn_hash, provider){
      const a = await provider.getTransaction(txn_hash);
      try {
        let r = await provider.call(a, a.blockNumber);
        return {'ok':true, 'result': r};
      } catch (err) {
        return {'ok':false, 'result': err};
      }
    },
    async onTest4() {

      console.log("onTest")

      const addresses = await window.ethereum.request({method: 'eth_requestAccounts'})
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract("0x6F60d38f263a6F1B5b02C1A9b585069F460f763E", contractAbi, signer)
      let tx = await contract.confirmTransferMinerIntoSPex("0x00939801",
          "0x76616c69646174654f776e65725369676e00939801009298012ebd277c069e7ccacdde2cead2d9aab549561c2f0000000000000000000000000000000000000000000000000000000000000c45000000006401b3e7",
          1977833191,{gasLimit: 100000000})
      // let tx = await contract.getSectorSize("0x00da43", {gasLimit: 100000000})
      await this.get_transaction_result(tx.hash, provider)

      this.$message.info(`Waiting transaction: ${tx.hash}`)
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    onTest5() {
      // const minerId = fa.newFromString("0x00c79f01");
      // console.log("minerId: ", minerId)
      //
      // console.log("decode: ", fs.newAddress("0x00c79f01"))

      const addrHex = "0x00eda501";
      console.log("addrHex: ", addrHex)
      const newAddr = fa.newAddress(
          0,
          utils.arrayify(utils.hexStripZeros(addrHex))
      );
      console.log(newAddr.toString());

      // console.log(fa.idFromAddress("0x00c79f01"));
    }
  }
}
</script>

<style scoped>

</style>
