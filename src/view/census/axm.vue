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
        <h3>访问明细（2018-11-24）</h3>
      </div>

      <el-row>
        <el-col :span="24">
          <el-table :data="tableData" stripe style="width: 100%;margin-bottom:50px;">
            <el-table-column prop="a" label="类型"></el-table-column>
            <el-table-column prop="b" label="浏览时间"></el-table-column>
            <el-table-column prop="a" label="页面来源"></el-table-column>
            <el-table-column prop="b" label="受访"></el-table-column>
            <el-table-column prop="a" label="ip"></el-table-column>
            <el-table-column prop="b" label="地区"></el-table-column>
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
import { getCodeStatsByDate } from '@/api/census'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      list: [],
      dateTime: [],
      tableData: [{ queryRate: '', refferRate: '' }],
      page: 1,
      total: 0, // table数据总条数
      pageSize: 20,
      searchForm: {
        create_start: '',
        create_end: '',
        size: 50
      }
    }
  },
  mounted () {
    this.codeStatsByDate()
  },
  methods: {
    async codeStatsByDate () {
      let data = {
        startDate: '',
        endDate: ''
      }
      let res = await getCodeStatsByDate(data)
      if (res.data.code === ERR_OK) {
        let result = res.data
        let queryRate = result.queryRate * 100
        let refferRate = result.refferRate * 100
        this.tableData[0].queryRate = `${queryRate.toFixed(2)}%`
        this.tableData[0].refferRate = `${refferRate.toFixed(2)}%`
        this.list = result.list
        console.log(this.list)
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
    handleCurrentChange: function (currentPage) {
      this.loading = true
      let params = Object.assign({ page: currentPage }, this.searchForm)
      this.broadcastLists(params)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>