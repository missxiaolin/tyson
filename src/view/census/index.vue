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
          <el-row type="flex" justify="center">
            <el-button type="info" @click="resetForm('searchForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('searchForm')">搜索</el-button>
          </el-row>
        </el-row>
      </el-form>

      <el-row>
        <el-col :span="24">
          <el-table :data="tableData" stripe style="width: 100%;margin-bottom:50px;">
            <el-table-column prop="a" label="地区"></el-table-column>
            <el-table-column prop="b" label="合计"></el-table-column>
            <el-table-column prop="a" label="浏览数-PC"></el-table-column>
            <el-table-column prop="b" label="浏览数-WAP"></el-table-column>
            <el-table-column prop="a" label="浏览数-微信"></el-table-column>
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
export default {
  data () {
    return {
      dateTime: [],
      tableData: [{ a: '71.87%', b: '4.63%' }],
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
  methods: {
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