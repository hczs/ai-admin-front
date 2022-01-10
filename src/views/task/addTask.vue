<template>
  <div class="app-container" style="text-align: center; width: 100%;">
    <div style="width: 60%; margin-left: 5%">
      <el-form ref="elForm" :rules="rules" :model="task" label-width="auto" label-position="left">
        <el-form-item :label="$t('task.taskName')" prop="task_name">
          <el-input
            v-model="task.task_name"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="50"
          />
        </el-form-item>
        <el-form-item :label="$t('task.taskDescription')">
          <el-input
            v-model="task.task_description"
            type="textarea"
            maxlength="100"
            autosize
            :rows="2"
            show-word-limit
            clearable
          />
        </el-form-item>
        <!-- <el-form-item :label="$t('task.dataFile')" prop="data_file">
          <el-select v-model="task.data_file" style="float: left" placeholder="请选择">
            <el-option
              v-for="file in fileList"
              :key="file.id"
              :label="file.file_name"
              :value="file.id"
            />
          </el-select>
        </el-form-item> -->
        <!-- 以下为任务执行参数配置 -->
        <el-divider content-position="center">{{ $t('task.taskParamTip') }}</el-divider>
        <el-link target="_blank" type="info" href="https://github.com/LibCity/Bigscity-LibCity-Docs-zh_CN/blob/master/source/user_guide/data/dataset_for_task.md">
          {{ $t('task.clickViewCorresponding') }}
        </el-link>
        <br>
        <br>
        <el-form-item :label="$t('task.task')" prop="task">
          <el-select v-model="task.task" style="float: left" placeholder="请选择">
            <el-option
              v-for="item in taskParamList"
              :key="item.id"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('task.model')" prop="model">
          <el-select v-model="task.model" default-first-option allow-create filterable style="float: left" placeholder="请选择">
            <el-option
              v-for="model in modelList"
              :key="model"
              :label="model"
              :value="model"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('task.dataset')" prop="dataset">
          <el-select v-model="task.dataset" filterable style="float: left" placeholder="请选择">
            <el-option
              v-for="file in fileList"
              :key="file.id"
              :label="file.file_name"
              :value="file.file_name"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('task.saved_model')" style="text-align: left">
          <el-radio-group v-model="task.saved_model">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('task.train')" style="text-align: left">
          <el-radio-group v-model="task.train">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('task.batch_size')" prop="batch_size" style="text-align: left">
          <el-input-number v-model.number="task.batch_size" controls-position="right" />
        </el-form-item>
        <el-form-item :label="$t('task.train_rate')" prop="train_rate" style="text-align: left">
          <el-input-number v-model.number="task.train_rate" controls-position="right" />
        </el-form-item>
        <el-form-item :label="$t('task.eval_rate')" prop="eval_rate" style="text-align: left">
          <el-input-number v-model.number="task.eval_rate" controls-position="right" />
        </el-form-item>
        <el-form-item :label="$t('task.learning_rate')" prop="learning_rate" style="text-align: left">
          <el-input-number v-model.number="task.learning_rate" controls-position="right" />
        </el-form-item>
        <el-form-item :label="$t('task.max_epoch')" prop="max_epoch" style="text-align: left">
          <el-input-number v-model.number="task.max_epoch" controls-position="right" />
        </el-form-item>
        <el-form-item :label="$t('task.gpu')" style="text-align: left">
          <el-radio-group v-model="task.gpu">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('task.gpu_id')" prop="gpu_id" style="text-align: left">
          <el-input-number v-model.number="task.gpu_id" controls-position="right" />
        </el-form-item>
        <!-- 如果需要配置更多参数，可以上传配置文件 -->
        <el-divider content-position="center">{{ $t('task.taskMoreParamTip') }}</el-divider>
        <el-form-item :label="$t('task.config_file')">
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
            <el-button size="small" type="primary"> {{ $t('dataset.clickUpload') }}</el-button>
            <div slot="tip" class="el-upload__tip">{{ $t('task.uploadTips') }}
              <a :href="BASE_API + '/business/task/download_config/'" style="margin-left: 10px;"><el-button type="info" size="mini" icon="el-icon-download">{{ $t('task.downloadExample') }}</el-button></a></div>
          </el-upload>
        </el-form-item>
      </el-form>
      <el-button @click="resetForm()">{{ $t('common.clear') }}</el-button>
      <el-button type="primary" @click="submit()">{{ $t('common.confirm') }}</el-button>
    </div>

  </div>
</template>
<script>
import { getFileList } from '@/api/file'
import { addTask, taskExists, getTaskById, updateTaskById } from '@/api/task'
export default {
  data() {
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
    return {
      BASE_API: process.env.VUE_APP_BASE_API,
      task: {
        task_name: ''
      },
      fileLimit: 1,
      formLabelWidth: '10%',
      fileList: [],
      modelList: ['CRANN', 'DeepTTE', 'IVMM', 'GeoSAN', 'AutoEncoder', 'MultiSTGCnet', 'DKFN', 'FNN', 'GWNET', 'MSTGCN', 'STTN', ' STNN', 'RNN', 'MSTGCNCommon', ' AutoEncoder', 'CONVGCNCommon', 'STGCN', 'GSNet', 'FPMC', 'HMMM', 'GTS', 'STMGAT', 'DMVSTNet', 'ASTGCN', 'ToGCN', 'DSAN', 'ATST-LSTM', 'ChebConv', 'MultiSTGCnetCommon', 'CCRNN', 'TGCN', 'STDN', 'ST-RNN', 'ATDM', 'SERM', 'DCRNN', 'DeepMove', 'LINE', ' GMAN', 'CARA', 'CSTN', ' IVMM', ' ASTGCN', 'ACFM', 'MTGNN', 'STMatching', 'STAGGCN', 'TTPNet', 'HGCN', 'ACFMCommon', ' ATST-LSTM', 'STResNet', 'STResNetCommon', 'STNN', 'CONVGCN', ' ASTGCNCommon', 'GEML', 'STG2Seq', 'STAN', 'HST-LSTM', 'GMAN', ' STAGGCN', 'LSTPM', 'STSGCN', 'ResLSTM', 'AGCRN', 'Seq2Seq', 'DGCN', 'ASTGCNCommon', 'TGCLSTM'],
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
        batch_size: [{ type: 'number', message: this.$t('task.numberError') }],
        train_rate: [{ type: 'number', message: this.$t('task.numberError') }],
        eval_rate: [{ type: 'number', message: this.$t('task.numberError') }],
        learning_rate: [{ type: 'number', message: this.$t('task.numberError') }],
        max_epoch: [{ type: 'number', message: this.$t('task.numberError') }],
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
      getFileList().then(res => {
        this.fileList = res.data.results
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
            this.$router.push({ path: '/tasks' })
          })
        } else {
          addTask(this.task).then(res => {
            if (res.code === 201) {
              this.$message.success(this.$t('task.taskCreateSuccess'))
              // 路由跳转到list
              this.$router.push({ path: '/tasks' })
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
      this.task = {}
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
