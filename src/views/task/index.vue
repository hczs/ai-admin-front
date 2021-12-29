<template>
  <div class="app-container">
    <!-- 顶部查询表单 -->
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item :label="$t('task.taskName')">
        <el-input v-model="queryParam.task_name" />
      </el-form-item>

      <el-form-item :label="$t('common.createTime')">
        <el-date-picker
          v-model="queryParam.begin"
          type="datetime"
          :placeholder="$t('common.pleaseSelectBegin')"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-form-item>
        <el-date-picker
          v-model="queryParam.end"
          type="datetime"
          :placeholder="$t('common.pleaseSelectEnd')"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="getQueryList()">{{ $t('common.search') }}</el-button>
      <el-button type="default" icon="el-icon-delete" @click="resetData()">{{ $t('common.clear') }}</el-button>
    </el-form>
    <!-- 数据表格 -->
    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      fit
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item :label="$t('task.taskName')">
              <span>{{ props.row.task_name }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.taskDescription')">
              <span>{{ props.row.task_description }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.dataFile')">
              <span>{{ props.row.data_file }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.status')">
              <span v-if="props.row.task_status === 0"> 未开始 </span>
              <span v-if="props.row.task_status === 1"> 进行中 </span>
              <span v-if="props.row.task_status === 2"> 已完成 </span>
            </el-form-item>
            <el-form-item label="task">
              <span>{{ props.row.task }}</span>
            </el-form-item>
            <el-form-item label="model">
              <span>{{ props.row.model }}</span>
            </el-form-item>
            <el-form-item label="dataset">
              <span>{{ props.row.dataset }}</span>
            </el-form-item>
            <el-form-item label="config_file">
              <span>{{ props.row.config_file }}</span>
            </el-form-item>
            <el-form-item label="saved_model">
              <span>{{ props.row.saved_model }}</span>
            </el-form-item>
            <el-form-item label="train">
              <span>{{ props.row.train }}</span>
            </el-form-item>
            <el-form-item label="batch_size">
              <span>{{ props.row.batch_size }}</span>
            </el-form-item>
            <el-form-item label="train_rate">
              <span>{{ props.row.train_rate }}</span>
            </el-form-item>
            <el-form-item label="eval_rate">
              <span>{{ props.row.eval_rate }}</span>
            </el-form-item>
            <el-form-item label="learning_rate">
              <span>{{ props.row.learning_rate }}</span>
            </el-form-item>
            <el-form-item label="max_epoch">
              <span>{{ props.row.max_epoch }}</span>
            </el-form-item>
            <el-form-item label="gpu">
              <span>{{ props.row.gpu }}</span>
            </el-form-item>
            <el-form-item label="gpu_id">
              <span>{{ props.row.gpu_id }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        :index="indexMethod"
        :label="$t('common.order')"
        width="120"
      />
      <el-table-column
        prop="task_name"
        :label="$t('task.taskName')"
      />
      <el-table-column
        prop="data_file"
        :label="$t('task.dataFile')"
      />
      <el-table-column
        prop="task_status"
        :label="$t('task.status')"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.task_status === 0"> 未开始 </span>
          <span v-if="scope.row.task_status === 1"> 进行中 </span>
          <span v-if="scope.row.task_status === 2"> 已完成 </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="creator"
        :label="$t('task.creator')"
      />
      <el-table-column
        prop="create_time"
        :label="$t('common.createTime')"
      />
      <el-table-column
        prop="update_time"
        :label="$t('common.updateTime')"
      />
      <el-table-column
        :label="$t('common.operation')"
      >
        <template slot-scope="scope">
          <el-button-group style="width: 120px">
            <router-link :to="'/tasks/editTask/'+scope.row.id">
              <el-button style="width: 120px" :disabled="editDisable" type="primary" size="small" icon="el-icon-edit">
                {{ $t('common.edit') }}
              </el-button>
            </router-link>
            <el-popconfirm
              :confirm-button-text="$t('common.confirm')"
              :cancel-button-text="$t('common.cancel')"
              confirm-button-type="danger"
              cancel-button-type="info"
              icon="el-icon-info"
              icon-color="red"
              :title="$t('common.deleteConfirm')"
              @onConfirm="deleteTask(scope.row.id)"
            >
              <el-button slot="reference" style="width: 120px" :disabled="deleteDisable" type="danger" size="small" icon="el-icon-delete">
                {{ $t('common.delete') }}
              </el-button>
            </el-popconfirm>
            <el-button v-if="scope.row.task_status === 0" style="width: 120px" :disabled="executeDisable" type="primary" size="small" icon="el-icon-video-play" @click="execute(scope.row.id)">
              {{ $t('task.execute') }}
            </el-button>
            <el-button v-if="scope.row.task_status === 1" style="width: 120px" disabled="true" type="primary" size="small" icon="el-icon-loading" @click="execute(scope.row.id)">
              {{ $t('task.executing') }}
            </el-button>
            <el-button v-if="scope.row.task_status === 2" style="width: 120px" type="success" size="small" icon="el-icon-circle-check">
              {{ $t('task.completed') }}
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <div>
      <el-pagination
        :hide-on-single-page="false"
        :current-page="queryParam.page"
        :page-sizes="[10, 20, 50, 100, 200]"
        :page-size="queryParam.size"
        style="padding: 30px 0; text-align: center;"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import { checkPermission } from '@/utils/permission'
import { getTaskList, executeTaskById, deleteTaskById } from '@/api/task'

export default {

  data() {
    return {
      tableData: [],
      listLoading: true,
      queryParam: {
        page: 1,
        size: 10,
        task_name: ''
      },
      total: 0,
      defaultPage: 1,
      defaultSize: 10,
      // 按钮权限
      executeDisable: true,
      editDisable: true,
      deleteDisable: true
    }
  },
  created() {
    this.checkButtonPermission()
    this.getList()
  },
  methods: {
    checkPermission,
    checkButtonPermission() {
      this.executeDisable = !checkPermission(['taskExecute'])
      this.editDisable = !checkPermission(['taskEdit'])
      this.deleteDisable = !checkPermission(['taskDelete'])
    },
    // 获取任务列表
    getList() {
      this.listLoading = true
      getTaskList(this.queryParam).then(res => {
        this.tableData = res.data.results
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    getQueryList() {
      this.queryParam.page = this.defaultPage
      this.queryParam.size = this.defaultSize
      this.getList()
    },
    deleteTask(id) {
      deleteTaskById(id).then(res => {
        this.getList()
      })
    },
    // 执行任务
    execute(id) {
      executeTaskById(id).then(res => {
        console.log(res)
        this.getList()
      })
    },
    // 清空查询条件，重新获取数据
    resetData() {
      this.queryParam = {}
      this.queryParam.page = this.defaultPage
      this.queryParam.size = this.defaultSize
      this.getList(this.queryParam)
    },
    handleSizeChange(size) {
      this.queryParam.size = size
      this.defaultSize = size
      this.getList(this.queryParam)
    },
    handleCurrentChange(page) {
      this.queryParam.page = page
      this.getList(this.queryParam)
    },
    indexMethod(index) {
      return (this.queryParam.page - 1) * this.queryParam.size + index + 1
    }
  }
}
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 100px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
