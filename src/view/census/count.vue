<template>
    <div class="app-container">
        <div class="ibox-title">
            <h3>统计信息汇总</h3>
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