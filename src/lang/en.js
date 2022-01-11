export default {
  route: {
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile',
    // 新增
    accountManage: 'Account Management',
    roleManage: 'Role Management',
    permissionManage: 'Permission View',
    taskManage: 'Task Management',
    resourceManage: 'Resource Management',
    templateManage: 'Template Management',
    updatePassword: 'Change Password',
    datasetManage: 'Dataset Management',
    taskList: 'Task List',
    tasksAdd: 'New Task',
    tasksEdit: 'Edit Task',
    datasetView: 'Show Dataset'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size',
    updatePassword: 'Change Password'
  },
  login: {
    title: 'System Login',
    logIn: 'Login',
    accountNumber: 'Account',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !',
    // 新增，登录消息提示
    accountNumberError: 'Please enter account',
    passwordError: 'The password can not be less than 6 digits',
    repeatPasswordError: 'The two passwords are inconsistent',
    permissionIsNull: 'The account does not have any permissions',
    verificationFailed: 'Verification failed, please Login again',
    verificationSuccess: 'Login succeeded',
    // 修改密码相关
    oldPassword: 'Old password',
    newPassword: 'New password',
    repeatPassword: 'Enter the new password again',
    updatePasswordSuccess: 'Password changed successfully, please log in again'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    // 新增
    order: 'Serial Number',
    name: 'Permission Name',
    id: 'Permission ID',
    type: 'Permission Type',
    code: 'Permission Code',
    parent: 'Superior Authority',
    createTime: 'Creation Time',
    updateTime: 'Update Time',
    operation: 'Operation',
    edit: 'Edit Permissions',
    add: 'Add Permissions',
    ChoiceType: 'Please select permission type',
    menu: 'menu',
    interface: 'interface'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  },
  // 新增
  test: {
    name: 'User Name',
    permissions: 'Permissions',
    switchLanguageSuccess: 'Switch Language Success',
    roles: 'Roles'
  },
  // 公共使用，例如新增按钮，删除等等
  common: {
    yes: 'yes',
    no: 'no',
    edit: 'Edit',
    view: 'Show dataset',
    add: 'Add',
    delete: 'Delete',
    createTime: 'Creation Time',
    updateTime: 'Update Time',
    order: 'Serial Number',
    operation: 'Operation',
    search: 'Search',
    clear: 'Clear',
    pleaseSelectBegin: 'Please select a start time',
    pleaseSelectEnd: 'Please select an end time',
    confirm: 'Confirm',
    cancel: 'Cancel',
    deleteConfirm: 'Are you sure to delete this record?',
    // 通用操作提示
    addedSuccessfully: 'Added successfully',
    addFailed: 'Add failed',
    modifiedSuccessfully: 'Modified successfully',
    modificationFailed: 'Modification failed',
    deleteSucceeded: 'Delete succeeded',
    deletionFailed: 'Deletion failed',
    submit: 'Submit'
  },
  // 角色相关
  role: {
    name: 'Role Name',
    description: 'Role Description',
    permissions: 'Role Permissions',
    edit: 'Edit Role',
    add: 'Add Role'
  },
  // 账号相关
  account: {
    accountNumber: 'Account',
    edit: 'Edit Account',
    add: 'Add Account',
    roles: 'Roles',
    selectRole: 'Please select account role',
    password: 'Password',
    pleaseInputAccount: 'Please enter an account',
    noRole: 'Unassigned role'
  },
  // 数据集相关
  dataset: {
    datasetDownload: ' Download Sample',
    fileName: 'File name',
    fileSize: 'File size',
    filePath: 'Storage path',
    processing: 'Processing',
    showFail: 'No View can be shown',
    extractPath: 'Decompression path',
    fileUpload: 'File upload',
    pleaseInputFileName: 'Please enter a file name',
    clickUpload: 'Click here to upload the file',
    uploadTips: 'Note: only zip files can be uploaded, The data package shall contain data atomic files, including: xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、config.json; For different traffic prediction tasks, different atomic files may be used, and a dataset may not contain all kinds of atomic files.',
    uploadSuccess: 'File upload succeeded!',
    uploadError: 'Please upload the data package in ZIP format!',
    atomicError: 'Please check whether the files in the package contain only: xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、config.json'
  },
  // 任务
  task: {
    // 任务执行参数
    task: 'task',
    model: 'model',
    dataset: 'dataset',
    config_file: 'config_file',
    saved_model: 'saved_model',
    train: 'train',
    batch_size: 'batch_size',
    train_rate: 'train_rate',
    eval_rate: 'eval_rate',
    learning_rate: 'learning_rate',
    max_epoch: 'max_epoch',
    gpu: 'gpu',
    gpu_id: 'gpu_id',
    // 任务参数
    traffic_state_pred: 'Traffic State Prediction',
    traj_loc_pred: 'Trajectory Next-Location Prediction',
    road_representation: 'Road Network Representation Learning',
    eta: 'Estimated Time of Arrival',
    map_matching: 'Map Matching',
    taskName: 'Task Name',
    taskDescription: 'Task Description',
    dataFile: 'Dataset File',
    uploadTips: 'Please upload JSON file',
    downloadExample: 'download sample configuration',
    uploadError: 'Please upload the data package in JSON format!',
    taskCreateSuccess: 'Task created successfully!',
    taskNameError: 'Please enter task name',
    taskNameExistsError: 'Duplicate task name',
    taskCreateError: 'Task creation failed',
    OnExceedError: 'At most one file can be uploaded. Please clear the previous file before uploading',
    status: 'Task Status',
    creator: 'creator',
    numberError: 'Please enter a value of numeric type',
    noStart: 'Not started',
    execute: 'Execute',
    executing: 'Executing',
    completed: 'Completed',
    executeError: 'Execution error',
    taskUpdateSuccess: 'Task updated successfully!',
    taskError: 'Please select a task name to execute',
    modelError: 'Please select the model name to execute',
    datasetError: 'Please select a dataset file',
    executeTime: 'Execution time',
    executeEndTime: 'Execution end time',
    selectExecuteTime: 'Please select task execution time',
    executeNow: 'No time selected, execute now',
    executeAt: 'Execute at selected time',
    executeTimeError: 'Execution time cannot be empty',
    executeTimeEarlyError: 'The execution time cannot be earlier than the current time',
    taskParamTip: 'Note: task name, model name and dataset have strict correspondence',
    taskMoreParamTip: 'If you need to configure more parameters, you can upload the configuration file',
    clickViewCorresponding: 'Click to view the correspondence between task name, model name and dataset',
    catLog: 'View run log',
    logview: 'Task Log',
    eva_view: 'Evaluation Result',
    catEvaluate: 'View evaluation indicators',
    downloadLog: 'Download log file',
    reExecute: 'Re execute',
    downEvaluate: 'Download evaluation index file',
    MAE: 'MAE',
    MAPE: 'MAPE',
    MSE: 'MSE',
    RMSE: 'RMSE',
    masked_MAE: 'masked_MAE',
    masked_MAPE: 'masked_MAPE',
    masked_MSE: 'masked_MSE',
    masked_RMSE: 'masked_RMSE',
    R2: 'R2',
    EVAR: 'EVAR',
    Precision: 'Precision',
    Recall: 'Recall',
    F1Score: 'F1Score',
    MAP: 'MAP',
    PCC: 'PCC',
    RMF: 'RMF',
    AN: 'AN',
    AL: 'AL'
  }

}
