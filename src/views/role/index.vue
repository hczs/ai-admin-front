<template>
  <div class="app-container">
    <!-- 顶部查询表单 -->
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item :label="$t('role.name')">
        <el-input v-model="queryParam.name" />
      </el-form-item>

      <el-form-item :label="$t('role.description')">
        <el-input v-model="queryParam.description" />
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

    <el-button style="float: right" :disabled="addDisable" type="primary" size="medium" icon="el-icon-circle-plus-outline" @click="add()">
      {{ $t('common.add') }}
    </el-button>
    <!-- 数据表格 -->
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
        prop="name"
        :label="$t('role.name')"
      />
      <el-table-column
        prop="description"
        :label="$t('role.description')"
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
          <el-button-group>
            <el-button :disabled="editDisable" type="primary" size="small" icon="el-icon-edit" @click="edit(scope.row.id)">
              {{ $t('common.edit') }}
            </el-button>
            <el-popconfirm
              :confirm-button-text="$t('common.confirm')"
              :cancel-button-text="$t('common.cancel')"
              confirm-button-type="danger"
              cancel-button-type="info"
              icon="el-icon-info"
              icon-color="red"
              :title="$t('common.deleteConfirm')"
              @onConfirm="deleteRole(scope.row.id)"
            >
              <el-button slot="reference" :disabled="deleteDisable" type="danger" size="small" icon="el-icon-delete">
                {{ $t('common.delete') }}
              </el-button>
            </el-popconfirm>
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
    <!-- 添加/编辑 对话框 -->
    <el-dialog :title="dialogType === 'edit' ? $t('role.edit') : $t('role.add')" :visible.sync="dialogFormVisible">
      <el-form :model="role">
        <el-form-item :label="$t('role.name')" :label-width="formLabelWidth">
          <el-input v-model="role.name" maxlength="16" show-word-limit autocomplete="off" />
        </el-form-item>
        <el-form-item :label="$t('role.description')" :label-width="formLabelWidth">
          <el-input v-model="role.description" autocomplete="off" />
        </el-form-item>
        <el-form-item :label="$t('role.permissions')" :label-width="formLabelWidth">
          <el-tree
            ref="tree"
            :data="permissionTree"
            show-checkbox
            check-strictly
            node-key="id"
            :props="defaultProps"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="submit()">{{ $t('common.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getRoleList, getRoleById, addRole, deleteRoleById, updateRoleById } from '@/api/role'
import { getPermissionTree } from '@/api/permission'
import { checkPermission } from '@/utils/permission'

// 查询参数
const defaultQueryParam = {
  page: 1,
  size: 10
}
// 角色对象
const defaultRole = {
  id: '',
  name: '',
  description: '',
  permissions: []
}
export default {
  data() {
    return {
      role: defaultRole,
      listLoading: true,
      tableData: [],
      queryParam: defaultQueryParam,
      dialogFormVisible: false,
      total: 0,
      defaultPage: 1,
      defaultSize: 10,
      dialogType: 'add',
      formLabelWidth: '150px',
      permissionTree: {},
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 按钮权限
      addDisable: true,
      editDisable: true,
      deleteDisable: true
    }
  },

  created() {
    this.getList(this.queryParam)
    this.getPermissionTree()
    this.checkButtonPermission()
  },

  methods: {
    checkPermission,
    checkButtonPermission() {
      this.addDisable = !checkPermission(['roleAdd'])
      this.editDisable = !checkPermission(['roleEdit'])
      this.deleteDisable = !checkPermission(['roleDelete'])
    },
    // 初始化角色列表数据
    getList(queryParam) {
      this.listLoading = true
      getRoleList(queryParam).then(res => {
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
      this.getList(this.queryParam)
    },
    // 初始化树节点数据
    getPermissionTree() {
      getPermissionTree().then(res => {
        this.permissionTree = res.data
      })
    },
    // 编辑/更新 提交
    submit() {
      this.dialogFormVisible = false
      this.role.permissions = this.$refs.tree.getCheckedKeys()
      if (this.dialogType === 'edit') {
        this.listLoading = true
        updateRoleById(this.role.id, this.role).then(res => {
          this.$message({
            message: this.$t('common.modifiedSuccessfully'),
            type: 'success'
          })
          // 重新获取页面数据
          this.getList(this.queryParam)
        }).catch(() => {
          this.listLoading = false
          this.$message.error(this.$t('common.modificationFailed'))
        })
      }
      if (this.dialogType === 'add') {
        this.listLoading = true
        addRole(this.role).then(res => {
          // 重新获取页面数据
          this.$message({
            message: this.$t('common.addedSuccessfully'),
            type: 'success'
          })
          this.getList(this.queryParam)
        }).catch(() => {
          this.listLoading = false
          this.$message.error(this.$t('common.addFailed'))
        })
      }
    },
    // 新增按钮点击弹窗
    add() {
      this.dialogFormVisible = true
      this.role = defaultRole
      // 编辑过的才需要清空树节点
      if (this.dialogType === 'edit') {
        this.$refs.tree.setCheckedKeys(this.role.permissions)
        this.dialogType = 'add'
      }
    },
    // 编辑按钮点击弹窗
    edit(id) {
      getRoleById(id).then(res => {
        this.role = res.data
        this.$refs.tree.setCheckedKeys(this.role.permissions)
      })
      this.dialogType = 'edit'
      this.dialogFormVisible = true
    },
    // 删除数据
    deleteRole(id) {
      this.listLoading = true
      deleteRoleById(id).then(res => {
        // 重新获取页面数据
        this.$message({
          message: this.$t('common.deleteSucceeded'),
          type: 'success'
        })
        this.getList(this.queryParam)
      }).catch(() => {
        this.listLoading = false
        this.$message.error(this.$t('common.deletionFailed'))
      })
    },
    indexMethod(index) {
      return (this.queryParam.page - 1) * this.queryParam.size + index + 1
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
      this.defaultPage = page
      this.getList(this.queryParam)
    }
  }
}
</script>
