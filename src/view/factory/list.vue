<template>
	<div class="app-container">
    <div class="ibox-title">
        <h3>工厂列表</h3>
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

          <el-table-column label="工厂编码" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.factoryCode}}</span>
              </template>
          </el-table-column>

          <el-table-column label="工厂名称" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.factoryName}}</span>
              </template>
          </el-table-column>

          <el-table-column label="工厂厂长" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.factoryOwner}}</span>
              </template>
          </el-table-column>

          <el-table-column label="工厂地址" align="center">
              <template slot-scope="scope">
                  <span>{{scope.row.factoryAddress}}</span>
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
import { factoryList, deleteFactory } from '@/api/factory'
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
    this.getFactory()
  },
  methods: {
    getFactory () {
      this.listLoading = true
      let data = {
        page: this.page,
        pageSize: this.pagesize
      }
      factoryList(data).then(response => {
        let farmData = response.data
        if (farmData.code === ERR_OK) {
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
        path: `/axm/factory/add`
      })
    },
    editAxm (id, code) {
      this.$router.push({
        path: `/axm/factory/edit/${id}`
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
        deleteFactory(data).then(response => {
          let axmData = response.data
          if (axmData.code === ERR_OK) {
            this.getFactory()
          } else {
            Message(axmData.msg)
          }
        })
      })
    },
    handleCurrentChange (currentPage) {
      this.page = currentPage
      this.getFactory()
    }
  }
}
</script>
