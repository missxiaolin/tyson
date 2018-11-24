<template>
	<div class="app-container">
    <div style="width:200px;">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://39.105.203.57:9999/manage/securityCode/uploadInspection"
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
import { Message } from 'element-ui'

export default {
  data () {
    return {
      fileList: []
    }
  },
  created () {
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
    addSuccess () {
      Message('上传成功')
    }
  }
}
</script>