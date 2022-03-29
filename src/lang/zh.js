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
    taskList: '实验列表',
    tasksAdd: '新建实验',
    tasksEdit: '编辑任务',
    datasetView: '数据集展示',
    evaluate: '模型评价指标对比',
    taskResult: '实验结果展示'
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
    title: 'LibCity实验管理系统',
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
  // 注册相关
  register: {
    repeatPassword: '请再次输入密码',
    inputMail: '请输入邮箱',
    inputCode: '请输入验证码',
    register: '注册',
    getCode: '获取验证码',
    getCodeAgain: 's后重新获取',
    pleaseInputMail: '请填写邮箱',
    pleaseInputCode: '请填写验证码',
    wrongMailFormat: '邮箱格式不正确',
    toLogin: '已有账号？去登录',
    toRegister: '没有账号？点击注册',
    title: '用户注册',
    sendCodeError: '验证码发送失败',
    registerError: '注册失败',
    registerSuccess: '注册成功',
    sendCodeSuccess: '验证码发送成功，请注意查收',
    mailRepeat: '此邮箱已注册过本系统'
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
    getview: '展示数据集',
    selectLanguage: '选择语言'
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
    permissionTreeError: '请为角色分配权限',
    protectedRole: '系统保留角色，不可删除！'
  },
  // 账号相关
  account: {
    mail: '邮箱',
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
    resetPasswordFailed: '密码重置失败，未知错误',
    protectedAccount: '系统保留账号，不可删除！'
  },
  // 数据集相关
  dataset: {
    creator: '上传者',
    visibility: '状态',
    public: '公开',
    private: '私有',
    all: '所有',
    isPublic: '是否公开',
    selectFile: '选取文件',
    submit: '提交',
    datasetDownload: '样例数据下载',
    preprocessing: '数据集可视化检验中',
    processing: '数据集处理中',
    showFail: '该数据集无法展示',
    Remainshow: '该数据集尚未展示',
    fileName: '文件名称',
    fileSize: '文件大小',
    filePath: '存储路径',
    extractPath: '解压路径',
    fileUpload: '文件上传',
    pleaseInputFileName: '请输入文件名称',
    clickUpload: '将文件拖到此处，或点击上传',
    uploadTips: '注意：只能上传ZIP文件，数据包应包含数据原子文件，包括：xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、xxx.gridod、config.json；对于不同的交通预测任务，可能用到不同的原子文件，同一个数据集不一定包含全部几种原子文件。',
    uploadSuccess: '文件上传成功！',
    background: '选择可视化底图',
    background_ing: '数据集可视化中',
    uploadError: '请上传ZIP格式的数据包！',
    atomicError: '请检查数据包中的文件是否只包含：xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、xxx.gridod、config.json',
    google: '谷歌地图',
    google_s: '谷歌卫星地图',
    origin: '原始街道地图',
    amap: '高德地图',
    amap_s: '高德卫星地图',
    traffic: '交通地图',
    transport: '道路路线-黑白',
    choosemap: '选择可视化底图',
    gisSuccessfully: '可视化完成！',
    gisViewSuccessfully: '可视化完成！请点击数据集管理中的展示按钮查看数据集！',
    trajTip: '由于轨迹数据过多，这里仅展示部分轨迹数据信息',
    deletionFailed: '有实验正在使用此数据集，请删除实验后再删除数据集',
    canView: '可视化检验完成！',
    canViewSuccessfully: '可视化检验完成，可以选择地图对数据集进行可视化了',
    atomicExplain: '查看数据格式说明',
    atomicExplainUrl: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/atomic_files.html'
  },
  // 任务
  task: {
    interruptExp: '中断实验',
    interruptConfirm: '确定中断此实验？',
    tips: '提示',
    interruptOk: '实验正在中断中...请耐心等待 20 秒左右',
    interruptCancel: '已取消中断',
    // 评价指标mode提示信息
    stateModeTip: '本次评价指标评估模式为：',
    // 任务执行参数
    task: '所属任务',
    expId: '实验ID',
    model: '模型',
    dataset: '数据集',
    config_file: '自定义的配置文件名',
    config_file1: '自定义的配置文件',
    saved_model: '是否保存训练好的模型',
    train: '是否使用以往实验保存的模型',
    batch_size: '批次大小',
    train_rate: '训练集所占比例',
    eval_rate: '验证集所占比例',
    learning_rate: '学习率',
    max_epoch: '最大训练轮数',
    gpu: '是否使用GPU',
    gpu_id: 'GPU编号',
    // 任务参数
    traffic_state_pred: '交通状态预测',
    traj_loc_pred: '轨迹下一跳预测',
    road_representation: '路网表征学习',
    eta: '到达时间预测',
    map_matching: '路网匹配',
    taskName: '实验名称',
    taskDescription: '实验描述',
    dataFile: '数据集文件',
    uploadTips: '请上传JSON文件',
    downloadExample: '下载配置文件样例',
    uploadError: '请上传JSON格式的文件！',
    taskCreateSuccess: '任务创建成功！',
    taskNameError: '请输入实验名称',
    taskNameExistsError: '实验名称重复',
    taskCreateError: '任务创建失败',
    OnExceedError: '最多上传一个文件，请先清除之前的文件再进行上传',
    status: '实验状态',
    creator: '创建者',
    numberError: '请输入数字类型的值',
    maxEpochNumberError: '请输入整数',
    maxEpochError: '请输入大于0的数',
    floatError: '请输入小数',
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
    EVAR: '可释方差值',
    Precision: '准确率',
    Recall: '召回率',
    F1Score: 'F1分数',
    MAP: '平均准确率',
    PCC: '皮尔逊相关系数',
    RMF: '道路错误匹配指数',
    AN: '正确率（匹配数）',
    AL: '正确率（匹配长度）',
    MRR: '平均倒数排名',
    NDCG: '归一化折损累计增益',
    maxEpochTip: '最大训练轮数设置的越大，耗费时间越长',
    clickUpload: '点击上传JSON文件',
    task_type: '实验类型',
    modelEvaluateContrast: '模型对比',
    selectTaskTip: '请选择实验进行对比',
    selectCompleteTip: '请选择已完成的实验',
    selectSameTask: '请选择相同类型的实验',
    selectDifferentModelTask: '请选择使用不同模型的实验',
    selectRoadRepresentation: '该实验类型无评价指标',
    clickDownload: '点击下载',
    clickCatConfig: '在线查看',
    configview: '配置文件信息',
    showResult: '展示实验结果',
    selectSameDataset: '请选择使用相同数据集的实验',
    otherParamTip: '以下是非必填的参数',
    taskExecuteSuccessfully: '实验执行完毕',
    taskExecuteError: '实验执行错误',
    downloadModel: '下载训练模型'
  },

  // 新手引导 - 通用
  intro: {
    next: '下一步',
    prev: '上一步',
    done: '完成',
    showIntro: '点击这里可以重新查看向导内容',
    viewIntro: '查看向导',
    noIntro: '本页暂无新手引导内容'
  },

  // 新建实验引导
  addTaskIntro: {
    step01: '这里是新建实验界面，在这您可以创建新的训练任务',
    step02: '实验名称是必填项，请填写一个易于理解的实验名称',
    step03: '看这里，任务名、模型名和数据集有严格的对应关系，请按照上方链接里的表格对应关系来进行选择',
    step04: '就是点击这个链接',
    step05: '上面表单只提供了常用的任务参数设置，您可以根据需要设置更多的任务参数进行训练，需要编写config.json文件上传',
    step06: '点击确认，任务就创建完成了！'
  },

  // 数据集引导
  addDataIntro: {
    step01: '这里是数据集管理界面，在这您可以上传并展示数据集',
    step02: '根据条件查询过往的数据集',
    step03: '在这里上传您的数据集，您也可以选择下载查看样例数据集',
    step04: '您所上传的数据集会出现在这里，在系统检测您的数据集可以进行展示后，可通过右侧的按钮操作数据集',
    step05: '您可以在这里对数据集进行展示，共包含数据集可视化检验中、该数据集尚未展示、数据集处理中、展示、该数据集无法展示几个状态',
    step07: '您可以在这里选择可视化的地图底图',
    step06: '若您的数据集无法转化为地图，我们会努力将其内容以图表方式展示；若您的数据无法展示，操作栏中将给出红字提示'
  },

  // 实验列表引导
  taskIndexIntroL: {
    step01: '这里是实验列表页面，在此页面您可以执行任务、查看任务执行日志、查看任务执行结果等操作',
    step02: '可以在这里设置条件来对已有任务进行查询',
    step03: '您可以勾选任务前面的多选框，对已选择的任务进行模型对比',
    step04: '在操作列中：您可以编辑、删除和执行任务，并且对于已经执行完成的任务，您可以查看模型的评价指标；对于已经执行中的任务，您可以查看任务执行日志'
  },

  // 账号管理引导
  accountManageIntro: {
    step01: '这里是账号管理页面，您可以在这里管理平台所有的账号',
    step02: '您可以在这里设置条件筛选账号',
    step03: '点击这里，可以添加一个账号，新增账号系统会设置默认密码，请及时修改',
    step04: '在操作列，您可以编辑、删除账号，也可以进行重置密码操作'
  },

  // 权限管理引导
  roleManageIntro: {
    step01: '这里是角色管理页面，您可以在这里维护角色相关信息',
    step02: '您可以在这里设置条件筛选角色',
    step03: '点击这里，您可以新添加一个角色，并为其分配权限',
    step04: '在操作列，您可以编辑和删除角色'
  },

  // 首页教程相关
  dashboard: {
    title: '平台使用指南', // 大标题
    introduction: '简介',
    // 简介内容
    // introContent: '<span>本平台为LibCity库提供了可视化的操作界面，您可以在平台上传数据集选定模型创建并执行实验，可以查看实验执行日志和模型评价指标相关信息；同时，平台也提供了完善的权限管理功能。</span>',
    introContent: '<span>本平台为LibCity库提供了可视化的操作界面，您可以在平台上传数据集选定模型创建并执行实验，可以查看实验执行日志和模型评价指标相关信息，同时平台也提供了完善的权限管理功能。LibCity 由北航智慧城市兴趣小组<a target="blank" href="https://www.bigscity.com/" style="color: blue">BIGSCity</a>开发和维护，它是一个统一、全面、可扩展的代码库，为交通预测领域的研究人员提供了一个可靠的实验工具和便捷的开发框架。 我们的库基于 PyTorch 实现，并将与交通预测相关的所有必要步骤或组件包含到系统的流水线中，使研究人员能够进行全面的对比实验。 我们的库将有助于交通预测领域的标准化和可复现性。详细信息请访问我们的<a target="blank" href="https://libcity.ai/" style="color: blue">主页</a>以及<a target="blank" href="https://github.com/LibCity" style="color: blue">代码仓库</a>。</span>',
    feature: '特性',
    featureContent: [
      '<span>数据集可视化查看：可以对用户上传的数据集进行解析并进行GIS可视化，可自由选择地图底图，平台提供谷歌地图、谷歌卫星地图、高德地图、高德卫星地图、原始街道地图等多种底图</span>',
      '<span>定点执行实验：可以指定实验的执行时间，在选定的时刻系统会自动执行实验</span>',
      '<span>模型评价指标可视化对比功能：可以做到同类实验下的多模型多指标对比</span>',
      '<span>国际化：平台支持中英文两种语言</span>',
      '<span>权限：账号权限可控制在按钮级别</span>'
    ],
    steps: '使用步骤',
    step01: '步骤一：上传数据集',
    // TODO
    step01Content: "<span><p><span>平台支持的数据集文件：可以通过</span><a target='_blank' href='https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ' style='color: blue'><span>百度网盘</span></a><span>（提取码：1231）或</span><a target='_blank' href='https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing' style='color: blue'><span>Google Drive</span></a><span>下载数据集文件。</span></p>您可以点击左侧数据集管理菜单，进入数据集管理页面，点击文件上传，选定数据集文件点击确定即可上传数据集。</span>",
    step02: '步骤二：创建实验',
    step02Content: '<span>您可以点击左侧导航中的新建实验，填写相关参数，点击确定完成实验创建工作。</span>',
    step03: '步骤三：执行实验',
    step03Content: '<span>点击左侧的实验列表，在操作列中找到执行按钮，点击执行，可以选择执行时间执行实验。</span>',
    step04: '步骤四：查看运行日志',
    step04Content: '<span>点击左侧的实验列表，在操作列中找到查看运行日志按钮，可在线查看实验运行日志信息。</span>',
    step05: '步骤五：查看评价指标',
    step05Content: '<span>实验执行完毕后，在操作列中找到查看评价指标按钮，可在线查看评价指标信息。</span>',
    // 脚注
    realtedLinks: '相关链接',
    homepage: 'https://libcity.ai/',
    homepageWord: '主页',
    document: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/#',
    documentWord: '文档',
    paperLibrary: '论文仓库',
    aboutUs: '关于我们'
  }
}
