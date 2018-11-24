<template>
    <div class="app-container">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px" style="width:600px">
            <el-form-item label="农场编码：" prop="farmCode">
                <el-input name="farmCode" type="text" v-model="ruleForm.farmCode" placeholder="农场编码"></el-input>
            </el-form-item>

            <el-form-item label="农场名称：" prop="farmName">
                <el-input name="farmName" type="text" v-model="ruleForm.farmName" placeholder="农场名称"></el-input>
            </el-form-item>

            <el-form-item label="农场负责人：" prop="farmLeader">
                <el-input name="farmLeader" type="text" v-model="ruleForm.farmLeader" placeholder="农场负责人"></el-input>
            </el-form-item>

            <el-form-item label="负责人图片：" prop="file">
                <input type="file" ref="imgFile" id="imgFile" @change="changefileLeader">
            </el-form-item>

            <el-form-item label="农场地址：" prop="farmAddress">
                <el-input name="farmAddress" type="text" v-model="ruleForm.farmAddress" placeholder="农场地址"></el-input>
            </el-form-item>

            <el-form-item label="图片文件：" prop="file">
                <input type="file" ref="imgFile" id="imgFile" @change="changeHandle">
            </el-form-item>

            <el-form-item label="x轴坐标：" prop="xAxis">
                <el-input name="xAxis" type="text" v-model="ruleForm.xAxis" placeholder="x轴坐标"></el-input>
            </el-form-item>

            <el-form-item label="y轴坐标：" prop="yAxis">
                <el-input name="yAxis" type="text" v-model="ruleForm.yAxis" placeholder="y轴坐标"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { editFarm, infoFarm } from '@/api/farm'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      rules: {
        farmCode: [{
          required: true,
          message: '请输入农场编码',
          trigger: 'blur'
        }],
        farmName: [{
          required: true,
          message: '请输入农场名称',
          trigger: 'blur'
        }],
        farmLeader: [{
          required: true,
          message: '请输入农场负责人',
          trigger: 'blur'
        }],
        farmAddress: [{
          required: true,
          message: '请输入农场地址',
          trigger: 'blur'
        }]
      },
      ruleForm: {
        id: this.$route.params.id,
        farmCode: '',
        farmName: '',
        farmLeader: '',
        farmAddress: '',
        xAxis: '',
        yAxis: ''
      },
      file: '',
      leaderFile: ''
    }
  },
  created () {
    this.infoFarm()
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
    async add () {
      let fileForm = new FormData()
      fileForm.append('fileFarm', this.file)
      fileForm.append('fileLeader', this.leaderFile)
      fileForm.append('id', this.ruleForm.id)
      fileForm.append('farmCode', this.ruleForm.farmCode)
      fileForm.append('farmName', this.ruleForm.farmName)
      fileForm.append('farmLeader', this.ruleForm.farmLeader)
      fileForm.append('farmAddress', this.ruleForm.farmAddress)
      fileForm.append('xAxis', this.ruleForm.xAxis)
      fileForm.append('yAxis', this.ruleForm.yAxis)

      let res = await editFarm(fileForm)
      console.log(res)
      if (res.data.code === ERR_OK) {
        this.$router.push({
          path: '/axm/farm/list'
        })
        return false
      }
      Message(res.data.msg)
    },
    changeHandle (e) {
      this.file = e.target.files[0]
    },
    changefileLeader (e) {
      this.file = e.target.files[0]
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    async infoFarm () {
      let data = {
        id: parseInt(this.ruleForm.id)
      }
      let res = await infoFarm(data)
      if (res.data.code === ERR_OK) {
        let response = res.data
        this.ruleForm.farmCode = response.farmCode
        this.ruleForm.farmAddress = response.farmAddress
        this.ruleForm.farmLeader = response.farmLeader
        this.ruleForm.farmName = response.farmName
        this.ruleForm.xAxis = response.xAxis
        this.ruleForm.yAxis = response.yAxis
        return false
      }
      Message(res.data.msg)
    }
  }
}
</script>