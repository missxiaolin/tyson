<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item label="工厂编码：" prop="factoryCode">
        <el-input name="factoryCode" type="text" v-model="ruleForm.factoryCode" placeholder="工厂编码"></el-input>
      </el-form-item>
      <el-form-item label="工厂名称：" prop="factoryName">
        <el-input name="factoryName" type="text" v-model="ruleForm.factoryName" placeholder="工厂名称"></el-input>
      </el-form-item>
      <el-form-item label="工厂厂长：" prop="factoryOwner">
        <el-input name="factoryOwner" type="text" v-model="ruleForm.factoryOwner" placeholder="工厂厂长"></el-input>
      </el-form-item>
      <el-form-item label="工厂地址：" prop="factoryAddress">
        <el-input name="factoryAddress" type="text" v-model="ruleForm.factoryAddress" placeholder="工厂地址"></el-input>
      </el-form-item>
      <el-form-item label="感官指标：" prop="sensoryIndex">
        <el-input name="sensoryIndex" type="text" v-model="ruleForm.sensoryIndex" placeholder="感官指标"></el-input>
      </el-form-item>
      <el-form-item label="管理体系认证：" prop="manageSysAuth">
        <el-input name="manageSysAuth" type="text" v-model="ruleForm.manageSysAuth" placeholder="管理体系认证"></el-input>
      </el-form-item>
      <el-form-item label="图片文件：" prop="file">
        <input type="file" ref="imgFile" id="imgFile" @change="changeHandle">
      </el-form-item>
      <el-form-item label="坐标：">
        <el-col :span="6">
          <el-form-item label="X轴：">
            <el-input name="xAxis" type="number" v-model="ruleForm.xAxis" placeholder="X轴"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="Y轴：">
            <el-input name="yAxis" type="number" v-model="ruleForm.yAxis" placeholder="Y轴"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addFactory } from '@/api/factory'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      rules: {
        factoryCode: [{
          required: true,
          message: '请输入工厂编码',
          trigger: 'blur'
        }],
        factoryName: [{
          required: true,
          message: '请输入工厂名称',
          trigger: 'blur'
        }],
        factoryOwner: [{
          required: true,
          message: '请输入工厂厂长',
          trigger: 'blur'
        }],
        factoryAddress: [{
          required: true,
          message: '请输入工厂地址',
          trigger: 'blur'
        }],
        sensoryIndex: [{
          required: true,
          message: '请输入感官指标',
          trigger: 'blur'
        }],
        manageSysAuth: [{
          required: true,
          message: '请输入管理体系认证',
          trigger: 'blur'
        }]
      },
      ruleForm: {
        factoryCode: '',
        factoryName: '',
        factoryOwner: '',
        factoryAddress: '',
        sensoryIndex: '',
        manageSysAuth: '',
        xAxis: '',
        yAxis: '',
        image: ''
      },
      file: ''
    }
  },
  created () {
  },
  methods: {
    // 修改
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
    async  queryFactory () {
      let res = await queryFactory(this.ruleForm)
      if (res.data.code === ERR_OK) {
        this.ruleForm = res.data
      }
    },
    async add () {
      let fileForm = new FormData()
      fileForm.append('factoryCode', this.ruleForm.factoryCode)
      fileForm.append('factoryName', this.ruleForm.factoryName)
      fileForm.append('factoryOwner', this.ruleForm.factoryOwner)
      fileForm.append('factoryAddress', this.ruleForm.factoryAddress)
      fileForm.append('sensoryIndex', this.ruleForm.sensoryIndex)
      fileForm.append('manageSysAuth', this.ruleForm.manageSysAuth)
      fileForm.append('xAxis', this.ruleForm.xAxis)
      fileForm.append('yAxis', this.ruleForm.yAxis)
      fileForm.append('file', this.file)

      let res = await addFactory(fileForm)
      console.log(res)
      if (res.data.code === ERR_OK) {
        this.$alert('保存成功', {
          confirmButtonText: '确定',
          callback: action => {
            if (action === 'confirm') {
              this.$router.push({
                path: '/axm/factory/list'
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
    },
    changeHandle (e) {
      this.file = e.target.files[0]
    }
  }
}
</script>