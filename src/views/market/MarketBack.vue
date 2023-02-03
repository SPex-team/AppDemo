<template>
  <div style="height: 100%; width: 70%; margin: auto">
    <!--    <div style="display: flex; justify-content: right">-->
    <!--      <el-button  icon="el-icon-plus" @click="$router.push({name: 'subscribe-add'})">Subscribe</el-button>-->
    <!--    </div>-->
    <div style="display: flex; justify-content: space-between; padding: 30px">
      <div>
        <span style="font-size: 45px">List</span>
      </div>
      <div>
        <el-button icon="el-icon-plus" @click="$df_add_dialog('Add')">Add</el-button>
      </div>
    </div>
    <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="miner_id"
          label="Miner ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="balance"
          label="Balance"
          width="180">
      </el-table-column>
      <el-table-column
          prop="power"
          label="Power">
      </el-table-column>
      <el-table-column
          prop="price"
          label="Price">
      </el-table-column>
      <el-table-column
          :formatter="(row, column, cellValue, index) => new Date(cellValue).toISOString()"
          prop="list_time"
          label="List Time">
      </el-table-column>
      <el-table-column
          fixed="right"
          label=""
          width="150">
        <template v-slot="scope">
          <el-button
              @click="openLink('https://filscan.io/tipset/pool-detail?address=f01860588')"
              type="info"
              size="small">
            Detail
          </el-button>
          <el-button
              @click="onBuy(scope.row)"
              :loading="buyLoading"
              type="primary"
              size="small">
            Buy
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="float: right">
      <el-pagination
          style="margin-top: 40px"
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>

import LocalAdd from "@/components/Add"
import Vue from "vue"
import store from "@/store";

export default {
  components: {
    LocalAdd,
  },
  data() {
    return {
      count: 0,
      tableData: [],
      loading: false,
      buyLoading: false,
      // tableData: [{
      //   account: "f01860588",
      //   price: "20234.4 FIL",
      //   balance: "23234.4 FIL",
      //   power: "92.78 PiB",
      //   date: "2022-10-23"
      // }, {
      //   account: "f01860588",
      //   price: "20234.4 FIL",
      //   balance: "23234.4 FIL",
      //   power: "92.78 PiB",
      //   date: "2022-10-23"
      // }, {
      //   account: "f01860588",
      //   price: "20234.4 FIL",
      //   balance: "23234.4 FIL",
      //   power: "92.78 PiB",
      //   date: "2022-10-23"
      // }, {
      //   account: "f01860588",
      //   price: "20234.4 FIL",
      //   balance: "23234.4 FIL",
      //   power: "92.78 PiB",
      //   date: "2022-10-23"
      // }]
    }
  },
  mounted() {
    this.loadTableData()
  },
  methods: {
    loadTableData() {
      this.loading = true
      this.$backend.get("spex/list-miners").then(response=>{
        this.tableData = response.data.results
        this.loading = false
      })
    },
    load() {
      this.count += 2
    },
    openLink(link) {
      window.open(link, "_blank")
    },
    onAdd() {
      const Comp = Vue.component("Add")
      // console.log("a: ", a)
      var vm = new Comp({ propsData: {} })
      vm.$mount()
      document.body.appendChild(vm.$el)
    },
    async buyMiner(minerId) {
      const tx = await store.state.contract.buyMiner(minerId, {gasLimit: 10000000})
      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    async onBuy(item) {
      this.buyLoading = true
      await this.buyMiner(item.miner_id)
      this.$backend.post(`spex/list-miners/${item.miner_id}/buy`,{
        buyer: this.$store.state.userAddress,
      }).then(response=>{
        this.$message.success("Successful")
        this.data.splice(this.data.indexOf(item), 1)
      })
      this.buyLoading = false
      // this.$api.request({
      //   method: "post",
      //   url: `spex/list-miners/${item.id}/buy`,
      //   data: {
      //     buyer: this.$store.userAddress,
      //   }
      // }).then(response=>{
      //   this.$message.success("Successful")
      //   this.data.splice(this.data.indexOf(item), 1)
      // })
    }
  },
}
</script>
