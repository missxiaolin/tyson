<template>
	<div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item label="旧密码：" prop="passWord">
        <el-input name="passWord" type="text" v-model="ruleForm.passWord" placeholder="旧密码"></el-input>
      </el-form-item>

      <el-form-item label="新密码：" prop="newPassWord">
        <el-input name="newPassWord" type="password" v-model="ruleForm.newPassWord" placeholder="新密码"></el-input>
      </el-form-item>

      <el-form-item label="确定密码：" prop="confirmPassWord">
        <el-input name="confirmPassWord" type="password" v-model="ruleForm.confirmPassWord" placeholder="新密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { editPwd } from 'api/auth'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  name: 'introduction',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.newPassWord) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        passWord: [{
          required: true,
          message: '请输入旧密码',
          trigger: 'blur'
        }],
        newPassWord: [{
          required: true,
          message: '请输入新密码',
          trigger: 'blur'
        }],
        confirmPassWord: [{
          required: true,
          message: '请确认输入新密码',
          trigger: 'blur'
        }, {
          validator: validatePass,
          trigger: 'blur'
        }]
      },
      ruleForm: {
        passWord: '',
        newPassWord: '',
        confirmPassWord: ''
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
          this.editUserPwd()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 修改密码
    async editUserPwd () {
      let res = await editPwd(this.ruleForm)
      if (res.data.code === ERR_OK) {
        this.$router.push({ path: 'login' })
        return false
      }
      Message(res.data.msg)
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
</script>
