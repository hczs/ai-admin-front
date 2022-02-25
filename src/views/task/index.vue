<template>
  <div class="app-container" :data-intro="$t('taskIndexIntroL.step01')" data-step="1">
    <!-- 顶部查询表单 -->
    <el-form :inline="true" class="demo-form-inline" :data-intro="$t('taskIndexIntroL.step02')" data-step="2">

      <el-form-item :label="$t('task.taskName')">
        <el-input v-model="queryParam.task_name" />
      </el-form-item>

      <el-form-item :label="$t('task.task_type')">
        <el-select v-model="queryParam.task" style="float: left" clearable>
          <el-option
            v-for="item in taskParamList"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item :label="$t('task.status')">
        <el-select v-model="queryParam.task_status" style="float: left" clearable>
          <el-option
            v-for="item in taskStatusList"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <!-- <el-form-item :label="$t('common.createTime')">
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
      </el-form-item> -->
      <el-button type="primary" icon="el-icon-search" @click="getQueryList()">{{ $t('common.search') }}</el-button>
      <el-button type="default" icon="el-icon-delete" @click="resetData()">{{ $t('common.clear') }}</el-button>
    </el-form>
    <el-button :data-intro="$t('taskIndexIntroL.step03')" data-step="3" type="primary" style="float: right" @click="contrast()">
      {{ $t('task.modelEvaluateContrast') }}
    </el-button>
    <!-- 数据表格 -->
    <el-table
      ref="taskTable"
      v-loading="listLoading"
      fit
      :data="tableData"
      border
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" label-width="auto">
            <el-form-item :label="$t('task.taskName')">
              <span>{{ props.row.task_name }}</span>
            </el-form-item>
            <el-form-item v-if="props.row.task_description !== null" :label="$t('task.taskDescription')">
              <span>{{ props.row.task_description }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.status')">
              <span v-if="props.row.task_status === 0"> {{ $t('task.noStart') }} </span>
              <span v-if="props.row.task_status === 1"> {{ $t('task.executing') }} </span>
              <span v-if="props.row.task_status === 2"> {{ $t('task.completed') }} </span>
              <span v-if="props.row.task_status === -1"> {{ $t('task.executeError') }} </span>
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
            <el-form-item v-if="props.row.config_file !== null" :label="$t('task.config_file1')">
              <!-- <span>{{ props.row.config_file }}</span> -->
              <el-link type="primary" :underline="false" :href="BASE_API + '/business/task/' + props.row.id + '/download_task_config/'">
                {{ $t('task.clickDownload') }}
              </el-link>
              <el-link style="margin-left: 10px" type="primary" :underline="false" @click="catConfig(props.row.id)">
                {{ $t('task.clickCatConfig') }}
              </el-link>
            </el-form-item>
            <!-- <el-form-item :label="$t('task.saved_model')">
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
            </el-form-item> -->
            <el-form-item :label="$t('task.max_epoch')">
              <span>{{ props.row.max_epoch }}</span>
            </el-form-item>
            <el-form-item :label="$t('task.gpu')">
              <span>{{ props.row.gpu }}</span>
            </el-form-item>
            <el-form-item v-if="props.row.gpu" :label="$t('task.gpu_id')">
              <span>{{ props.row.gpu_id }}</span>
            </el-form-item>
            <el-form-item :label="$t('common.createTime')">
              <span>{{ props.row.create_time }}</span>
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
        prop="task"
        :label="$t('task.task_type')"
        width="130"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.task === 'traffic_state_pred'"> {{ $t('task.traffic_state_pred') }} </span>
          <span v-if="scope.row.task === 'traj_loc_pred'"> {{ $t('task.traj_loc_pred') }} </span>
          <span v-if="scope.row.task === 'road_representation'"> {{ $t('task.road_representation') }} </span>
          <span v-if="scope.row.task === 'eta'"> {{ $t('task.eta') }} </span>
          <span v-if="scope.row.task === 'map_matching'"> {{ $t('task.map_matching') }} </span>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="dataset"
        :label="$t('task.dataFile')"
      /> -->
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
      />
      <el-table-column
        prop="execute_time"
        :label="$t('task.executeTime')"
      />
      <el-table-column
        prop="execute_end_time"
        :label="$t('task.executeEndTime')"
      />
      <!-- <el-table-column
        prop="create_time"
        :label="$t('common.createTime')"
      /> -->
      <el-table-column
        :label="$t('common.operation')"
      >
        <template slot-scope="scope">
          <el-button-group v-intro-if="scope.$index === 0" style="width: 120px" :data-intro="$t('taskIndexIntroL.step04')" data-step="4">

            <!-- <el-button style="width: 120px" :disabled="editDisable" type="primary" size="small" icon="el-icon-edit">
                {{ $t('common.edit') }}
              </el-button> -->
            <el-link style="margin-left: 10px" :disabled="editDisable || ( (scope.row.task_status) == 1 || (scope.row.task_status) === 2 )" icon="el-icon-edit">
              <span v-if="editDisable || ( (scope.row.task_status) == 1 || (scope.row.task_status) === 2 )">
                {{ $t('common.edit') }}
              </span>
              <router-link v-else :to="'/taskEdit/editTask/'+scope.row.id" disabled>
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
              <el-link v-if="!deleteDisable" slot="reference" style="margin-left: 10px" :disabled="deleteDisable" icon="el-icon-delete">
                {{ $t('common.delete') }}
              </el-link>
              <!-- <el-button slot="reference" style="width: 120px" :disabled="deleteDisable" type="danger" size="small" icon="el-icon-delete">
                {{ $t('common.delete') }}
              </el-button> -->
            </el-popconfirm>
            <el-link v-if="scope.row.task_status === 0" style="margin-left: 10px" :disabled="executeDisable" icon="el-icon-video-play" @click="execute(scope.row.id)">
              {{ $t('task.execute') }}
            </el-link>
            <el-link v-if="scope.row.task_status === -1" style="margin-left: 10px" :disabled="executeDisable" icon="el-icon-video-play" @click="execute(scope.row.id)">
              {{ $t('task.reExecute') }}
            </el-link>
            <el-link v-if="scope.row.task_status === 1" style="margin-left: 10px" disabled icon="el-icon-loading">
              {{ $t('task.executing') }}
            </el-link>
            <el-link v-if=" scope.row.task_status === 2 && scope.row.task !== 'road_representation' " style="margin-left: 10px" :disabled="executeDisable" icon="el-icon-notebook-2" @click="openEvaluateDialog(scope.row.id)">
              {{ $t('task.catEvaluate') }}
            </el-link>
            <el-link v-if=" scope.row.task_status === 2 && scope.row.task !== 'traj_loc_pred' " style="margin-left: 10px" :disabled="executeDisable" icon="el-icon-view" @click="showResult(scope.row.id, scope.row.dataset)">
              {{ $t('task.showResult') }}
            </el-link>
            <el-link v-if="scope.row.task_status !== 0" style="margin-left: 10px" :disabled="executeDisable" icon="el-icon-document" @click="catLog(scope.row.id)">
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
      :title="$t('task.logview')"
      :visible.sync="logDialogVisible"
      width="80%"
      class="dialog-div"
    >
      <!-- <div style="white-space: pre-line; margin: 20px" v-html="logData" /> -->
      <pre style="white-space: pre-line; margin: 20px; background-color: black; color: white; font-family: Consolas; font-size: 16px;  padding: 10px">{{ logData }}</pre>
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
      :title="$t('task.eva_view')"
      :visible.sync="evaluateDialogVisible"
      width="80%"
      class="dialog-div"
      :destroy-on-close="evaluateDestroyOnClose"
      @closed="closeEvaluateDialog()"
    >
      <div style="height: 80%">
        <!-- 交通状态预测、到达时间估计表格 -->
        <el-table
          v-if="task.task === 'eta' || task.task === 'traffic_state_pred'"
          ref="etaStateTable"
          v-loading="evaluateListLoading"
          :data="evaluateData"
          style="width: 100%"
          height="100%"
          border
        >
          <af-table-column
            type="index"
            :index="stateIndexMethod"
            :label="$t('common.order')"
            width="80"
            height="auto"
            fixed
          />
          <!-- <af-table-column
            v-if="evaluateData[0].MAE !== null && evaluateData[0].MAE !== '' "
            prop="MAE"
            :label="$t('task.MAE')"
            fixed
          /> -->
          <af-table-column
            v-if="evaluateData[0].MAE !== null && evaluateData[0].MAE !== '' "
            prop="MAE"
            :label="$t('task.MAE')"
          />
          <af-table-column
            v-if="evaluateData[0].MAPE !== null && evaluateData[0].MAPE !== '' "
            prop="MAPE"
            :label="$t('task.MAPE')"
          />
          <af-table-column
            v-if="evaluateData[0].MSE !== null && evaluateData[0].MSE !== '' "
            prop="MSE"
            :label="$t('task.MSE')"
          />
          <af-table-column
            v-if="evaluateData[0].RMSE !== null && evaluateData[0].RMSE !== '' "
            prop="RMSE"
            :label="$t('task.RMSE')"
          />
          <af-table-column
            v-if="evaluateData[0].masked_MAE !== null && evaluateData[0].masked_MAE !== '' "
            prop="masked_MAE"
            :label="$t('task.masked_MAE')"
          />
          <af-table-column
            v-if="evaluateData[0].masked_MAPE !== null && evaluateData[0].masked_MAPE !== '' "
            prop="masked_MAPE"
            :label="$t('task.masked_MAPE')"
          />
          <af-table-column
            v-if="evaluateData[0].masked_MSE !== null && evaluateData[0].masked_MSE !== '' "
            prop="masked_MSE"
            :label="$t('task.masked_MSE')"
          />
          <af-table-column
            v-if="evaluateData[0].masked_RMSE !== null && evaluateData[0].masked_RMSE !== '' "
            prop="masked_RMSE"
            :label="$t('task.masked_RMSE')"
          />
          <af-table-column
            v-if="evaluateData[0].R2 !== null && evaluateData[0].R2 !== '' "
            prop="R2"
            :label="$t('task.R2')"
          />
          <af-table-column
            v-if="evaluateData[0].EVAR !== null && evaluateData[0].EVAR !== '' "
            prop="EVAR"
            :label="$t('task.EVAR')"
          />
          <af-table-column
            v-if="evaluateData[0].Precision !== null && evaluateData[0].Precision !== '' "
            prop="Precision"
            :label="$t('task.Precision')"
          />
          <af-table-column
            v-if="evaluateData[0].Recall !== null && evaluateData[0].Recall !== '' "
            prop="Recall"
            :label="$t('task.Recall')"
          />
          <af-table-column
            v-if="evaluateData[0].F1_Score !== null && evaluateData[0].F1_Score !== '' "
            prop="F1_Score"
            :label="$t('task.F1Score')"
          />
          <af-table-column
            v-if="evaluateData[0].MAP !== null && evaluateData[0].MAP !== '' "
            prop="MAP"
            :label="$t('task.MAP')"
          />
          <af-table-column
            v-if="evaluateData[0].PCC !== null && evaluateData[0].PCC !== '' "
            prop="PCC"
            :label="$t('task.PCC')"
          />
        </el-table>

        <!-- 路网匹配表格 -->
        <el-table
          v-if="task.task === 'map_matching'"
          v-loading="evaluateListLoading"
          :data="evaluateData"
          style="width: 100%"
          height="100%"
          border
          fit
        >
          <!-- <el-table-column
            type="index"
            :index="stateIndexMethod"
            :label="$t('common.order')"
            fixed
            width="100px"
          /> -->
          <af-table-column
            v-if="evaluateData[0].RMF !== null"
            prop="RMF"
            :label="$t('task.RMF')"
          />
          <af-table-column
            v-if="evaluateData[0].AN !== null"
            prop="AN"
            :label="$t('task.AN')"
          />
          <af-table-column
            v-if="evaluateData[0].AL !== null"
            prop="AL"
            :label="$t('task.AL')"
          />
        </el-table>

        <!-- 轨迹下一跳表格 -->
        <el-table
          v-if="task.task === 'traj_loc_pred'"
          v-loading="evaluateListLoading"
          :data="evaluateData"
          style="width: 100%"
          height="100%"
          border
          fit
        >
          <!-- <el-table-column
            type="index"
            :index="stateIndexMethod"
            :label="$t('common.order')"
            fixed
            width="100px"
          /> -->
          <af-table-column
            v-if="evaluateData[0].Recall !== null"
            prop="Recall"
            :label="$t('task.Recall')"
          />
          <af-table-column
            v-if="evaluateData[0].Precision !== null"
            prop="Precision"
            :label="$t('task.Precision')"
          />
          <af-table-column
            v-if="evaluateData[0].F1 !== null"
            prop="F1"
            :label="$t('task.F1Score')"
          />
          <af-table-column
            v-if="evaluateData[0].MRR !== null"
            prop="MRR"
            :label="$t('task.MRR')"
          />
          <af-table-column
            v-if="evaluateData[0].MAP !== null"
            prop="MAP"
            :label="$t('task.MAP')"
          />
          <af-table-column
            v-if="evaluateData[0].NDCG !== null"
            prop="NDCG"
            :label="$t('task.NDCG')"
          />
        </el-table>

        <!-- 指标分页组件 -->
        <div>
          <el-pagination
            :hide-on-single-page="true"
            :current-page="evaluateQueryParam.page"
            :page-sizes="[10, 20, 50, 100, 200]"
            :page-size="evaluateQueryParam.size"
            style="padding: 30px 0; text-align: center;"
            layout="total, prev, pager, next"
            :total="evaluateQueryParam.total"
            @size-change="handleEvaluateSizeChange"
            @current-change="handleEvaluateCurrentChange"
          />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="evaluateDialogVisible = false">{{ $t('common.cancel') }}</el-button>
        <a style="margin-left: 10px" :href="BASE_API + '/business/evaluate/download/?task=' + task.id">
          <el-button type="primary" icon="el-icon-download">
            {{ $t('task.downEvaluate') }}
          </el-button></a>
      </span>
    </el-dialog>

    <!-- 配置文件查看弹出框 -->
    <el-dialog
      :title="$t('task.configview')"
      :visible.sync="configDialogVisible"
      width="80%"
      class="dialog-div"
    >
      <!-- <div style="white-space: pre-line; margin: 20px" v-html="configData" /> -->
      <pre style="margin: 20px; background-color: black; color: white; font-family: Consolas; font-size: 16px; padding: 10px">{{ configData }}</pre>
      <span slot="footer" class="dialog-footer">
        <el-button @click="configDialogVisible = false">{{ $t('common.cancel') }}</el-button>
        <!-- <a style="margin-left: 10px" :href="BASE_API + '/business/task/' + task.id + '/download_log/'">
          <el-button type="primary" icon="el-icon-download">
            {{ $t('task.downloadLog') }}
          </el-button></a> -->
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { checkPermission } from '@/utils/permission'
import { getTaskList, getTaskById, executeTaskById,
  deleteTaskById, getExecuteLogById, getStateEvaluateList,
  getMapMatchingEvaluateList, getTrajEvaluateList, getConfigDataById,
  getStateMode } from '@/api/task'

const DEFAULT_EVALUATE_DATA = [{ 'MAE': '', 'MAPE': '', 'MSE': '', 'RMSE': '', 'masked_MAE': '', 'masked_MAPE': '',
  'masked_MSE': '', 'masked_RMSE': '', 'R2': '', 'EVAR': '', 'Precision': '',
  'Recall': '', 'F1-Score': '', 'MAP': '', 'PCC': '', 'RMF': '', 'AN': '', 'AL': '',
  'F1': '', 'MRR': '', 'NDCG': '' }]

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
      BASE_API: window.global_url.Base_url,
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
        size: 8,
        total: 0
      },
      evaluateDialogFirstOpen: false,
      taskParamList: [
        { id: '1', label: this.$t('task.traffic_state_pred'), value: 'traffic_state_pred' },
        { id: '2', label: this.$t('task.traj_loc_pred'), value: 'traj_loc_pred' },
        { id: '3', label: this.$t('task.road_representation'), value: 'road_representation' },
        { id: '4', label: this.$t('task.eta'), value: 'eta' },
        { id: '5', label: this.$t('task.map_matching'), value: 'map_matching' }],
      taskStatusList: [
        { id: '1', label: this.$t('task.noStart'), value: '0' },
        { id: '2', label: this.$t('task.executing'), value: '1' },
        { id: '3', label: this.$t('task.completed'), value: '2' },
        { id: '4', label: this.$t('task.executeError'), value: '-1' }],
      total: 0,
      defaultPage: 1,
      defaultSize: 10,
      executeTaskDialogVisible: false,
      executeForm: { executeTime: '' },
      executeId: 0,
      logDialogVisible: false, // 日志查看弹出框
      logData: '', // 日志数据
      evaluateDialogVisible: false,
      evaluateListLoading: false,
      // 按钮权限
      executeDisable: true,
      editDisable: true,
      deleteDisable: true,
      evaluateData: [{ 'MAE': '', 'MAPE': '', 'MSE': '', 'RMSE': '', 'masked_MAE': '', 'masked_MAPE': '',
        'masked_MSE': '', 'masked_RMSE': '', 'R2': '', 'EVAR': '', 'Precision': '',
        'Recall': '', 'F1-Score': '', 'MAP': '', 'PCC': '', 'RMF': '', 'AN': '', 'AL': '',
        'F1': '', 'MRR': '', 'NDCG': '' }],
      executeRules: {
        executeTime: [{ type: 'date', required: true, trigger: 'blur', validator: validateExecuteTime }]
      },
      // 指标dialog关闭时是否清空元素
      evaluateDestroyOnClose: true,
      configDialogVisible: false,
      configData: ''
    }
  },
  watch: {
    evaluateData(val) {
      this.doLayout()
    }
  },
  created() {
    this.checkButtonPermission()
    this.getList()
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        // const rowList = Array.from(this.$refs.taskTable.$el.getElementsByClassName('el-table__row'))
        // console.log('rowList:', rowList)
        // console.log('cells0:', rowList[0].cells[0].classList)
        // this.$intro.setOptions({
        //   steps: [{
        //     title: 'Welcome',
        //     intro: 'Hello World! 👋'
        //   },
        //   {
        //     element: rowList[0].cells[0],
        //     intro: 'This step focuses on an image'
        //   },
        //   {
        //     title: 'Farewell!',
        //     element: rowList[0].cells[1],
        //     intro: 'And this is our final step!'
        //   }]
        // })
        if (localStorage.getItem('taskIndexNew') === null || localStorage.getItem('taskIndexNew') !== '1') {
          this.$intro.start()
          localStorage.setItem('taskIndexNew', 1)
        }
      }, 300)
    })
  },
  methods: {
    checkPermission,
    // 获取评价指标mode
    getTaskEvalueteMode(taskId) {
      getStateMode(taskId).then(res => {
        console.log(res)
      })
    },
    // 解决elementui表格fixed错位bug
    doLayout() {
      this.$nextTick(() => {
        if (this.$refs.etaStateTable) {
          this.$refs.etaStateTable.doLayout()
        }
      })
    },
    checkButtonPermission() {
      this.executeDisable = !checkPermission(['taskExecute'])
      this.editDisable = !checkPermission(['taskEdit'])
      this.deleteDisable = !checkPermission(['taskDelete'])
    },
    // 查看任务结果文件
    showResult(taskId, dataset) {
      console.log('taskId:', taskId)
      console.log('dataset:', dataset)
      // 新窗口打开
      const routeData = this.$router.resolve({
        path: '/task/result',
        query: {
          taskId: taskId,
          dataset: dataset
        }
      })
      window.open(routeData.href, '_blank')
    },
    // 深拷贝
    deepCopy(obj) {
      if (typeof obj === 'function') {
        throw new TypeError('请传入正确的数据类型格式')
      }
      try {
        const data = JSON.stringify(obj)
        const newData = JSON.parse(data)
        return newData
      } catch (e) {
        console.log(e)
      }
    },
    // 模型指标对比
    contrast() {
      const tasks = this.$refs.taskTable.selection
      if (tasks.length === 0) {
        this.$message.warning(this.$t('task.selectTaskTip'))
        return
      }
      // 路网表征学习，无模型评价指标
      const isRoadRepresentation = tasks.every(item => item.task === 'road_representation')
      if (isRoadRepresentation) {
        this.$message.warning(this.$t('task.selectRoadRepresentation'))
        return
      }
      // 所有任务必须得是已完成的任务
      const isComplete = tasks.every(item => item.task_status === 2)
      if (!isComplete) {
        this.$message.warning(this.$t('task.selectCompleteTip'))
        return
      }
      // 数组中所有条目的任务类型(task)必须相同
      const defaultTask = tasks[0].task
      const taskIsSame = tasks.every(item => item.task === defaultTask)
      if (!taskIsSame) {
        this.$message.warning(this.$t('task.selectSameTask'))
        return
      }
      // 所有任务的模型必须不同-需求修改，可以同模型对比
      // var isDifferentModel = true
      // const taskModels = tasks.map(item => item.model) // 模型list
      // const arr = []
      // for (let i = 0; i < taskModels.length; i++) {
      //   if (arr.indexOf(taskModels[i]) === -1) {
      //     arr.push(taskModels[i])
      //   } else {
      //     isDifferentModel = false
      //   }
      // }
      // if (!isDifferentModel) {
      //   this.$message.warning(this.$t('task.selectDifferentModelTask'))
      //   return
      // }
      // 取出id list
      const taskIds = tasks.map(item => item.id)
      const taskIdsStr = taskIds.join(',')
      console.log(taskIds)
      console.log(taskIdsStr)
      // 新窗口打开
      const routeData = this.$router.resolve({
        path: '/evaluate/index',
        query: {
          taskIds: taskIdsStr,
          taskType: defaultTask
        }
      })
      window.open(routeData.href, '_blank')
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
    // 查看配置文件信息
    catConfig(id) {
      this.task.id = id
      this.configDialogVisible = true
      getConfigDataById(id).then(res => {
        this.configData = res.data
      })
    },
    openEvaluateDialog(taskId) {
      this.evaluateDialogVisible = true
      this.evaluateDialogFirstOpen = true
      this.catEvaluate(taskId)
    },
    // 查看评价指标
    catEvaluate(id) {
      this.evaluateListLoading = true
      // 获取当前任务相关数据
      getTaskById(id).then(res => {
        this.task = res.data
        if (this.task.task === 'traffic_state_pred' || this.task.task === 'eta') {
        // 走交通状态预测和到达时间估计接口
          this.evaluateQueryParam.task = this.task.id
          getStateEvaluateList(this.evaluateQueryParam).then(res => {
            this.evaluateData = res.data.results
            this.evaluateQueryParam.total = res.data.count
          })
          // 获取评价指标mode
          if (this.task.task === 'traffic_state_pred' && this.evaluateDialogFirstOpen) {
            getStateMode(this.task.id).then(res => {
              // 弹窗提醒
              this.$notify.info({
                message: this.$t('task.stateModeTip') + res.data.mode,
                duration: 10000
              })
              this.evaluateDialogFirstOpen = false
            })
          }
        } else if (this.task.task === 'map_matching') {
          // 走路网匹配接口
          this.evaluateQueryParam.task = this.task.id
          getMapMatchingEvaluateList(this.evaluateQueryParam).then(res => {
            this.evaluateData = res.data.results
            this.evaluateQueryParam.total = res.data.count
          })
        } else if (this.task.task === 'traj_loc_pred') {
          // 走轨迹下一跳预测接口
          this.evaluateQueryParam.task = this.task.id
          getTrajEvaluateList(this.evaluateQueryParam).then(res => {
            this.evaluateData = res.data.results
            this.evaluateQueryParam.total = res.data.count
          })
        } else {
          // 路网表征学习，无评价指标
          this.evaluateData = []
        }
      })
      this.evaluateListLoading = false
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
    // 指标分页大小改变
    handleEvaluateSizeChange(size) {
      this.evaluateQueryParam.size = size
      this.catEvaluate(this.task.id)
    },
    handleCurrentChange(page) {
      this.queryParam.page = page
      this.getList(this.queryParam)
    },
    // 指标页码改变
    handleEvaluateCurrentChange(page) {
      this.evaluateQueryParam.page = page
      this.catEvaluate(this.task.id)
    },
    // 指标dialog关闭回调
    closeEvaluateDialog() {
      // 清空数据
      this.evaluateQueryParam.page = 1
      this.evaluateQueryParam.size = 8
      this.evaluateQueryParam.total = 0
      this.evaluateData = DEFAULT_EVALUATE_DATA
      this.evaluateDialogFirstOpen = false
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
  display: '';
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
  height: 90%;
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
