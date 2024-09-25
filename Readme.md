- 系统的技术栈

vue3+TS+Axios+Pinia+sass+mitt+Express

前端使用框架及组件 Vue3+TS+Axios+Pinia+Sass+mixin+mitt（全局事件通信，bus）[elementPlus+echarts+wangEditor（富文本）等](https://www.notion.so/elementPlus-echarts-wangEditor-e68669902d3240beb1af7160a7268ee3?pvs=21)

后端使用框架及组件 Express+Mysql+cors+mullter（处理文件）[body-parser（处理表单）等](https://www.notion.so/body-parser-8a1d4e9c80d7436388e65168cdf5ac45?pvs=21)

- 系统主要模块
  - 系统登录注册模块
    - 登录注册模块中，前端通过 ts 限制数据类型，后端通过 joi 对前端数据进行限制
  - 系统首页模块
    - 首页使用了轮播图，layout 布局，表格，dialog 弹窗，根据用户的部门获取部门信息
  - 系统概览模块
    - 展示用户个人信息，echarts 组件可视化的数据展示，快捷点击入口
  - 用户管理模块
    - 分了产品管理员模块，用户管理元模块，消息管理元模块，用户模块
  - 产品管理模块
  - 消息管理模块
  - 文件管理模块
  - 操作于登录日志
  - 设置模块
