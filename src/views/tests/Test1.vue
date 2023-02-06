<template>
  <div>
    <h1>Test1</h1>
    <el-button @click="onTest">test</el-button>
    <el-button @click="onTest2">test2</el-button>
  </div>
</template>

<script>

import axios from "axios";


import fa from "@glif/filecoin-address"
import {ethers} from "ethers";
import config from "@/config";
import abi from "@/others/abi";


export default {
  name: "Test1",
  methods: {
    async onTest() {
      const abi = [
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "target",
              "type": "uint64"
            }
          ],
          "name": "getOwner",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "target",
              "type": "uint64"
            }
          ],
          "name": "getOwner2",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "owner",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "proposed",
                  "type": "bytes"
                }
              ],
              "internalType": "struct MinerTypes.GetOwnerReturn",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "target",
              "type": "bytes"
            }
          ],
          "name": "getSectorSize",
          "outputs": [
            {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "target",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "addr",
              "type": "bytes"
            }
          ],
          "name": "transferOwnerOut",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]

      const addresses = await window.ethereum.request({method: 'eth_requestAccounts'})
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract("0x37aB12B8415703E5DeEE2Cc13b5A0E87e526a682", abi, signer)
      let tx = await contract.getOwner("0x00da43", {gasLimit: 100000000})
      // let tx = await contract.getSectorSize("0x00da43", {gasLimit: 100000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    onTest2() {
      const minerId = fa.newFromString("t08666");
      console.log(
          "minerId :", minerId.toString(),
          "bytes: ", minerId.bytes,
          "hex addr:", Buffer.from(minerId.bytes).toString("hex")
      );
      console.log("Buffer.from(minerId.bytes).toString(\"hex\"): ", Buffer.from(minerId.bytes).toString("hex"))

// minerId : t01000 ,bytes:  Uint8Array(3) [ 0, 232, 7 ] hex addr: 00e807
    }
  }
}
</script>

<style scoped>

</style>
