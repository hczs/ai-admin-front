export default {
  route: {
    bindMail: 'Bind E-Mail',
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
    taskList: 'Experiment list',
    tasksAdd: 'New experiment',
    tasksEdit: 'Edit Task',
    datasetView: 'Show Dataset',
    evaluate: 'Comparison of model evaluation indexes',
    taskResult: 'Show the experimental results'
  },
  navbar: {
    bindMail: 'Bind E-Mail',
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size',
    updatePassword: 'Change Password'
  },
  login: {
    title: 'LibCity Experimental Management System',
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
    verificationFailed: 'Account or password error, please login again',
    verificationSuccess: 'Login succeeded',
    // 修改密码相关
    oldPassword: 'Old password',
    newPassword: 'New password',
    repeatPassword: 'Enter the new password again',
    updatePasswordSuccess: 'Password changed successfully, please log in again'
  },
  // 注册相关
  register: {
    repeatPassword: 'Please enter the password again',
    inputMail: 'please input your email',
    inputCode: 'please enter verification code',
    register: 'register',
    getCode: 'Get Captcha',
    getCodeAgain: 'Reacquire after s',
    pleaseInputMail: 'please enter your email',
    pleaseInputCode: 'Please fill in the verification code',
    wrongMailFormat: 'E-mail format is incorrect',
    toLogin: 'Already have an account? go to login',
    toRegister: 'No account? Click to register',
    title: 'User registration',
    sendCodeError: 'Failed to send verification code',
    registerError: 'Registration failed, please check whether the verification code and email address are correct!',
    registerSuccess: 'registration success',
    sendCodeSuccess: 'The verification code has been sent successfully, please pay attention to check',
    mailRepeat: 'This email has been registered with this system'
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
    submit: 'Submit',
    pleasechoose: 'please choose',
    getview: 'show dataset',
    selectLanguage: 'Choose a language'
  },
  // 角色相关
  role: {
    name: 'Role Name',
    description: 'Role Description',
    permissions: 'Role Permissions',
    edit: 'Edit Role',
    add: 'Add Role',
    roleNameError: 'Please enter role name',
    roleNameExistsError: 'Role name already exists',
    descriptionError: 'Please enter role description',
    permissionTreeError: 'Please assign permissions to the role',
    protectedRole: 'The role is reserved by the system and cannot be deleted!'
  },
  // 账号相关
  account: {
    bindSuccess: 'Binding succeeded',
    bindError: 'Binding failed. Please check whether the mailbox and verification code are entered correctly',
    alreadyBindTip: 'You have bound your mailbox. Please do not bind it again',
    code: 'Captcha',
    mail: 'E-mail',
    accountNumber: 'Account',
    edit: 'Edit Account',
    add: 'Add Account',
    roles: 'Roles',
    selectRole: 'Please select account role',
    password: 'Password',
    pleaseInputAccount: 'Please enter an account',
    noRole: 'Unassigned role',
    accountNumberError: 'Please enter the account number',
    accountNumberExistsError: 'Account already exists',
    addedSuccessfully: 'The initial password of the account is: ',
    resetPassword: 'reset password',
    resetPasswordSuccessfully: 'Password reset succeeded!',
    resetPasswordFailed: 'Password reset failed, unknown error',
    protectedAccount: 'The account number is reserved by the system and cannot be deleted!'
  },
  // 数据集相关
  dataset: {
    datasetRepeatError: 'Duplicate dataset',
    gisFailed: ', please check the error message',
    gisFailedTitle: 'Dataset visualization failed',
    errorMsgView: 'Error message content',
    showErrorInfo: 'View error messages',
    download: 'Download',
    creator: 'uploader',
    visibility: 'state',
    public: 'public',
    private: 'private',
    all: 'all',
    isPublic: 'Public or Not',
    selectFile: 'Select File',
    submit: 'Submit',
    datasetDownload: ' Download Sample',
    fileName: 'File name',
    fileSize: 'File size',
    filePath: 'Storage path',
    preprocessing: 'dataset visible check',
    processing: 'Processing',
    showFail: 'No View can be shown',
    Remainshow: 'remain to be shown',
    extractPath: 'Decompression path',
    fileUpload: 'File upload',
    pleaseInputFileName: 'Please enter a file name',
    clickUpload: 'Drag files here, or click upload',
    uploadTips: 'Note: only zip files can be uploaded, The data package shall contain data atomic files, including: xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、xxx.gridod、config.json; For different traffic prediction tasks, different atomic files may be used, and a dataset may not contain all kinds of atomic files.',
    uploadSuccess: 'File upload succeeded!',
    background: 'choose background',
    background_ing: 'Dataset-visible Processing',
    uploadError: 'Please upload the data package in ZIP format!',
    atomicError: 'Please check whether the files in the package contain only: xxx.geo、xxx.usr、xxx.rel、xxx.dyna、xxx.ext、xxx.grid、xxx.gridod、config.json',
    google: 'google map',
    origin: 'pure street',
    google_s: 'google map satellite',
    amap: 'amap-CHN',
    amap_s: 'amap-CHN-satellite',
    traffic: 'traffic map',
    transport: 'street-line-black',
    choosemap: 'choose background',
    gisSuccessfully: 'Visualization complete!',
    gisViewSuccessfully: ' Visualization complete! Please click the display button in dataset management to view the dataset!',
    trajTip: 'Due to too much trajectory data, only part of the trajectory data information is displayed here.',
    deletionFailed: 'There are experiments using this dataset. Please delete the experiment before deleting the dataset',
    canView: 'Visual inspection completed!',
    canViewSuccessfully: 'After the visualization inspection is completed, you can select the map to visualize the data set',
    atomicExplain: 'View data format description',
    atomicExplainUrl: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/atomic_files.html'
  },
  // 任务
  task: {
    interruptExp: 'Interrupt experiment',
    interruptConfirm: 'Are you sure to interrupt this experiment?',
    tips: 'Tips',
    interruptOk: 'The experiment is being interrupted Please wait patiently for about 20 seconds',
    interruptCancel: 'Interrupt canceled',
    // 评价指标mode提示信息
    stateModeTip: 'The evaluation model of this evaluation index is as follows:',
    // 任务执行参数
    task: 'task',
    model: 'model',
    expId: 'Experiment ID',
    dataset: 'dataset',
    config_file: 'config_file',
    config_file1: 'config_file',
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
    taskName: 'Experiment name',
    taskDescription: 'Experimental Description',
    dataFile: 'Dataset File',
    uploadTips: 'Please upload JSON file',
    downloadExample: 'download sample configuration',
    uploadError: 'Please upload the data package in JSON format!',
    taskCreateSuccess: 'Task created successfully!',
    taskNameError: 'Please enter experiment name',
    taskNameExistsError: 'Duplicate experiment name',
    taskCreateError: 'Task creation failed',
    OnExceedError: 'At most one file can be uploaded. Please clear the previous file before uploading',
    status: 'Experimental status',
    creator: 'creator',
    numberError: 'Please enter a value of numeric type',
    maxEpochNumberError: 'please enter an integer',
    maxEpochError: 'Please enter a number greater than 0',
    floatError: 'Please enter decimal',
    noStart: 'Not started',
    execute: 'Execute',
    executing: 'Executing',
    completed: 'Completed',
    reserved: 'Reserved',
    modifyExecuteTime: 'Modify time',
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
    clickViewCorresponding: 'There is a strict correspondence between task name, model name and dataset (click to view)',
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
    AL: 'AL',
    MRR: 'MRR',
    NDCG: 'NDCG',
    maxEpochTip: 'The larger the maximum number of training rounds is, the longer the time will be spent',
    clickUpload: 'Click upload JSON file',
    task_type: 'Experiment Type',
    modelEvaluateContrast: 'Model Comparison',
    selectTaskTip: 'Please select a experiment to compare',
    selectCompleteTip: 'Please select completed experiments',
    selectSameTask: 'Please select the same type of experiment',
    selectDifferentModelTask: 'Please select a experiment that uses a different model',
    selectRoadRepresentation: 'There is no evaluation index for this experiment type',
    clickDownload: 'Click here to download',
    clickCatConfig: 'Click here to view online',
    configview: 'Configuration Information',
    showResult: 'Show task results',
    selectSameDataset: 'Please select an experiment using the same dataset',
    otherParamTip: 'The following are non mandatory parameters',
    taskExecuteSuccessfully: 'The experiment is completed',
    taskExecuteError: 'Experiment execution error',
    downloadModel: 'Download training model'
  },

  // 新手引导 - 通用
  intro: {
    next: 'Next',
    prev: 'Back',
    done: 'Done',
    showIntro: 'Click here to view the wizard again',
    viewIntro: 'View the wizard',
    noIntro: 'There is no beginner guide content on this page'
  },

  // 新建任务引导
  addTaskIntro: {
    step01: 'Here is the new experiment interface, where you can create new training tasks',
    step02: 'experiment name is required. Please fill in a experiment name that is easy to understand',
    step03: 'Here, the task name, model name and data set have strict correspondence. Please select according to the table correspondence in the link above',
    step04: 'Just click this link',
    step05: 'The above form only provides common task parameter settings. You can set more task parameters for training as needed. You need to write a config.json file to upload.',
    step06: 'Click Confirm and the task will be created!'
  },

  // 数据集引导
  addDataIntro: {
    step01: 'Here is the data set management interface, where you can upload and display data sets',
    step02: 'Query historical datasets based on criteria',
    step03: 'Upload your dataset here. You can also choose to download and view the sample dataset',
    step04: 'The data set you uploaded appears here. After the system detects that your dataset can be displayed, you can operate datasets through buttons on the right',
    step05: 'You can display the data set here, including several statuses of dataset visible check,Processing,No View can be shown,view and remain to be shown',
    step07: 'You can select a base map here',
    step06: 'If your dataset cannot be converted into a map, we will try to display its contents in the form of charts; If your data cannot be displayed, a red letter prompt will be given in the operation column'
  },

  // 实验列表引导
  taskIndexIntroL: {
    step01: 'Here is the experiment list page, on this page you can perform tasks, view task execution logs, view task execution results, etc.',
    step02: 'You can set conditions here to query existing tasks',
    step03: 'You can check the checkbox in front of the task to compare the selected tasks',
    step04: 'In the operation column: you can edit, delete and execute tasks, and for tasks that have been executed, you can view the evaluation metrics of the model; for tasks that have been executed, you can view the task execution log'
  },

  // 账号管理引导
  accountManageIntro: {
    step01: 'Here is the account management page, where you can manage all the accounts of the platform',
    step02: 'You can set conditions here to filter accounts',
    step03: 'Click here to add an account, the system will set a default password for the new account, please modify it in time',
    step04: 'In the action column, you can edit, delete accounts, and reset passwords'
  },

  // 权限管理引导
  roleManageIntro: {
    step01: 'Here is the role management page, where you can maintain role related information',
    step02: 'You can set conditions to filter roles here',
    step03: 'Click here, you can add a new role and assign permissions to it',
    step04: 'In the Action column you can edit and delete roles'
  },

  // 首页教程相关
  dashboard: {
    title: 'Platform User Guide', // 大标题
    introduction: 'Introduction',
    // 简介内容
    // introContent: '<span>This platform provides a visual interface for the LibCity library. You can upload datasets on the platform to select model execute experiments, and you can view experiment execution logs and model evaluation indicators related information; at the same time, the platform also provides a complete authority management function .</span>',
    introContent: '<span>This platform provides a visual operation interface for the LibCity library. You can upload a dataset and select a model on the platform to create and execute experiments, and you can view the experiment execution logs and information related to model evaluation indicators. At the same time, the platform also provides a complete authority management function.Developed and maintained by the Beihang Smart City Interest Group <a target="blank" href="https://www.bigscity.com/" style="color: blue">BIGSCity</a>, LibCity is a unified, comprehensive, and extensible library, which provides researchers with a credible experimental tool and a convenient development framework in the traffic prediction field. Our library is implemented based on PyTorch and includes all the necessary steps or components related to traffic prediction into a systematic pipeline, allowing researchers to conduct comprehensive experiments. Our library will contribute to the standardization and reproducibility in the field of traffic prediction.For more information, please visit our <a target="blank" href="https://libcity.ai/" style="color: blue">HomePage</a> and <a target="blank" href="https://github.com/LibCity" style="color: blue">Code Repository</a>. </span>',
    feature: 'Feature',
    featureContent: [
      '<span>Dataset visualization: You can parse and visualize the data set uploaded by the user, and you can freely choose the map base map. The platform provides Google Maps, Google Satellite Maps, AutoNavi Maps, AutoNavi Satellite Maps, Original Street Maps, etc. Various basemaps</span>',
      '<span>Fixed-point execution of experiments: You can specify the execution time of the experiment, and the system will automatically execute the experiment at the selected moment</span>',
      '<span>Model evaluation index visualization comparison function: It can achieve multi-model and multi-index comparison under similar tasks</span>',
      '<span>Internationalization: The platform supports both Chinese and English languages</span>',
      '<span>Permissions: Account permissions can be controlled at the button level</span>'
    ],
    steps: 'Steps for usage',
    step01: 'Step 1: Upload the dataset',
    // TODO
    step01Content: "<span><p><span>Dataset files supported by the platform: can be accessed through</span><a target='_blank' href='https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ' style='color: blue'><span > Baidu network disk</span></a><span> (extraction code: 1231) or </span><a target='_blank' href='https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp =sharing' style='color: blue'><span>Google Drive </span></a><span>Download the dataset file. </span></p>You can click the dataset management menu on the left to enter the dataset management page, click File Upload, select the dataset file and click OK to upload the dataset.</span>",
    step02: 'Step 2: Create a experiment',
    step02Content: '<span>You can click new experiment in the left navigation, fill in the relevant parameters, and click OK to complete the experiment creation.',
    step03: 'Step 3: Execute the experiment',
    step03Content: '<span>Click the experiment list on the left, find the Execute button in the Action column, and click Execute to select the execution time to execute the experiment.</span>',
    step04: 'Step 4: View the running log',
    step04Content: '<span>Click the experiment list on the left, and find the View running log button in the operation column to view the experiment running log information online.</span>',
    step05: 'Step 5: Check the evaluation indicators',
    step05Content: '<span>After the experiment is executed, find the View Evaluation Indicators button in the operation column to view the evaluation indicator information online.</span>',
    // 脚注
    realtedLinks: 'Related Links',
    homepage: 'https://libcity.ai/',
    homepageWord: 'HomePage',
    document: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/#',
    documentWord: 'Document',
    paperLibrary: 'Paper Library',
    aboutUs: 'About Us'
  }
}
