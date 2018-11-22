<template>
	<div class="dashboard-editor-container">
    <div class="ibox-title">
        <h3>信息列表</h3>
    </div>

    <div :className="'sub-navbar'" id="top">
        <div>
          <el-button type="primary" @click="addAxm()">添加</el-button>
        </div>
        <div>
          <el-upload
            class="upload-demo"
            action="http://39.105.203.57:9999/manage/securityCode/uploadSecurityCodes"
            :on-error="addError"
            :on-success="addSuccess"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :show-file-list="false">
            <el-button type="primary">导入</el-button>
          </el-upload>
        </div>
    </div>
    <div class="routes-main-container" style="margin-top:20px">
      <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit
                      highlight-current-row>
          <el-table-column align="center" label='ID'>
              <template slot-scope="scope">
                  {{scope.row.id}}
              </template>
          </el-table-column>
          <el-table-column label="安心码" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.securityCode}}</span>
              </template>
          </el-table-column>
          <el-table-column label="创建时间">
              <template slot-scope="scope">
                  <span>{{scope.row.createTime}}</span>
              </template>
          </el-table-column>

          <el-table-column label="操作">
              <template slot-scope="scope">
                  <el-button size="mini" @click="editAxm(scope.row.id)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
      <el-row type="flex" justify="center" style="margin-top: 30px;">
          <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-size="pagesize"
          :total="total">
          </el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
import { axmList } from '@/api/axm'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      list: [],
      listLoading: true,
      page: 1,
      total: 0, // table数据总条数
      pagesize: 20
    }
  },
  created () {
    this.getAxm()
  },
  methods: {
    getAxm () {
      this.listLoading = true
      let data = {
        page: this.page,
        pageSize: this.pagesize
      }
      axmList(data).then(response => {
        let axmData = response.data
        if (axmData.code == ERR_OK) {
          this.list = axmData.list
          this.listLoading = false
          this.total = parseInt(axmData.total)
          document.body.scrollTop = 0
          // 兼容
          document.documentElement.scrollTop = 0
        } else {
          Message(axmData.msg)
        }
      })
    },
    addAxm () {

    },
    editAxm (id) {

    },
    del (id) {

    },
    handleCurrentChange (currentPage) {
      this.page = currentPage
      this.getAxm()
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
      if (response.code !== ERR_OK) {
        Message(response.msg)
        return false
      }
      this.page = 1
      this.getAxm()
    },
    addError (err, file, fileList) {
      Message('上传文件失败')
    }
  }
}
</script>

<style>
  #top div{
    float: left;
    margin-right: 50px;
    margin-bottom: 10px;
  }
</style>
