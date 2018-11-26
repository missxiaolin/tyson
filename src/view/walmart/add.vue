<template>
	<div class="app-container">
    <div style="width:200px;">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://39.105.203.57:9999/manage/securityCode/uploadInspection"
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
  </div>
</template>

<script>
import { Message, MessageBox } from 'element-ui'
import { getToken } from 'common/js/cache'

export default {
  data () {
    return {
      fileList: [],
      header: {}
    }
  },
  created () {
    this.header = {
      TOKEN: getToken()
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(11111)
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(2222)
      console.log(file)
    },
    addSuccess (response, file, fileList) {
      if (response.code !== '0000') {
        Message('上传成功')
        return false
      }
      if (response.code !== '0001') {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '提示', { // token过期情况
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$routes.push({path: '/login'})
        })
        return false
      }
      Message(response.msg)
    }
  }
}
</script>