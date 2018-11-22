<template>
	<div class="app-container">
    <div class="ibox-title">
        <h3>信息列表</h3>
    </div>

    <div :className="'sub-navbar'">
        <div>
          <el-button type="primary" @click="addFarm()">添加</el-button>
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

          <el-table-column label="鸡场编码" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.farmCode}}</span>
              </template>
          </el-table-column>

          <el-table-column label="鸡场名称" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.farmName}}</span>
              </template>
          </el-table-column>

          <el-table-column label="农场负责人" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.farmLeader}}</span>
              </template>
          </el-table-column>

          <el-table-column label="地址" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.farmAddress}}</span>
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
import { farmList, delFarm } from '@/api/farm'
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
    this.getFarm()
  },
  methods: {
    getFarm () {
      this.listLoading = true
      let data = {
        page: this.page,
        pageSize: this.pagesize
      }
      farmList(data).then(response => {
        let farmData = response.data
        if (farmData.code == ERR_OK) {
          console.log(farmData)
          this.list = farmData.list
          this.listLoading = false
          this.total = parseInt(farmData.total)
          document.body.scrollTop = 0
          // 兼容
          document.documentElement.scrollTop = 0
        } else {
          Message(farmData.msg)
        }
      })
    },

    addFarm () {
      this.$router.push({
        path: `/axm/farm/add`
      })
    },
    editAxm (id, code) {
      this.$router.push({
        path: `/axm/edit/${id}/${code}`
      })
    },
    del (id) {
      let data = {
        id: id
      }
      delFarm(data).then(response => {
        let axmData = response.data
        if (axmData.code == ERR_OK) {
          this.getFarm()
        } else {
          Message(axmData.msg)
        }
      })
    },
    handleCurrentChange (currentPage) {
      this.page = currentPage
      this.getFarm()
    }
  }
}
</script>