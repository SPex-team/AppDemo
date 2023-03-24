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

import Web3 from "web3"
import {ethers} from "ethers";
import contractAbi from "@/views/tests/abi";

export default {
  name: "Test1",
  methods: {
    async onTest() {
      const r = Web3.utils.toHex("t10000 confirm transfer to Spex timestamp: 9677496540")
      console.log("r: ", r)
    },
    onTest2() {
      const r = Web3.utils.hexToAscii("0x74313030303020636f6e6669726d207472616e7366657220746f20537065782074696d657374616d703a2039363737343936353430")
      console.log("r: ", r)
    },
    onTest3() {
      const packed = ethers.utils.solidityPack(["string", "bytes", "bytes", "address", "uint256", "uint64"], ["validateOwnerSign", "0x01", "0x02", "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", 1, 1677814410])
      console.log("packed: ", packed)
    },
    onTest4() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      var web3 = new Web3(provider);
      const encoded = web3.eth.abi.encodeFunctionCall({
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "setName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }, ['zhangsan']);

      console.log("encoded: ", encoded);

      web3.eth.abi.decodeParameters()

    },
    onTest5() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const abi = [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "EventSetName",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "setName",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getName",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
      const web3 = new Web3(provider);


      var contract = new web3.eth.Contract(abi, "0x0bB93d3Ec5c695175FB8997766bA478851f00247");
      console.log("contract: ", contract)

      contract.getPastEvents('EventSetName', {
        fromBlock: 152000,
        toBlock: 'latest'
      }, function (error, events) {
        console.log(events);
      })
    }
  }
}
</script>

<style scoped>

</style>
