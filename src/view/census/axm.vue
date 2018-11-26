<template>
  <div class="app-container">
    <div class="ibox-content">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-row>
          <el-col :span="4">
            <el-form-item label="日期：">
              <el-date-picker type="daterange" v-model="dateTime" @change="dateChangebirthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-button type="info" @click="resetForm('searchForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('searchForm')">搜索</el-button>
        </el-row>
      </el-form>
      <div class="ibox-title">
        <h3>统计信息</h3>
      </div>
      <el-row>
        <el-col :span="24">
          <el-table :data="list" stripe style="width: 100%;margin-bottom:50px;">
            <el-table-column prop="device" label="">
            </el-table-column>
            <el-table-column prop="visitTysonCount" label="安心码访问总数（泰森）">
            </el-table-column>
            <el-table-column prop="queryTysonCount" label="安心码查询总数（泰森）">
            </el-table-column>
            <el-table-column prop="visitWalmartCount" label="安心访问总数（沃尔玛）">
            </el-table-column>
            <el-table-column prop="queryWalmartCount" label="安心访问总数（沃尔玛）">
            </el-table-column>
            <el-table-column prop="totalCount" label="访问总数">
            </el-table-column>
            <el-table-column prop="ipCount" label="ip总数">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-table :data="tableData" stripe style="width: 100%;margin-bottom:50px;">
            <el-table-column prop="queryRate" label="安心码跳转率">
            </el-table-column>
            <el-table-column prop="refferRate" label="安心码查询率">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <div class="ibox-title">
        <h3>访问明细</h3>
      </div>

      <el-row>
        <el-col :span="24">
          <el-table :data="dataList" stripe style="width: 100%;margin-bottom:50px;">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="securityCode" label="安心码"></el-table-column>
            <el-table-column prop="visitTime" label="访问时间"></el-table-column>
            <el-table-column prop="device" label="设备类型"></el-table-column>
            <el-table-column prop="ip" label="ip"></el-table-column>
            <el-table-column prop="referer" label="来源"></el-table-column>
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="city" label="城市"></el-table-column>
          </el-table>
          <el-row type="flex" justify="center" style="margin-top: 30px;">
            <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :current-page="page" :page-size="pageSize" :total="total">
            </el-pagination>
          </el-row>
        </el-col>
      </el-row>

    </div>
  </div>
</template>


<script>
import { getCodeStatsByDate, listVisitCodes } from '@/api/census'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      dataList: [],
      list: [],
      dateTime: [],
      tableData: [{ queryRate: '', refferRate: '' }],
      page: 1,
      total: 0, // table数据总条数
      pageSize: 20,
      searchForm: {
        create_start: '',
        create_end: '',
        size: 20
      }
    }
  },
  mounted () {
    this.searchForm.create_start = this.getNowFormatDate()
    this.searchForm.create_end = this.getNowFormatDate()
    this.codeStatsByDate()
    this.visitCodes()
  },
  methods: {
    // 列表
    async visitCodes () {
      let data = {
        startDate: this.searchForm.create_start || '',
        endDate: this.searchForm.create_end || '',
        page: this.page,
        pageSize: 20,
        visitOrQueryFlag: 1 // 0访问，1查询，空是全部
      }
      let res = await listVisitCodes(data)
      let result = res.data
      if (result.code == ERR_OK) {
        this.dataList = result.list
        console.log(this.dataList)
        this.total = result.total
        return false
      }
      Message(result.msg)
    },
    // 年月日
    getNowFormatDate () {
      var date = new Date()
      var seperator1 = '-'
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate
      return currentdate
    },
    // 统计
    async codeStatsByDate () {
      let data = {
        startDate: this.searchForm.create_start || '',
        endDate: this.searchForm.create_end || ''
      }
      let res = await getCodeStatsByDate(data)
      if (res.data.code === ERR_OK) {
        let result = res.data
        let queryRate = result.queryRate * 100
        let refferRate = result.refferRate * 100
        this.tableData[0].queryRate = `${queryRate.toFixed(2)}%`
        this.tableData[0].refferRate = `${refferRate.toFixed(2)}%`
        this.list = result.list
        return false
      }
      Message(res.data.msg)
    },
    // 重置
    resetForm (formName) {
      this.dateTime = []
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.codeStatsByDate()
          this.visitCodes()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 时间格式
    dateChangebirthday (val) {
      this.searchForm.create_start = val[0]
      this.searchForm.create_end = val[1]
    },
    handleCurrentChange (currentPage) {
      this.page = currentPage
      this.visitCodes()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>