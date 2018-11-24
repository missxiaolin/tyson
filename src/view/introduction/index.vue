<template>
	<div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item label="旧密码：" prop="oldPassword">
        <el-input name="oldPassword" type="text" v-model="ruleForm.oldPassword" placeholder="旧密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newPassword">
        <el-input name="newPassword" type="text" v-model="ruleForm.newPassword" placeholder="新密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'introduction',
  data () {
    return {
      rules: {
        oldPassword: [{
          required: true,
          message: '请输入旧密码',
          trigger: 'blur'
        }],
        newPassword: [{
          required: true,
          message: '请输入新密码',
          trigger: 'blur'
        }]
      },
      ruleForm: {
        oldPassword: '',
        newPassword: ''
      }
    }
  },
  computed: {
  },
  methods: {
    // 修改
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
</script>
