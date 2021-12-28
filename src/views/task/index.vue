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
          <el-form label-position="left" label-width="auto">
            <el-form-item :label="$t('task.taskName')">
              <span>{{ props.row.task_name }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.taskDescription')">
              <span>{{ props.row.task_description }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.status')">
              <span v-if="props.row.task_status === 0"> 未开始 </span>
              <span v-if="props.row.task_status === 1"> 进行中 </span>
              <span v-if="props.row.task_status === 2"> 已完成 </span>
            </el-form-item>
            <el-form-item :label="$t('task.task')">
              <span v-if="props.row.task === 'traffic_state_pred'"> {{ $t('task.traffic_state_pred') }} </span>
              <span v-if="props.row.task === 'traj_loc_pred'"> {{ $t('task.traj_loc_pred') }} </span>
              <span v-if="props.row.task === 'road_representation'"> {{ $t('task.road_representation') }} </span>
              <span v-if="props.row.task === 'eta'"> {{ $t('task.eta') }} </span>
              <span v-if="props.row.task === 'map_matching'"> {{ $t('task.map_matching') }} </span>
            </el-form-item>
            <el-form-item :label="$t('task.model')">
              <span>{{ props.row.model }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.dataset')">
              <span>{{ props.row.dataset }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.config_file')">
              <span>{{ props.row.config_file }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.saved_model')">
              <span>{{ props.row.saved_model }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.train')">
              <span>{{ props.row.train }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.batch_size')">
              <span>{{ props.row.batch_size }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.train_rate')">
              <span>{{ props.row.train_rate }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.eval_rate')">
              <span>{{ props.row.eval_rate }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.learning_rate')">
              <span>{{ props.row.learning_rate }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.max_epoch')">
              <span>{{ props.row.max_epoch }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.gpu')">
              <span>{{ props.row.gpu }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.gpu_id')">
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
        width="100"
      />
      <el-table-column
        prop="dataset"
        :label="$t('task.dataFile')"
      />
      <el-table-column
        prop="task_status"
        :label="$t('task.status')"
        width="100"
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
        width="100"
      />
      <el-table-column
        prop="execute_time"
        :label="$t('task.executeTime')"
      />
      <el-table-column
        prop="execute_end_time"
        :label="$t('task.executeEndTime')"
      />
      <el-table-column
        prop="create_time"
        :label="$t('common.createTime')"
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
            <el-button v-if="scope.row.task_status === 1" style="width: 120px" disabled type="primary" size="small" icon="el-icon-loading">
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

    <!-- 任务执行弹出框 -->
    <el-dialog :title="$t('task.selectExecuteTime')" :visible.sync="executeTaskDialogVisible">
      <el-form ref="executeForm" :model="executeForm" :rules="executeRules">
        <el-form-item :label="$t('task.executeTime')" label-width="auto" prop="executeTime">
          <el-date-picker
            v-model="executeForm.executeTime"
            class="date-picker"
            type="datetime"
            :placeholder="$t('task.selectExecuteTime')"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="executeTaskDialogVisible = false">{{ $t('common.cancel') }}</el-button>
        <el-button @click="executeNow">{{ $t('task.executeNow') }}</el-button>
        <el-button type="primary" @click="executeAtTime">{{ $t('task.executeAt') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { checkPermission } from '@/utils/permission'
import { getTaskList, executeTaskById, deleteTaskById } from '@/api/task'

export default {
  data() {
    const validateExecuteTime = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('task.executeTimeError')))
      } else {
        if (new Date(value) < new Date()) {
          callback(new Error(this.$t('task.executeTimeEarlyError')))
        } else {
          callback()
        }
      }
    }
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
      executeTaskDialogVisible: false,
      executeForm: { executeTime: '' },
      executeId: 0,
      // 按钮权限
      executeDisable: true,
      editDisable: true,
      deleteDisable: true,
      executeRules: {
        executeTime: [{ type: 'date', required: true, trigger: 'blur', validator: validateExecuteTime }]
      }
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
        this.total = res.data.count
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
      this.executeTaskDialogVisible = true
      this.executeId = id
    },
    executeNow() {
      executeTaskById(this.executeId).then(res => {
        this.getList()
      })
      this.executeTaskDialogVisible = false
    },
    executeAtTime() {
      executeTaskById(this.executeId, this.executeForm.executeTime).then(res => {
        this.getList()
      })
      this.executeTaskDialogVisible = false
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
.el-picker-panel__footer .el-button--text.el-picker-panel__link-btn {
  display: none;
}
</style>
