<template>
	<div class="app-container">
    <div style="margin-bottom: 20px">
      <el-date-picker
      v-model="formData.date"
      @change="dateChangebirthday"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </div>
    <div>
      <el-upload
        class="upload-demo"
        ref="upload"
        :action="imgUrl"
        :data="formData"
        :headers="header"
        :on-success="addSuccess"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10M</div>
      </el-upload>
    </div>
    <div id="brm-images">
      <div class="img" v-if="item != ''" v-for="(item,index) in images" :key="index">
        <i @click="delImg(item)" class="el-icon-delete"></i>
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { queryInspectionsByDate, deleteInspection } from '@/api/walmart'
import { ERR_OK } from '@/api/config'
import { Message, MessageBox } from 'element-ui'
import { getToken } from 'common/js/cache'

export default {
  data () {
    return {
      fileList: [],
      header: {},
      formData: {
        date: ''
      },
      images: [],
      imgUrl: ''
    }
  },
  created () {
    this.imgUrl = `${process.env.BASE_API}/manage/securityCode/uploadInspection`
    this.header = {
      TOKEN: getToken()
    }
    this.getInspectionsByDate()
  },
  methods: {
    delImg (item) {
      this.$confirm('此操作将永久删除图片信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {
          path: item
        }
        deleteInspection(data).then(response => {
          let axmData = response.data
          if (axmData.code === ERR_OK) {
            this.getInspectionsByDate()
          } else {
            Message(axmData.msg)
          }
        })
      })
    },
    async getInspectionsByDate () {
      let res = await queryInspectionsByDate(this.formData)
      if (res.data.code === ERR_OK) {
        let response = res.data
        this.images = response.images
        console.log(this.images)
        return false
      }
      Message(res.data.msg)
    },
    // 时间格式
    dateChangebirthday (val) {
      this.getInspectionsByDate()
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    addSuccess (response, file, fileList) {
      if (response.code == '0000') {
        Message('上传成功')
        this.getInspectionsByDate()
        return false
      }
      if (response.code == '0001') {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '提示', { // token过期情况
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({ path: '/login' })
        })
        return false
      }
      Message(response.msg)
    }
  }
}
</script>

<style lang="scss">
  #brm-images {
    margin-top: 20px;
    .img{
      float: left;
      min-width: 200px;
      min-height: 150px;
      margin-right: 20px;
      border: solid 1px #cccccc;
      position: relative;
      img{
        width: 200px;
        min-height: 150px;
      }
      .el-icon-delete{
        position: absolute;
        right: -10px;
        top: -10px;
      }
    }
  }
  
</style>