<template>
  <div class="app-container">
    <div class="ibox-title">
      <h3>统计信息汇总</h3>
    </div>
    <div class="ibox-content">
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
      this.searchForm.create_sdeleteRowtart = val[0]
      this.searchForm.create_end = val[1]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>