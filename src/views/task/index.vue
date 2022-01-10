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
          <span v-if="scope.row.task_status === 0"> {{ $t('task.noStart') }} </span>
          <span v-if="scope.row.task_status === 1"> {{ $t('task.executing') }} </span>
          <span v-if="scope.row.task_status === 2"> {{ $t('task.completed') }} </span>
          <span v-if="scope.row.task_status === -1"> {{ $t('task.executeError') }} </span>
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

            <!-- <el-button style="width: 120px" :disabled="editDisable" type="primary" size="small" icon="el-icon-edit">
                {{ $t('common.edit') }}
              </el-button> -->
            <el-link :disabled="!editDisable && ( (scope.row.task_status) == 1 || (scope.row.task_status) === 2 )" icon="el-icon-edit">
              <span v-if="!editDisable && ( (scope.row.task_status) == 1 || (scope.row.task_status) === 2 )">
                {{ $t('common.edit') }}
              </span>
              <router-link v-else :to="'/tasks/editTask/'+scope.row.id" disabled>
                {{ $t('common.edit') }}
              </router-link>
            </el-link>

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
              <el-link slot="reference" style="margin-left: 10px" :disabled="deleteDisable" icon="el-icon-delete">{{ $t('common.delete') }}</el-link>
              <!-- <el-button slot="reference" style="width: 120px" :disabled="deleteDisable" type="danger" size="small" icon="el-icon-delete">
                {{ $t('common.delete') }}
              </el-button> -->
            </el-popconfirm>
            <el-link v-if="scope.row.task_status === 0" :disabled="executeDisable" icon="el-icon-video-play" @click="execute(scope.row.id)">
              {{ $t('task.execute') }}
            </el-link>
            <el-link v-if="scope.row.task_status === -1" :disabled="executeDisable" icon="el-icon-video-play" @click="execute(scope.row.id)">
              {{ $t('task.reExecute') }}
            </el-link>
            <el-link v-if="scope.row.task_status === 1" disabled icon="el-icon-loading">
              {{ $t('task.executing') }}
            </el-link>
            <el-link v-if="scope.row.task_status === 2" :disabled="executeDisable" icon="el-icon-view" @click="catEvaluate(scope.row.id)">
              {{ $t('task.catEvaluate') }}
            </el-link>
            <el-link v-if="scope.row.task_status !== 0" :disabled="executeDisable" icon="el-icon-document" @click="catLog(scope.row.id)">
              {{ $t('task.catLog') }}
            </el-link>
            <!-- <el-button style="width: 120px" :disabled="executeDisable" type="primary" size="small" icon="el-icon-video-play" @click="execute(scope.row.id)">
              {{ $t('task.execute') }}
            </el-button> -->
            <!-- <el-button v-if="scope.row.task_status === 1" style="width: 120px" disabled type="primary" size="small" icon="el-icon-loading">
              {{ $t('task.executing') }}
            </el-button> -->
            <!-- <el-button v-if="scope.row.task_status === 2" style="width: 120px" type="success" size="small" icon="el-icon-circle-check">
              {{ $t('task.completed') }}
            </el-button> -->
            <!-- <el-button v-if="scope.row.task_status !== 0" style="width: 120px" type="success" size="small" icon="el-icon-circle-check">
              {{ $t('task.completed') }}
            </el-button> -->
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

    <!-- 日志查看弹出框 -->
    <el-dialog
      title="运行日志"
      :visible.sync="logDialogVisible"
      width="80%"
      class="dialog-div"
    >
      <div style="white-space: pre-line; margin: 20px" v-html="logData" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="logDialogVisible = false">{{ $t('common.cancel') }}</el-button>
        <a style="margin-left: 10px" :href="BASE_API + '/business/task/' + task.id + '/download_log/'">
          <el-button type="primary" icon="el-icon-download">
            {{ $t('task.downloadLog') }}
          </el-button></a>
      </span>
    </el-dialog>

    <!-- 评价指标弹出框 -->
    <el-dialog
      title="评价指标查看"
      :visible.sync="evaluateDialogVisible"
      width="80%"
      class="dialog-div"
    >
      <div style="height: 100%">
        <!-- 交通状态预测、到达时间估计表格 -->
        <el-table
          v-if="task.task === 'eta' || task.task === 'traffic_state_pred'"
          :data="evaluateData"
          style="width: 100%"
          height="100%"
          border
          fit
        >
          <el-table-column
            type="index"
            :index="stateIndexMethod"
            :label="$t('common.order')"
            fixed
            width="100px"
          />
          <el-table-column
            prop="MAE"
            label="MAE"
          />
          <el-table-column
            prop="MAPE"
            label="MAPE"
          />
          <el-table-column
            prop="MSE"
            label="MSE"
          />
          <el-table-column
            prop="RMSE"
            label="RMSE"
          />
          <el-table-column
            v-if="masked_MAE !== null"
            prop="masked_MAE"
            label="masked_MAE"
          />
          <el-table-column
            prop="masked_MAPE"
            label="masked_MAPE"
          />
          <el-table-column
            prop="masked_MSE"
            label="masked_MSE"
          />
          <el-table-column
            prop="masked_RMSE"
            label="masked_RMSE"
          />
          <el-table-column
            prop="R2"
            label="R2"
          />
          <el-table-column
            prop="EVAR"
            label="EVAR"
          />
          <el-table-column
            v-if="Precision !== null"
            prop="Precision"
            label="Precision"
          />
          <el-table-column
            prop="Recall"
            label="Recall"
          />
          <el-table-column
            prop="F1-Score"
            label="F1-Score"
          />
          <el-table-column
            prop="MAP"
            label="MAP"
          />
          <el-table-column
            prop="PCC"
            label="PCC"
          />
        </el-table>

        <!-- 路网匹配表格 -->
        <el-table
          v-if="task.task === 'map_matching'"
          :data="evaluateData"
          style="width: 100%"
          height="100%"
          border
          fit
        >
          <el-table-column
            type="index"
            :index="stateIndexMethod"
            :label="$t('common.order')"
            fixed
            width="100px"
          />
          <el-table-column
            prop="RMF"
            label="RMF"
          />
          <el-table-column
            prop="AN"
            label="AN"
          />
          <el-table-column
            prop="AL"
            label="AL"
          />
        </el-table>

        <!-- 轨迹下一跳表格 -->
        <el-table
          v-if="task.task === 'traj_loc_pred'"
          :data="evaluateData"
          style="width: 100%"
          height="100%"
          border
          fit
        >
          <el-table-column
            type="index"
            :index="stateIndexMethod"
            :label="$t('common.order')"
            fixed
            width="100px"
          />
          <el-table-column
            prop="Recall"
            label="Recall"
          />
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="evaluateDialogVisible = false">{{ $t('common.cancel') }}</el-button>
        <a style="margin-left: 10px" :href="BASE_API + '/business/evaluate/download/?task=' + task.id">
          <el-button type="primary" icon="el-icon-download">
            {{ $t('task.downEvaluate') }}
          </el-button></a>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { checkPermission } from '@/utils/permission'
import { getTaskList, getTaskById, executeTaskById,
  deleteTaskById, getExecuteLogById, getStateEvaluateList,
  getMapMatchingEvaluateList, getTrajEvaluateList } from '@/api/task'

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
      BASE_API: process.env.VUE_APP_BASE_API,
      tableData: [],
      task: {},
      listLoading: true,
      queryParam: {
        page: 1,
        size: 10,
        task_name: ''
      },
      evaluateQueryParam: {
        page: 1,
        size: 20
      },
      total: 0,
      defaultPage: 1,
      defaultSize: 10,
      executeTaskDialogVisible: false,
      executeForm: { executeTime: '' },
      executeId: 0,
      logDialogVisible: false, // 日志查看弹出框
      logData: '', // 日志数据
      evaluateDialogVisible: false,
      // 按钮权限
      executeDisable: true,
      editDisable: true,
      deleteDisable: true,
      evaluateData: [],
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
    // 回显任务数据
    getById(id) {
      getTaskById(id).then(res => {
        this.task = res.data
      })
    },
    // 查看日志
    catLog(id) {
      this.task.id = id
      this.logDialogVisible = true
      // 每次查看日志，刷新所有任务状态
      this.getList()
      getExecuteLogById(id).then(res => {
        this.logData = res.data
      })
    },
    // 查看评价指标
    catEvaluate(id) {
      // 获取当前任务相关数据
      getTaskById(id).then(res => {
        this.task = res.data
        if (this.task.task === 'traffic_state_pred' || this.task.task === 'eta') {
        // 走交通状态预测和到达时间估计接口
          this.evaluateQueryParam.task = this.task.id
          getStateEvaluateList(this.evaluateQueryParam).then(res => {
            this.evaluateData = res.data.results
          })
        } else if (this.task.task === 'map_matching') {
          // 走路网匹配接口
          this.evaluateQueryParam.task = this.task.id
          getMapMatchingEvaluateList(this.evaluateQueryParam).then(res => {
            this.evaluateData = res.data.results
          })
        } else if (this.task.task === 'traj_loc_pred') {
          // 走轨迹下一跳预测接口
          getTrajEvaluateList(this.evaluateQueryParam).then(res => {
            this.evaluateData = res.data.results
          })
        } else {
          // 路网表征学习，无评价指标
          this.evaluateData = []
        }
        this.evaluateDialogVisible = true
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
    },
    // 交通状态预测，序号生成
    stateIndexMethod(index) {
      return (this.evaluateQueryParam.page - 1) * this.evaluateQueryParam.size + index + 1
    }
  }
}
</script>
<style>
.el-picker-panel__footer .el-button--text.el-picker-panel__link-btn {
  display: none;
}
/* dialog进度条 */
/* 使顶部进行吸顶 */
.dialog-div .top {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
 }

/* 表单大小设置 */
.dialog-div .el-dialog {
  margin: 0 auto !important;
  height: 80%;
  overflow: hidden;
}

.dialog-div .el-dialog__body {
  position: absolute;
  left: 0;
  top: 54px;
  bottom: 70px;
  right: 0;
  padding: 0;
  z-index: 1;
  overflow: hidden;
  overflow-y: auto;
}
/**表单 确定和取消 按钮的位置 */
.dialog-div .el-dialog__footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

/* 弹出框滚动条 */
/* 设置滚动条的样式 */
/**解决了滚动条之间发生错位的现象 */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  /* 滚动条的颜色 */
  background-color: #e4e4e4;
 }

</style>
