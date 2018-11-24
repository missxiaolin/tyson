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
        </div>
    </div>
</template>


<script>
export default {
  data () {
    return {
      dateTime: [],
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
    }
  }
}
</script>

<style lang="scss" scoped>
    
</style>