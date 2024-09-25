/*******
 * @Author: caokai 2217949080@qq.com
 * @Date: 2024-09-25 15:36:37
 * @LastEditors: caokai 2217949080@qq.com
 * @LastEditTime: 2024-09-25 15:37:59
 * @FilePath: /my-express-mysql-app/router/login.js
 * @Description:登录注册路由
 * @Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const express = require("express");

const router = express.Router();
const loginHandler = require("../router_handle/login");

const expressJoi = require("@escook/express-joi");

const { login_limit } = require("../limit/login");

router.post("/register", expressJoi(login_limit), loginHandler.register);
router.post("/login", expressJoi(login_limit), loginHandler.login);

module.exports = router;
