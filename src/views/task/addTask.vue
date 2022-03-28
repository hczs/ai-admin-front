<template>
  <div class="app-container" style="text-align: center; width: 100%; height: 100%">
    <div
      style="width: 99%; margin-left: 13px; height: 90%"
      :data-intro="$t('addTaskIntro.step01')"
      data-step="1"
    >
      <div style="width: 70%; margin-left: 5%">
        <el-form
          ref="elForm"
          :rules="rules"
          :model="task"
          label-position="left"
        >
          <div :data-intro="$t('addTaskIntro.step02')" data-step="4">
            <el-form-item :label="$t('task.taskName')" prop="task_name">
              <el-input
                v-model="task.task_name"
                autocomplete="off"
                clearable
                show-word-limit
                maxlength="50"
              />
            </el-form-item>
          </div>
          <el-form-item label-position="right" :label="$t('task.taskDescription')">
            <el-input
              v-model="task.task_description"
              type="textarea"
              maxlength="100"
              rows="3"
              show-word-limit
              clearable
            />
          </el-form-item>
          <el-form-item :label="$t('dataset.isPublic')" style="text-align: left" prop="visibility">
            <el-switch
              v-model="task.visibility"
              :active-text="$t('dataset.public')"
              :inactive-text="$t('dataset.private')"
              :active-value="1"
              :inactive-value="0"
            />
          </el-form-item>
          <!-- <el-form-item :label="$t('task.dataFile')" prop="data_file">
          <el-select v-model="task.data_file" style="float: left"  >
            <el-option
              v-for="file in fileList"
              :key="file.id"
              :label="file.file_name"
              :value="file.id"
            />
          </el-select>
        </el-form-item> -->
          <!-- 以下为任务执行参数配置 -->
          <el-divider content-position="center">
            <!-- {{ $t('task.taskParamTip') }} -->
            <el-link target="_blank" type="primary" href="https://github.com/LibCity/Bigscity-LibCity-Docs-zh_CN/blob/master/source/user_guide/data/dataset_for_task.md">
              <span :data-intro="$t('addTaskIntro.step04')" data-step="3">
                {{ $t('task.clickViewCorresponding') }}
              </span>
            </el-link>
          </el-divider>
          <div :data-intro="$t('addTaskIntro.step03')" data-step="2">
            <el-form-item :label="$t('task.task')" prop="task">
              <el-select
                v-model="task.task"
                style="float: left"
                :placeholder="$t('common.pleasechoose')"
                @change="onTaskChange"
              >
                <el-option
                  v-for="item in taskParamList"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('task.model')" prop="model">
              <el-select v-model="task.model" default-first-option allow-create filterable style="float: left" :placeholder="$t('common.pleasechoose')">
                <el-option
                  v-for="model in modelList"
                  :key="model"
                  :label="model"
                  :value="model"
                />
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('task.dataset')" prop="dataset">
              <el-select v-model="task.dataset" filterable style="float: left" :placeholder="$t('common.pleasechoose')">
                <el-option
                  v-for="file in fileList"
                  :key="file.id"
                  :label="file.file_name"
                  :value="file.file_name"
                />
              </el-select>
            </el-form-item>
          </div>

          <!-- 以下非必填参数 -->
          <el-divider content-position="center">
            {{ $t('task.otherParamTip') }}
          </el-divider>
          <el-form-item :label="$t('task.max_epoch')" prop="max_epoch" style="text-align: left">
            <el-popover
              placement="top-start"
              width="200"
              trigger="hover"
              :content="$t('task.maxEpochTip')"
            >
              <el-input-number slot="reference" v-model.number="task.max_epoch" controls-position="right" />
            </el-popover>

          </el-form-item>

          <el-form-item :label="$t('task.batch_size')" prop="batch_size" style="text-align: left">
            <el-input-number v-model.number="task.batch_size" controls-position="right" />
          </el-form-item>

          <el-form-item :label="$t('task.learning_rate')" prop="learning_rate" style="text-align: left">
            <el-input-number v-model.number="task.learning_rate" controls-position="right" />
          </el-form-item>

          <el-form-item :label="$t('task.train_rate')" prop="train_rate" style="text-align: left">
            <el-input-number v-model.number="task.train_rate" controls-position="right" />
          </el-form-item>
          <el-form-item :label="$t('task.eval_rate')" prop="eval_rate" style="text-align: left">
            <el-input-number v-model.number="task.eval_rate" controls-position="right" />
          </el-form-item>

          <el-form-item :label="$t('task.gpu')" style="text-align: left">

            <el-radio-group v-model="task.gpu">
              <el-radio :label="true">{{ $t('common.yes') }}</el-radio>
              <el-radio :label="false">{{ $t('common.no') }}</el-radio>
            </el-radio-group>

          </el-form-item>
          <el-form-item v-if="task.gpu" :label="$t('task.gpu_id')" prop="gpu_id" style="text-align: left">
            <el-input-number v-model.number="task.gpu_id" controls-position="right" />
          </el-form-item>

          <el-form-item :label="$t('task.saved_model')" style="text-align: left">
            <el-radio-group v-model="task.saved_model">
              <el-radio :label="true">{{ $t('common.yes') }}</el-radio>
              <el-radio :label="false">{{ $t('common.no') }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('task.train')" style="text-align: left">
            <el-radio-group v-model="task.train">
              <el-radio :label="true">{{ $t('common.yes') }}</el-radio>
              <el-radio :label="false">{{ $t('common.no') }}</el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- expid实验ID -->
          <el-form-item v-if="task.train == false" :label="$t('task.expId')" prop="exp_id" style="text-align: left">
            <el-input-number v-model.number="task.exp_id" controls-position="right" />
          </el-form-item>

          <!-- 如果需要配置更多参数，可以上传配置文件 -->
          <el-divider content-position="center">{{ $t('task.taskMoreParamTip') }}</el-divider>
          <el-form-item :label="$t('task.config_file')" :data-intro="$t('addTaskIntro.step05')" data-step="5">
            <!-- <el-button-group> -->
            <el-upload
              ref="upload"
              style="text-align: left"
              class="upload-demo"
              :action="BASE_API + '/business/task/upload/'"
              name="config"
              :limit="fileLimit"
              :on-success="handleFileUploadSuccess"
              :before-upload="handleBeforeUpload"
              :on-exceed="handleOnExceed"
              accept="application/json"
            >
              <el-button slot="trigger" size="small" type="primary"> {{ $t('task.clickUpload') }}</el-button>
              <!-- <div slot="tip" class="el-upload__tip">{{ $t('task.uploadTips') }}
              <a :href="BASE_API + '/business/task/download_config/'" style="margin-left: 10px;">
                <el-button type="info" size="mini" icon="el-icon-download">{{ $t('task.downloadExample') }}
                </el-button>
              </a>
            </div> -->
              <a :href="BASE_API + '/business/task/download_config/'" style="margin-left: 10px;">
                <el-button type="info" size="mini" icon="el-icon-download">
                  {{ $t('task.downloadExample') }}
                </el-button>
              </a>

            </el-upload>

          <!-- </el-button-group> -->
          </el-form-item>
        </el-form>
        <el-button @click="resetForm()">{{ $t('common.clear') }}</el-button>
        <el-button :data-intro="$t('addTaskIntro.step06')" data-step="6" type="primary" @click="submit()">{{ $t('common.confirm') }}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getFileListAll } from '@/api/file'
import { addTask, taskExists, getTaskById, updateTaskById } from '@/api/task'
export default {
  data() {
    // 任务名称校验
    const validateTaskName = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error(this.$t('task.taskNameError')))
      } else {
        this.task.task_name = value
        taskExists(this.task).then(res => {
          if (res.code !== 200 && this.task.id !== res.msg.id) {
            callback(new Error(this.$t('task.taskNameExistsError')))
          } else {
            callback()
          }
        })
      }
    }
    // 大于 0 的整数校验
    const validateMaxEpoch = (rule, value, callback) => {
      // 必须是大于0的整数
      if (typeof (value) !== 'undefined') {
        if (typeof (value) !== 'number') {
          callback(new Error(this.$t('task.numberError')))
        } else if (value % 1 !== 0) {
          callback(new Error(this.$t('task.maxEpochNumberError')))
        } else if (value < 0) {
          callback(new Error(this.$t('task.maxEpochError')))
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
    // 小数校验
    const validateFloat = (rule, value, callback) => {
      // 必须是小数
      if (typeof (value) !== 'undefined') {
        console.log('value:', value)
        if (typeof (value) !== 'number') {
          callback(new Error(this.$t('task.numberError')))
        } else if (value % 1 === 0) {
          callback(new Error(this.$t('task.floatError')))
        } else if (value < 0) {
          callback(new Error(this.$t('task.maxEpochError')))
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
    return {
      BASE_API: window.global_url.Base_url,
      // 任务默认值
      task: {
        task_name: '',
        max_epoch: 1,
        task: 'traffic_state_pred',
        model: 'GRU',
        saved_model: true,
        train: false
      },
      fileLimit: 1,
      formLabelWidth: '10%',
      fileList: [],
      taskModelDict: {
        'traffic_state_pred': [
          'GRU', 'ACFM', 'STResNet', 'DSAN', 'ACFMCommon', 'STResNetCommon', 'RNN', 'FNN', 'AutoEncoder',
          'Seq2Seq', 'AGCRN', 'ASTGCNCommon', 'MSTGCNCommon', 'STSGCN', 'CONVGCNCommon', 'ToGCN', 'MultiSTGCnetCommon',
          'STNN', 'ASTGCN', 'MSTGCN', 'CONVGCN', 'DGCN', 'ResLSTM', 'MultiSTGCnet', 'CRANN', 'STDN', 'DCRNN',
          'STGCN', 'GWNET', 'MTGNN', 'STMGAT', 'TGCN', 'ATDM', 'HGCN', 'DKFN', 'STTN', 'GTS', 'GMAN', 'STAGGCN',
          'TGCLSTM', 'DMVSTNet', 'CCRNN', 'STG2Seq', 'GEML', 'CSTN', 'GSNet'],
        'traj_loc_pred': [
          'FPMC', 'RNN', 'ST-RNN', 'ATST-LSTM', 'DeepMove', 'HST-LSTM', 'LSTPM', 'STAN',
          'GeoSAN', 'SERM', 'CARA'],
        'eta': [
          'DeepTTE', 'TTPNet'
        ],
        'map_matching': ['STMatching', 'IVMM', 'HMMM'],
        'road_representation': ['ChebConv', 'LINE']
      },
      modelList: ['CRANN', 'DeepTTE', 'IVMM', 'GeoSAN', 'AutoEncoder', 'MultiSTGCnet', 'DKFN', 'FNN', 'GWNET', 'MSTGCN', 'STTN', ' STNN', 'RNN', 'MSTGCNCommon', 'CONVGCNCommon', 'STGCN', 'GSNet', 'FPMC', 'HMMM', 'GTS', 'STMGAT', 'DMVSTNet', 'ASTGCN', 'ToGCN', 'DSAN', 'ATST-LSTM', 'ChebConv', 'MultiSTGCnetCommon', 'CCRNN', 'TGCN', 'STDN', 'ST-RNN', 'ATDM', 'SERM', 'DCRNN', 'DeepMove', 'LINE', ' GMAN', 'CARA', 'CSTN', ' ASTGCN', 'ACFM', 'MTGNN', 'STMatching', 'STAGGCN', 'TTPNet', 'HGCN', 'ACFMCommon', ' ATST-LSTM', 'STResNet', 'STResNetCommon', 'STNN', 'CONVGCN', ' ASTGCNCommon', 'GEML', 'STG2Seq', 'STAN', 'HST-LSTM', 'GMAN', ' STAGGCN', 'LSTPM', 'STSGCN', 'ResLSTM', 'AGCRN', 'Seq2Seq', 'DGCN', 'ASTGCNCommon', 'TGCLSTM'],
      // modelList: this.taskModelDict['traffic_state_pred'],
      taskParamList: [
        { id: '1', label: this.$t('task.traffic_state_pred'), value: 'traffic_state_pred' },
        { id: '2', label: this.$t('task.traj_loc_pred'), value: 'traj_loc_pred' },
        { id: '3', label: this.$t('task.road_representation'), value: 'road_representation' },
        { id: '4', label: this.$t('task.eta'), value: 'eta' },
        { id: '5', label: this.$t('task.map_matching'), value: 'map_matching' }],
      rules: {
        task_name: [{ required: true, trigger: 'blur', validator: validateTaskName }],
        task: [{ required: true, message: this.$t('task.taskError') }],
        model: [{ required: true, message: this.$t('task.modelError') }],
        dataset: [{ required: true, message: this.$t('task.datasetError') }],
        batch_size: [{ required: false, validator: validateMaxEpoch }],
        train_rate: [{ required: false, validator: validateFloat }],
        eval_rate: [{ required: false, validator: validateFloat }],
        learning_rate: [{ required: false, validator: validateFloat }],
        max_epoch: [{ required: false, validator: validateMaxEpoch }],
        gpu_id: [{ type: 'number', message: this.$t('task.numberError') }]
      }
    }
  },
  computed: {
    // TODO 下拉列表中英文切换
    isEdit() {
      return this.$store.state.app.language // 需要监听的数据
    }
  },
  watch: {
    isEdit(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  mounted() {
    // // 新手引导
    // this.$intro.start() // start the guide
    // this.$intro.showHints() // show hints
    this.$nextTick(() => {
      if (localStorage.getItem('addTaskNew') === null || localStorage.getItem('addTaskNew') !== '1') {
        this.$intro.start()
        localStorage.setItem('addTaskNew', 1)
      }
    })
  },

  created() {
    if (this.$route.params && this.$route.params.id) {
      // 从路径获取id值
      const id = this.$route.params.id
      // 修改按钮
      // this.submitButton = '立即修改'
      // 调用回显
      this.getById(id)
    }
    // 获取数据集文件列表
    this.getList()
    // 初始化任务和模型选择器
    this.initSelect()
  },
  updated() {
    // 在updated里面更新数组会触发死循环
    // this.taskParamList = [
    //   { id: '1', label: this.$t('task.traffic_state_pred'), value: 'traffic_state_pred' },
    //   { id: '2', label: this.$t('task.traj_loc_pred'), value: 'traj_loc_pred' },
    //   { id: '3', label: this.$t('task.road_representation'), value: 'road_representation' },
    //   { id: '4', label: this.$t('task.eta'), value: 'eta' },
    //   { id: '5', label: this.$t('task.map_matching'), value: 'map_matching' }]
  },
  methods: {
    initSelect() {
      this.modelList = this.taskModelDict[this.task.task]
      this.task.model = this.modelList[0]
    },
    onTaskChange(curValue) {
      console.log('change:', curValue)
      console.log('model:', this.taskModelDict[curValue])
      this.modelList = this.taskModelDict[curValue]
      this.task.model = this.modelList[0]
    },
    // 解决el-input-number将null值处理为0的bug
    numberToEmpty(data) {
      for (var index in data) {
        if (data[index] === null) {
          data[index] = undefined
        }
      }
      return data
    },
    // 获取数据集list
    getList() {
      getFileListAll().then(res => {
        this.fileList = res.data
      })
    },
    // 回显任务数据
    getById(id) {
      getTaskById(id).then(res => {
        this.task = this.numberToEmpty(res.data)
      })
    },
    submit() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) {
          this.loading = false
          return
        }
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        // 判断是更新还是新增
        if (this.task.id) {
          updateTaskById(this.task.id, this.task).then(res => {
            this.$message.success(this.$t('task.taskUpdateSuccess'))
            // 路由跳转到list
            this.$router.push({ path: '/taskList/index' })
          })
        } else {
          addTask(this.task).then(res => {
            if (res.code === 201) {
              this.$message.success(this.$t('task.taskCreateSuccess'))
              // 路由跳转到list
              this.$router.push({ path: '/taskList/index' })
            } else {
              this.$message.error(this.$t('task.taskCreateError'))
              console.log(res.msg)
            }
          })
        }
        loading.close()
      })
    },
    resetForm() {
      this.$refs['elForm'].clearValidate()
      this.$refs['upload'].clearFiles()
      this.$refs['elForm'].resetFields()
      this.task = {
        task_name: '',
        max_epoch: 1,
        task: 'traffic_state_pred',
        model: 'GRU',
        gpu: false
      }
    },

    // 文件上传相关
    // 上传成功，刷新页面
    handleFileUploadSuccess(response) {
      this.task.config_file = response.data
      this.$message.success(this.$t('dataset.uploadSuccess'))
    },
    // 上传之前，检查文件类型
    handleBeforeUpload(file) {
      var isJson = file.type === 'application/json'
      if (!isJson) {
        this.$message.error(this.$t('task.uploadError'))
      }
      return isJson
    },
    // 文件超出最大个数
    handleOnExceed() {
      this.$message.error(this.$t('task.OnExceedError'))
    }
  }
}
</script>
<style lang="scss" scoped>
.requiredBox {

  ::v-deep .el-form-item__label {

    transform: translateX(-10px);
  }
}
// .el-form-item__label-wrap {
//   margin-left: 0px !important;
// }
</style>
