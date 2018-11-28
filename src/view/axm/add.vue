<template>
    <div class="app-container">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
            <el-form-item label="安心码：" prop="securityCode">
                <el-input name="securityCode" type="text" v-model="ruleForm.securityCode" placeholder="安心码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addAxm } from '@/api/axm'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      rules: {
        securityCode: [{
          required: true,
          message: '请输入安心码名称',
          trigger: 'blur'
        }]
      },
      ruleForm: {
        securityCode: ''
      }

    }
  },
  methods: {
      // 添加
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.add()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async add () {
      let res = await addAxm(this.ruleForm)
      console.log(res)
      if (res.data.code === ERR_OK) {
        this.$alert('保存成功', {
          confirmButtonText: '确定',
          callback: action => {
            if (action === 'confirm') {
              this.$router.push({
                path: '/axm/list'
              })
            }
          }
        })
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