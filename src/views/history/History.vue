<template>
  <div style="height: 100%; width: 70%; margin: auto">
    <!--    <div style="display: flex; justify-content: right">-->
    <!--      <el-button  icon="el-icon-plus" @click="$router.push({name: 'subscribe-add'})">Subscribe</el-button>-->
    <!--    </div>-->
    <div style="display: flex; justify-content: space-between; padding: 30px">
      <div>
        <span style="font-size: 45px">Sold</span>
      </div>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="account"
          label="Account"
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
          prop="date"
          label="Sold Time">
      </el-table-column>
      <el-table-column
          fixed="right"
          label=""
          width="150">
        <template slot-scope="scope">
          <el-button
              @click="openLink('https://filscan.io/tipset/pool-detail?address=f01860588')"
              type="info"
              size="small">
            Detail
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
export default {
  data() {
    return {
      count: 0,
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
  methods: {
    load() {
      this.count += 2
    },
    openLink(link) {
      window.open(link, "_blank")
    }
  }
}
</script>
