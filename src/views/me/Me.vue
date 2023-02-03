<template>
  <div style="height: 100%; width: 70%; margin: auto">
    <!--    <div style="display: flex; justify-content: right">-->
    <!--      <el-button  icon="el-icon-plus" @click="$router.push({name: 'subscribe-add'})">Subscribe</el-button>-->
    <!--    </div>-->
    <div style="display: flex; justify-content: space-between; padding: 30px">
      <div>
        <span style="font-size: 45px">My Miners</span>
      </div>
      <div>
        <el-button icon="el-icon-plus" @click="$df_add_dialog('Add')">Add</el-button>
      </div>
    </div>
    <el-table
        :data="data"
        style="width: 100%">
      <el-table-column
          prop="miner_id"
          label="Miner ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="is_list"
          label="Order Status">
        <template slot-scope="scope">
          <span :style="{color: scope.row.is_list?'#67C23A':'909399'}">{{ scope.row.is_list?'Listing':'Unlisted' }}</span>
        </template>
      </el-table-column>
      <el-table-column
          :formatter="(row, column, cellValue, index) => row.is_list?row.price:''"
          prop="price"
          label="Price(FIL)">
      </el-table-column>
      <el-table-column
          :formatter="(row, column, cellValue, index) => row.is_list?(new Date(cellValue).toISOString()).slice(0,16):''"
          prop="list_time"
          label="List Time">
      </el-table-column>
      <el-table-column
          fixed="right"
          label=""
          width="360">
        <template slot-scope="scope">
          <el-button
              :disabled="!scope.row.is_list"
              @click="add_dialog('MeChangePrice', {'item': scope.row, 'type': 'update'})"
              type="primary"
              size="small">
            Change Price
          </el-button>
          <el-tooltip class="item" effect="dark" content="Change owner from contract to you self" placement="top">
            <el-button
                @click="add_dialog('MeChangeOwner', {'item': scope.row, 'type': 'update'})"
                type="success"
                size="small">
              Transfer Out
            </el-button>
          </el-tooltip>
          <el-button
              @click="onCancel(scope.row)"
              style="width: 70px"
              v-if="scope.row.is_list"
              :loading="scope.row.cancelLoading"
              type="info"
              size="small">
            Cancel
          </el-button>
          <el-button
              v-else
              style="width: 70px"
              @click="add_dialog('MeList', {'item': scope.row, 'type': 'update'})"
              type="info"
              size="small">
            List
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="height: 80px">
      <el-pagination
          @current-change="get_data()"
          :current-page.sync="params.page"
          :page-size="params.page_size"
          style="float: right; margin-right: 100px; margin-top: 20px"
          background
          layout="total, prev, pager, next"
          :total="count"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>

import df_admin from "df-admin"
import store from "@/store";

export default {
  mixins: [df_admin.mixins.list_mixin],
  data() {
    return {
      count: 0,
      url: "spex/miners",
      params: {
        "ordering": "-list_time",
        "page_size": 6
      },
      tableData: [{
        account: "f01860588",
        price: "20234.4 FIL",
        balance: "23234.4 FIL",
        power: "92.78 PiB",
        date: "2022-10-23"
      }, {
        account: "f01860588",
        price: "20234.4 FIL",
        balance: "23234.4 FIL",
        power: "92.78 PiB",
        date: "2022-10-23"
      }, {
        account: "f01860588",
        price: "20234.4 FIL",
        balance: "23234.4 FIL",
        power: "92.78 PiB",
        date: "2022-10-23"
      }, {
        account: "f01860588",
        price: "20234.4 FIL",
        balance: "23234.4 FIL",
        power: "92.78 PiB",
        date: "2022-10-23"
      }]
    }
  },
  mounted() {
    this.get_data()
  },
  methods: {
    load() {
      this.count += 2
    },
    openLink(link) {
      window.open(link, "_blank")
    },
    listTimeFormat(row, column, cellValue, index) {
      if (this.data[index].is_list) {
        return new Date(cellValue).toISOString()
      } else {
        return ""
      }
    },
    async _chainCancelList(minerId) {
      const tx = await this.$store.state.contract.cancelList(minerId, {gasLimit: 10000000})
      this.$message.info(`Waiting transaction: ${tx.hash}`)

      console.log("tx: ", tx)
      let result = await tx.wait()
      console.log("result: ", result)
    },
    async onCancel(item) {
      item.is_list = false
      item.price = 0
      item._cancelLoading = true
      await this._chainCancelList(item.miner_id)
      this.$c_master.put(`spex/miners/${item.miner_id}`, item).then(response => {
        this.$message.success("successful")
        item._cancelLoading = false
      })
    },
    after_get_data(data) {
      data.results.forEach(item => {
        item._cancelLoading = false
      })
    }
  }
}
</script>
