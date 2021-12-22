<template>
  <div class="app-container" style="text-align: center; width: 100%;">
    <div style="width: 60%; margin: 0 auto">
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
        <el-form-item :label="$t('task.dataFile')" prop="data_file">
          <el-select v-model="task.data_file" style="float: left" placeholder="请选择">
            <el-option
              v-for="file in fileList"
              :key="file.id"
              :label="file.file_name"
              :value="file.id"
            />
          </el-select>
        </el-form-item>
        <!-- 以下为任务执行参数配置 -->
        <div style="text-align: left">以下为任务执行参数配置：<br><br></div>
        <el-form-item label="task" prop="task">
          <el-select v-model="task.task" style="float: left" placeholder="请选择">
            <el-option
              v-for="item in taskParamList"
              :key="item.id"
              :label="item.value"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="model" prop="model">
          <el-input
            v-model="task.model"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="20"
          />
        </el-form-item>
        <el-form-item label="dataset" prop="dataset">
          <el-input
            v-model="task.dataset"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="20"
          />
        </el-form-item>
        <el-form-item label="config_file">
          <!-- <el-input
            v-model="task.config_file"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="100"
          /> -->
          <el-upload
            ref="upload"
            style="text-align: left"
            class="upload-demo"
            action="http://127.0.0.1:8000/api/business/task/upload/"
            name="config"
            :limit="fileLimit"
            :on-success="handleFileUploadSuccess"
            :before-upload="handleBeforeUpload"
            :on-exceed="handleOnExceed"
            accept="application/json"
          >
            <el-button size="small" type="primary"> {{ $t('dataset.clickUpload') }}</el-button>
            <div slot="tip" class="el-upload__tip">{{ $t('task.uploadTips') }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="saved_model" style="text-align: left">
          <el-radio-group v-model="task.saved_model">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="train" style="text-align: left">
          <el-radio-group v-model="task.train">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="batch_size" prop="batch_size" style="text-align: left">
          <el-input-number v-model.number="task.batch_size" controls-position="right" />
        </el-form-item>
        <el-form-item label="train_rate" prop="train_rate" style="text-align: left">
          <el-input-number v-model.number="task.train_rate" controls-position="right" />
          <!-- <el-input
            v-model.number="task.train_rate"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="20"
          /> -->
        </el-form-item>
        <el-form-item label="eval_rate" prop="eval_rate" style="text-align: left">
          <el-input-number v-model.number="task.eval_rate" controls-position="right" />
          <!-- <el-input
            v-model.number="task.eval_rate"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="20"
          /> -->
        </el-form-item>
        <el-form-item label="learning_rate" prop="learning_rate" style="text-align: left">
          <el-input-number v-model.number="task.learning_rate" controls-position="right" />
          <!-- <el-input
            v-model.number="task.learning_rate"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="20"
          /> -->
        </el-form-item>
        <el-form-item label="max_epoch" prop="max_epoch" style="text-align: left">
          <el-input-number v-model.number="task.max_epoch" controls-position="right" />
          <!-- <el-input
            v-model.number="task.max_epoch"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="20"
          /> -->
        </el-form-item>
        <el-form-item label="gpu" style="text-align: left">
          <el-radio-group v-model="task.gpu">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="gpu_id" prop="gpu_id" style="text-align: left">
          <el-input-number v-model.number="task.gpu_id" controls-position="right" />
          <!-- <el-input
            v-model.number="task.gpu_id"
            autocomplete="off"
            clearable
            show-word-limit
            maxlength="20"
          /> -->
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
      task: {
        task_name: ''
      },
      fileLimit: 1,
      formLabelWidth: '10%',
      fileList: [],
      taskParamList: [
        { id: '1', value: 'traffic_state_pred' },
        { id: '2', value: 'traj_loc_pred' },
        { id: '3', value: 'road_representation' },
        { id: '4', value: 'eta' },
        { id: '5', value: 'map_matching' }],
      rules: {
        task_name: [{ required: true, trigger: 'blur', validator: validateTaskName }],
        data_file: [{ required: true, message: this.$t('task.dataFileError') }],
        task: [{ required: true, message: this.$t('task.numberError') }],
        model: [{ required: true, message: this.$t('task.numberError') }],
        dataset: [{ required: true, message: this.$t('task.numberError') }],
        batch_size: [{ type: 'number', message: this.$t('task.numberError') }],
        train_rate: [{ type: 'number', message: this.$t('task.numberError') }],
        eval_rate: [{ type: 'number', message: this.$t('task.numberError') }],
        learning_rate: [{ type: 'number', message: this.$t('task.numberError') }],
        max_epoch: [{ type: 'number', message: this.$t('task.numberError') }],
        gpu_id: [{ type: 'number', message: this.$t('task.numberError') }]
      }
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
  methods: {
    getList() {
      getFileList().then(res => {
        this.fileList = res.data.results
      })
    },
    getById(id) {
      getTaskById(id).then(res => {
        this.task = res.data
      })
    },
    submit() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) {
          this.loading = false
          return
        }
        // 判断是更新还是新增
        if (this.task.id) {
          console.log('更新')
          console.log(this.task.id)
          updateTaskById(this.task.id, this.task).then(res => {
            console.log(res)
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
      })
    },
    resetForm() {
      console.log(this.task.max_epoch)
      this.$refs['elForm'].clearValidate()
      this.$refs['upload'].clearFiles()
      this.$refs['elForm'].resetFields()
      this.task = {}
      console.log(this.task.max_epoch)
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
