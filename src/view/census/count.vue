<template>
  <div class="app-container">
    <div class="ibox-title">
      <h3>统计信息汇总</h3>
    </div>
    <div class="ibox-content">
      <el-row>
        <el-col :span="24">
          <table cellpadding="0" cellspacing="0" class="table table-hover">
            <thead>
              <tr>
                <th width="10%"></th>
                <th width="20%">安心码<br>访问总数</th>
                <th width="20%">安心码<br>访问总数</th>
                <th width="10%"></th>
                <th width="20%">总访问量</th>
                <th width="20%">总IP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>合计</th>
                <td>100</td>
                <td>200</td>
                <th>合计</th>
                <td>100</td>
                <td>200</td>
              </tr>
              <tr>
                <th>-</th>
                <td>-</td>
                <td>-</td>
                <th>微信访问</th>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <th>PC版网站</th>
                <td>100</td>
                <td>200</td>
                <th>PC版网站</th>
                <td>100</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-table :data="tableData" stripe style="width: 100%;margin-bottom:50px;">
            <el-table-column prop="a" label="安心码跳转率">
            </el-table-column>
            <el-table-column prop="b" label="安心码查询率">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <table cellpadding="0" cellspacing="0" class="table table-hover">
            <thead>
              <tr>
                <th>页面</th>
                <th>跳转率</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>关于泰森</th>
                <td>200</td>
              </tr>
              <tr>
                <th>泰森产品</th>
                <td>100</td>
              </tr>
              <tr>
                <th>流程图</th>
                <td>100</td>
              </tr>
            </tbody>
          </table>
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
      this.searchForm.create_sdeleteRowtart = val[0]
      this.searchForm.create_end = val[1]
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  margin-bottom: 50px;
}

.table > thead > tr > th,
.table > tbody > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td {
  padding: 12px 10px;
  min-width: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
  border-bottom: 1px solid #ebeef5;
  color: #909399;
  font-size: 14px;
}

th {
  color: #333 !important;
}

.table-hover > tbody > tr:hover {
  background-color: #f5f7fa;
}

td:nth-child(3),
th:nth-child(3) {
  border-right: 1px solid #ebeef5;
}
</style>