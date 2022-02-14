<template>
  <div class="app-container" :data-intro="$t('addDataIntro.step01')" data-step="1">
    <div style="width: 99%; margin-left: 13px; height: 80%">
      <!-- 顶部查询表单 -->
      <div style="height: 80%" :data-intro="$t('addDataIntro.step02')" data-step="2">
        <el-form :inline="true" class="demo-form-inline">

          <el-form-item :label="$t('dataset.fileName')">
            <el-input v-model="queryParam.file_name" :placeholder="$t('dataset.pleaseInputFileName')" />
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
      </div>
      <div style="float: right">
        <div style="width: 100%; height: 100%" :data-intro="$t('addDataIntro.step03')" data-step="3">
          <a :href="BASE_API + '/business/file/download/'"><el-button type="primary" size="medium" icon="el-icon-download">{{ lable=$t('dataset.datasetDownload') }}</el-button></a>
          <el-button style="margin-left: 10px" :disabled="addDisable" type="primary" size="medium" icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true">
            {{ $t('dataset.fileUpload') }}
          </el-button>
        </div>
      </div>
      <div style="width: 100%; height: 60%;margin-top: 40px" :data-intro="$t('addDataIntro.step04')" data-step="4">
        <el-table
          v-loading="listLoading"
          :data="tableData"
          fit
          border
        >
          <el-table-column
            type="index"
            :index="indexMethod"
            :label="$t('common.order')"
            width="120"
          />
          <el-table-column
            prop="file_name"
            :label="$t('dataset.fileName')"
          />
          <el-table-column
            prop="file_size"
            :label="$t('dataset.fileSize')"
          />
          <!-- <el-table-column
            prop="file_path"
            :label="$t('dataset.filePath')"
          />
          <el-table-column
            prop="extract_path"
            :label="$t('dataset.extractPath')"
          /> -->
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
              <el-button-group>
                <el-popconfirm
                  :confirm-button-text="$t('common.confirm')"
                  :cancel-button-text="$t('common.cancel')"
                  confirm-button-type="danger"
                  cancel-button-type="info"
                  icon="el-icon-info"
                  icon-color="red"
                  :title="$t('common.deleteConfirm')"
                  @onConfirm="deleteFile(scope.row.id)"
                >
                  <el-link v-if="!deleteDisable" slot="reference" style="margin-left: 10px" :disabled="deleteDisable" icon="el-icon-delete">{{ $t('common.delete') }}</el-link>
                  <!-- <el-button slot="reference" :disabled="deleteDisable" type="danger" size="small" icon="el-icon-delete">
                    {{ $t('common.delete') }}
                  </el-button> -->
                </el-popconfirm>
                <div v-intro-if="scope.$index === 0" :data-intro="$t('addDataIntro.step05')" data-step="5">
                  <div v-intro-if="scope.$index === 0" :data-intro="$t('addDataIntro.step06')" data-step="6">
                    <el-link v-if="scope.row.dataset_status === 1" style="margin-left: 10px" icon="el-icon-view">
                      <router-link :to="'/dataset/show_dataset/'+scope.row.file_name">
                        {{ $t('common.view') }}
                      </router-link>
                    </el-link>
                    <el-link v-if="scope.row.dataset_status === 2" style="margin-left: 10px" icon="el-icon-view">
                      <router-link :to="'/dataset/show_dataset/'+scope.row.file_name">
                        {{ $t('common.view') }}
                      </router-link>
                    </el-link>
                    <el-link v-if="scope.row.dataset_status === 5" style="margin-left: 10px" icon="el-icon-view">
                      <router-link :to="'/dataset/show_dataset/'+scope.row.file_name">
                        {{ $t('common.view') }}
                      </router-link>
                    </el-link>
                    <el-link v-if="scope.row.dataset_status === -1" disabled style="margin-left: 10px; color: red">{{ $t('dataset.showFail') }}</el-link>
                    <el-link v-if="scope.row.dataset_status === 0" disabled style="margin-left: 10px" icon="el-icon-loading">{{ $t('dataset.processing') }}</el-link>
                    <el-link v-if="scope.row.dataset_status === 3" disabled style="margin-left: 10px; color: green">{{ $t('dataset.Remainshow') }}</el-link>
                    <el-link v-if="scope.row.dataset_status === 4" disabled style="margin-left: 10px">{{ $t('dataset.preprocessing') }}</el-link>
                  </div>
                  <div v-intro-if="scope.row.dataset_status == 2 || scope.row.dataset_status == 1 || scope.row.dataset_status == 3" :data-intro="$t('addDataIntro.step07')" data-step="7" style="margin-left: 10px">
                    <el-link v-if="scope.row.dataset_status == -1" disabled style="margin-right: 10px" />
                    <el-link v-if="scope.row.dataset_status == 0" disabled style="margin-right: 10px" />
                    <el-link v-if="scope.row.dataset_status == 4" disabled style="margin-right: 10px" />
                    <el-link v-if="scope.row.dataset_status == 5" disabled style="margin-right: 10px" />
                    <el-link v-if="scope.row.dataset_status == 1" style="margin-right: 10px" icon="el-icon-circle-plus-outline" @click="openSekectMap(scope.row.id)">{{ $t('dataset.choosemap') }}
                    </el-link>
                    <el-link v-if="scope.row.dataset_status == 2" style="margin-right: 10px" icon="el-icon-circle-plus-outline" @click="openSekectMap(scope.row.id)">{{ $t('dataset.choosemap') }}
                    </el-link>
                    <el-link v-if="scope.row.dataset_status == 3" style="margin-right: 10px" icon="el-icon-circle-plus-outline" @click="openSekectMap(scope.row.id)">{{ $t('dataset.choosemap') }}
                    </el-link>
                  </div>
                </div>
              </el-button-group>

            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
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
    <!-- 添加/编辑 对话框 -->
    <el-dialog :title="$t('dataset.fileUpload')" :visible.sync="dialogFormVisible">
      <el-upload
        ref="elupload"
        class="upload-demo"
        :action="BASE_API + '/business/file/'"
        name="dataset"
        multiple
        :on-success="handleFileUploadSuccess"
        :before-upload="handleBeforeUpload"
        accept="application/x-zip-compressed"
      >
        <el-button size="small" type="primary"> {{ $t('dataset.clickUpload') }}</el-button>
        <div slot="tip" class="el-upload__tip">{{ $t('dataset.uploadTips') }}</div>
      </el-upload>
    </el-dialog>
    <!--  -->
    <el-dialog :title="$t('common.getview')" :visible.sync="showFormVisible">
      <el-form ref="elForm1" :rules="rules" :model="dataset" label-width="auto" label-position="left">
        <el-form-item :label="$t('dataset.background')" prop="background">
          <el-select v-model="background" :placeholder="$t('common.pleasechoose')">
            <el-option
              v-for="item in backgroundParamList"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <el-button type="primary" icon="el-icon-view" @click="getBackground()">{{ $t('common.getview') }}</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { getFileList, deleteFileById, generate_background_byID } from '@/api/file'
import { checkPermission } from '@/utils/permission'

// 查询参数
const queryParam = {
  page: 1,
  size: 10,
  file_name: '',
  create_time: ''
}
export default {
  data() {
    return {
      BASE_API: process.env.VUE_APP_BASE_API,
      dataset: {
      },
      backgroundParamList: [
        { id: '1', label: this.$t('dataset.google') },
        { id: '2', label: this.$t('dataset.google_s') },
        { id: '3', label: this.$t('dataset.amap') },
        { id: '4', label: this.$t('dataset.amap_s') },
        { id: '5', label: this.$t('dataset.origin') },
        { id: '6', label: this.$t('dataset.traffic') },
        { id: '7', label: this.$t('dataset.transport') }],
      rules: {
        background: [{ required: false, message: this.$t('common.pleasechoose') }]
      },
      tableData: [],
      listLoading: true,
      background: '1',
      queryParam: queryParam,
      total: 0,
      defaultPage: 1,
      defaultSize: 10,
      dialogFormVisible: false,
      showFormVisible: false,
      filelist: [],
      // 按钮权限
      addDisable: true,
      deleteDisable: true,
      file: {}
    }
  },
  mounted() {
    // // 新手引导
    // this.$intro.start() // start the guide
    // this.$intro.showHints() // show hints
    this.$nextTick(() => {
      setTimeout(() => {
        if (localStorage.getItem('addDatasetnew') === null || localStorage.getItem('addDatasetnew') !== '1') {
          this.$intro.start()
          localStorage.setItem('addDatasetnew', 1)
        }
      }, 300)
    })
  },

  created() {
    this.getList(this.queryParam)
    this.checkButtonPermission()
  },
  methods: {
    checkPermission,
    checkButtonPermission() {
      this.addDisable = !checkPermission(['datasetUpload'])
      this.deleteDisable = !checkPermission(['datasetDelete'])
    },
    getList(queryParam) {
      this.listLoading = true
      getFileList(queryParam).then(res => {
        this.tableData = res.data.results
        this.total = res.data.count
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    openSekectMap(id) {
      this.file.id = id
      this.showFormVisible = true
    },
    getBackground() {
      generate_background_byID(this.file.id, this.background).then(res => {
        this.showFormVisible = false
        // 重新获取页面数据
        this.$message({
          message: this.$t('dataset.background_ing'),
          type: 'success'
        })
        this.resetData()
      })
    },
    getQueryList() {
      this.queryParam.page = this.defaultPage
      this.queryParam.size = this.defaultSize
      this.getList(this.queryParam)
    },
    deleteFile(id) {
      this.listLoading = true
      deleteFileById(id).then(res => {
        // 重新获取页面数据
        this.$message({
          message: this.$t('common.deleteSucceeded'),
          type: 'success'
        })
        this.resetData()
      }).catch(() => {
        this.listLoading = false
        this.$message.error(this.$t('common.deletionFailed'))
      })
    },
    // 文件上传相关
    // 上传成功，刷新页面
    handleFileUploadSuccess(response, file, filelist) {
      if (response.code === 200) {
        this.$message.success(this.$t('dataset.uploadSuccess'))
      } else if (response.code === 400) {
        file.status = 'error'
        this.$message.error(this.$t('dataset.atomicError'))
      }
      this.getList(this.queryParam)
    },
    // 上传之前，检查文件类型
    handleBeforeUpload(file) {
      var isZip = file.type === 'application/x-zip-compressed'
      if (!isZip) {
        this.$message.error(this.$t('dataset.uploadError'))
      }
      return isZip
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
