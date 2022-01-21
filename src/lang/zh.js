export default {
  route: {
    dashboard: '首页',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    rolePermission: '角色权限',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragSelect: '拖拽 Select',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单1',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-2-1': '菜单 1-2-1',
    'menu1-2-2': '菜单 1-2-2',
    'menu1-3': '菜单 1-3',
    menu2: '菜单 2',
    Table: 'Table',
    dynamicTable: '动态 Table',
    dragTable: '拖拽 Table',
    inlineEditTable: 'Table 内编辑',
    complexTable: '综合 Table',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: '导出 Excel',
    selectExcel: '导出 已选择项',
    mergeHeader: '导出 多级表头',
    uploadExcel: '上传 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心',
    // 新增
    accountManage: '账号管理',
    roleManage: '角色管理',
    permissionManage: '权限查看',
    taskManage: '任务管理',
    resourceManage: '资源管理',
    templateManage: '模板管理',
    updatePassword: '修改密码',
    datasetManage: '数据集管理',
    taskList: '任务列表',
    tasksAdd: '新建任务',
    tasksEdit: '编辑任务',
    datasetView: '数据集展示'
  },
  navbar: {
    dashboard: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小',
    updatePassword: '修改密码'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    accountNumber: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！',
    // 新增，登录消息提示
    accountNumberError: '请输入账号',
    passwordError: '密码不能少于6位',
    repeatPasswordError: '两次密码输入不一致',
    permissionIsNull: '该账户没有任何权限',
    verificationFailed: '验证失败，请重新登录',
    verificationSuccess: '登录成功',
    // 修改密码相关
    oldPassword: '原密码',
    newPassword: '新密码',
    repeatPassword: '再次输入新密码',
    updatePasswordSuccess: '密码修改成功,请重新登录'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消',
    // 新增
    order: '序号',
    name: '权限名称',
    id: '权限ID',
    type: '权限类型',
    code: '权限码',
    parent: '上级权限',
    createTime: '创建时间',
    updateTime: '更新时间',
    operation: '操作',
    edit: '编辑权限',
    add: '添加权限',
    ChoiceType: '请选择权限类型',
    menu: '菜单',
    interface: '接口'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  },
  // 新增
  test: {
    name: '用户名',
    permissions: '权限',
    switchLanguageSuccess: '切换语言成功',
    roles: '角色'
  },
  // 公共使用，例如新增按钮，删除等等
  common: {
    yes: '是',
    no: '否',
    edit: '编辑',
    view: '展示',
    add: '新增',
    delete: '删除',
    createTime: '创建时间',
    updateTime: '更新时间',
    order: '序号',
    operation: '操作',
    search: '查询',
    clear: '清空',
    pleaseSelectBegin: '请选择开始时间',
    pleaseSelectEnd: '请选择结束时间',
    confirm: '确认',
    cancel: '取消',
    deleteConfirm: '确定删除此条记录？',
    addedSuccessfully: '添加成功',
    addFailed: '添加失败',
    modifiedSuccessfully: '修改成功',
    modificationFailed: '修改失败',
    deleteSucceeded: '删除成功',
    deletionFailed: '删除失败',
    submit: '提交',
    pleasechoose: '请选择',
    getview: '展示数据集'
  },
  // 角色相关
  role: {
    name: '角色名称',
    description: '角色描述',
    permissions: '角色权限',
    edit: '编辑角色',
    add: '添加角色',
    roleNameError: '请填写角色名称',
    roleNameExistsError: '角色名称已存在',
    descriptionError: '请填写角色描述',
    permissionTreeError: '请为角色分配权限'
  },
  // 账号相关
  account: {
    accountNumber: '账号',
    edit: '编辑账号',
    add: '添加账号',
    roles: '所属角色',
    selectRole: '请选择账户角色',
    password: '密码',
    pleaseInputAccount: '请输入账号',
    noRole: '未分配角色',
    accountNumberError: '请输入账号',
    accountNumberExistsError: '账号已存在',
    addedSuccessfully: '该账号初始密码为：',
    resetPassword: '重置密码',
    resetPasswordSuccessfully: '密码重置成功！',
    resetPasswordFailed: '密码重置失败，未知错误'
  },
  // 数据集相关
  dataset: {
    datasetDownload: '样例数据下载',
    processing: '数据集处理中',
    showFail: '该数据集无法展示',
    Remainshow: '该数据集尚未展示',
    fileName: '文件名称',
    fileSize: '文件大小',
    filePath: '存储路径',
    extractPath: '解压路径',
    fileUpload: '文件上传',
    pleaseInputFileName: '请输入文件名称',
    clickUpload: '点击这里上传文件',
    uploadTips: '注意：只能上传ZIP文件，数据包应包含数据原子文件，包括：xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、config.json；对于不同的交通预测任务，可能用到不同的原子文件，同一个数据集不一定包含全部几种原子文件。',
    uploadSuccess: '文件上传成功！',
    background: '选择可视化底图',
    background_ing: '数据集可视化中',
    uploadError: '请上传ZIP格式的数据包！',
    atomicError: '请检查数据包中的文件是否只包含：xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、config.json',
    google: '谷歌地图',
    origin: '原始街道地图',
    amap: '高德地图'
  },
  // 任务
  task: {
    // 任务执行参数
    task: '要执行的任务名',
    model: '要执行的模型名',
    dataset: '要执行的数据集',
    config_file: '自定义的配置文件名',
    saved_model: '是否保存训练好的模型',
    train: '如果模型已经预训练过了，是否要重新训练模型',
    batch_size: '训练集和验证集的批次大小',
    train_rate: '训练集在整个数据集中所占的比例',
    eval_rate: '验证集在整个数据集中所占的比例',
    learning_rate: '学习率',
    max_epoch: '最大的训练轮数',
    gpu: '是否使用GPU',
    gpu_id: '使用的GPU的ID',
    // 任务参数
    traffic_state_pred: '交通状态预测',
    traj_loc_pred: '轨迹下一跳预测',
    road_representation: '路网表征学习',
    eta: '到达时间预测',
    map_matching: '路网匹配',
    taskName: '任务名称',
    taskDescription: '任务描述',
    dataFile: '数据集文件',
    uploadTips: '请上传JSON文件',
    downloadExample: '下载配置文件样例',
    uploadError: '请上传JSON格式的文件！',
    taskCreateSuccess: '任务创建成功！',
    taskNameError: '请输入任务名',
    taskNameExistsError: '任务名重复',
    taskCreateError: '任务创建失败',
    OnExceedError: '最多上传一个文件，请先清除之前的文件再进行上传',
    status: '任务状态',
    creator: '任务创建者',
    numberError: '请输入数字类型的值',
    noStart: '未开始',
    execute: '执行',
    executing: '进行中',
    completed: '已完成',
    executeError: '执行错误',
    taskUpdateSuccess: '任务更新成功！',
    taskError: '请选择要执行的任务名',
    modelError: '请选择要执行的模型名',
    datasetError: '请选择数据集文件',
    executeTime: '执行时间',
    executeEndTime: '执行结束时间',
    selectExecuteTime: '请选择任务执行时间',
    executeNow: '不选时间，立即执行',
    executeAt: '在选定时间执行',
    executeTimeError: '执行时间不能为空',
    executeTimeEarlyError: '执行时间不能早于当前时间',
    taskParamTip: '注意：任务名、模型名和数据集有严格的对应关系',
    taskMoreParamTip: '如果需要配置更多参数，可以上传配置文件',
    clickViewCorresponding: '任务名、模型名和数据集有严格的对应关系（点击查看）',
    catLog: '查看运行日志',
    logview: '运行日志',
    eva_view: '评价指标查看',
    catEvaluate: '查看评价指标',
    downloadLog: '下载日志文件',
    reExecute: '重新执行',
    downEvaluate: '下载评价指标文件',
    MAE: '平均绝对误差',
    MAPE: '均绝对比例误差',
    MSE: '均方差',
    RMSE: '均方根误差',
    masked_MAE: '平均绝对误差(掩码)',
    masked_MAPE: '均绝对比例误差(掩码)',
    masked_MSE: '均方差(掩码)',
    masked_RMSE: '均方根误差(掩码)',
    R2: '可决系数',
    EVAR: 'EVAR参数',
    Precision: '准确率',
    Recall: '召回率',
    F1Score: 'F1值',
    MAP: '平均准确率',
    PCC: '皮尔逊相关系数',
    RMF: 'RMF值',
    AN: 'AN值',
    AL: 'AL值',
    maxEpochTip: '最大训练轮数设置的越大，耗费时间越长',
    clickUpload: '点击上传JSON文件'
  }
}
