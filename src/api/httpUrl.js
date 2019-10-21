import globalConfig from 'static/public/globalConfig';
const url = globalConfig.ip + globalConfig.projectName;
const fileUrl = globalConfig.fileIp;
export default {
    // 后台登录退出接口
    login: url + '/v1/sys/login', //用户登录
    checkCode: url + '/v1/sys/login/checkCode', //校验验证码是否正确
    getCaptcha: url + '/v1/sys/login/getCaptcha', //获取登录验证码
    loginOut: url + '/v1/sys/loginOut', //用户退出登录

    // 首页接口
    top: url + '/v1/sys/home/content/top', //获取内容排行
    pageView: url + '/v1/sys/home/pageView', //获取日访问量
    positionCount: url + '/v1/sys/home/positionCount', //在招职位数

    // home-content-api 新闻页接口
    engineeradd: url + '/v1/sys/content/engineer/add', //添加首页工程业绩
    engineerlist: url + '/v1/sys/content/engineer/list', //获取首页工程业绩列表
    engineerremove: url + '/v1/sys/content/engineer/remove', //删除首页工程业绩
    engineerupdate: url + '/v1/sys/content/engineer/update', //修改首页工程业绩
    headlineadd: url + '/v1/sys/content/headline/add', //添加头条新闻
    headlinelist: url + '/v1/sys/content/headline/list', //获取头条新闻列表
    headlineremove: url + '/v1/sys/content/headline/remove', //删除头条新闻
    headlineupdate: url + '/v1/sys/content/headline/update', //修改头条新闻
    moduleadd: url + '/v1/sys/content/module/add', //添加首页八大板块
    modulelist: url + '/v1/sys/content/module/list', //获取首页八大板块列表
    moduleremove: url + '/v1/sys/content/module/remove', //删除首页八大板块
    moduleupdate: url + '/v1/sys/content/module/update', //修改首页八大板块

    preview: url + '/v1/sys/content/preview', //新闻页内容预览

    // Content-api 新闻页接口
    newadd: url + '/v1/sys/content/new/add', //添加单页内容
    newlist: url + '/v1/sys/content/new/list', //单页内容列表
    newmenu: url + '/v1/sys/content/new/menu', //通过栏目获取单页内容
    newremove: url + '/v1/sys/content/new/remove', //删除单页内容
    newsearch: url + '/v1/sys/content/new/search', //搜索单页内容
    newupdate: url + '/v1/sys/content/new/update', //修改单页内容
    newsadd: url + '/v1/sys/content/news/add', //添加新闻页内容
    batchDel: url + '/v1/sys/content/news/batchDel', //批量删除新闻页内容
    newslist: url + '/v1/sys/content/news/list', //新闻页内容列表
    newsmenu: url + '/v1/sys/content/news/menu', //通过栏目获取新闻页内容
    newsremove: url + '/v1/sys/content/news/remove', //删除新闻页内容
    newssearch: url + '/v1/sys/content/news/search', //搜索新闻页内容
    newsupdate: url + '/v1/sys/content/news/update', //修改新闻页内容
    menupermission: url + '/v1/sys/menu/permission', //通过类型获取栏目权限

    // Upload-api 文件接口
    docToHtml: fileUrl + '/v1/sys/docToHtml', //word转html
    fileUpload: fileUrl + '/v1/sys/fileUpload', //文件上传

    // user-api : 用户相关接口
    disable: url + '/v1/sys/user/disable', //禁用管理员
    isExist: url + '/v1/sys/user/isExist', //查询用户名是否存在
    newUser: url + '/v1/sys/user/addUser', //添加管理员
    userPassword: url + '/v1/sys/user/password', //修改管理员密码
    userRole: url + '/v1/sys/user/role', // 通过角色id查询角色
    roleList: url + '/v1/sys/user/role/list', //查询角色列表
    userUpdate: url + '/v1/sys/user/update', //修改管理员
    userUser: url + '/v1/sys/user/user', // 查询管理员列表
    userRemove: url + '/v1/sys/user/remove', //删除管理员

    // role-api : 角色相关接口
    permission: url + '/v1/sys/permission', //查询权限列表
    addPermission: url + '/v1/sys/role/addPermission', //添加角色权限
    roleNew: url + '/v1/sys/role/new', //新增角色
    rolePage: url + '/v1/sys/role/page', //查询角色列表
    // rolePermission: url + '/v1/sys/role/permission',// 根据角色查询角色权限
    roleRemove: url + '/v1/sys/role/remove', //删除角色
    roleUpdate: url + '/v1/sys/role/update', //编辑角色
    roleisExist: url + '/v1/sys/role/isExist', //查询角色名称是否存在

    // Menu-api 栏目接口
    addMenu: url + '/v1/sys/menu/addMenu', //添加栏目
    menuList: url + '/v1/sys/menu/menuList', //查询栏目列表
    menuListByMenuId: url + '/v1/sys/menu/menuListByMenuId', //通过栏目id查询栏目列表
    menuLevel: url + '/v1/sys/menu/level', //查询上级栏目
    menuNameExist: url + '/v1/sys/menu/menuNameExist', //查询栏目是否存在
    removemenu: url + '/v1/sys/menu/remove', // 删除栏目
    templateName: url + '/v1/sys/menu/templateName', //查询栏目列表页模板
    menuUpdate: url + '/v1/sys/menu/update', //修改栏目

    // recruit-api : 招聘管理接口
    recruitAdd: url + '/v1/sys/recruit/add', //添加职位
    recruitCity: url + '/v1/sys/recruit/city', //获取省市区
    recruitList: url + '/v1/sys/recruit/list', //职位列表
    recruitPositionCount: url + '/v1/sys/recruit/positionCount', //获取在招职位数
    recruitRemove: url + '/v1/sys/recruit/remove', //删除职位
    recruitSearch: url + '/v1/sys/recruit/search', // 职位搜索
    recruitUpdate: url + '/v1/sys/recruit/update', //修改职位
    trainAdd: url + '/v1/sys/train/add', //添加培训
    trainList: url + '/v1/sys/train/list', //培训列表
    trainRemove: url + '/v1/sys/train/remove', //删除培训
    trainSearch: url + '//v1/sys/train/search', // 搜索职位培训
    trainUpdate: url + '/v1/sys/train/update', //修改培训
    menuUpdate: url + '/v1/sys/menu/update', //修改栏目
};