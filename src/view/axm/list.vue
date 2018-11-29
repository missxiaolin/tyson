<template>
	<div class="app-container">
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
            :headers="header"
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
                  <el-button size="mini" @click="editAxm(scope.row.id,scope.row.securityCode)">编辑</el-button>
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
import { getToken } from 'common/js/cache'
import { axmList, delAxm } from '@/api/axm'
import { ERR_OK } from '@/api/config'
import { Message, MessageBox } from 'element-ui'

export default {
  data () {
    return {
      header: {},
      list: [],
      listLoading: true,
      page: 1,
      total: 0, // table数据总条数
      pagesize: 20
    }
  },
  created () {
    this.header = {
      TOKEN: getToken()
    }
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
      this.$router.push({
        path: `/axm/add`
      })
    },
    editAxm (id, code) {
      this.$router.push({
        path: `/axm/edit/${id}/${code}`
      })
    },
    del (id) {
      this.$confirm('此操作将永久删除信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {
          id: id
        }
        delAxm(data).then(response => {
          let axmData = response.data
          if (axmData.code == ERR_OK) {
            this.getAxm()
          } else {
            Message(axmData.msg)
          }
        })
      })
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
      if (response.code === '0001') {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '提示', { // token过期情况
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({ path: '/login' })
        })
        return false
      }

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

<style scoped>
  #top div{
    float: left;
    margin-right: 50px;
    margin-bottom: 10px;
  }
</style>
