const db = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../jwt_config/index");

exports.register = (req, res) => {
  const regInfo = Object.assign({}, req.body);
  console.log("====================================");
  console.log(regInfo);
  console.log("====================================");
  if (!regInfo.account || !regInfo.password) {
    return res.send({
      status: 1,
      message: "账号和密码不能为空"
    });
  }

  const sql = `select * from users where account = ?`;
  db.query(sql, regInfo.account, (err, results) => {
    console.log("====================================");
    console.log(results);
    console.log("====================================");

    // @ts-ignore
    if (results.length > 0) {
      return res.send({
        status: 1,
        message: "账号已存在"
      });
    }
    regInfo.password = bcrypt.hashSync(regInfo.password, 10);
    const insertUserSql = "insert into users set ?";
    const identity = "用户";
    const create_time = new Date();
    db.query(
      insertUserSql,
      {
        account: regInfo.account,
        password: regInfo.password,
        identity,
        create_time,
        status: "0"
      },
      (err, results) => {
        console.log("====================================");
        console.log(results);
        console.log("====================================");
        // @ts-ignore
        if (results.affectedRows !== 1) {
          return res.send({
            status: 1,
            message: "注册失败"
          });
        }
        res.send({
          status: 1,
          message: "注册成功"
        });
      }
    );
  });
};
exports.login = (req, res) => {
  const loginInfo = req.body;
  const sql = `select * from user where account = ?`;

  db.query(sql, loginInfo.account, (err, results) => {
    if (err) return res.errorCount(err);
    if (results.length !== 1) return res.errorCount("登录失败");
    const compareResult = bcrypt.compareSync(
      loginInfo.password,
      results[0].password
    );
    if (!compareResult) {
      return res.errorCount("登录失败");
    }
    if (results[0].status == 1) {
      return res.errorCount("您的账号已被��结");
    }
    const user = {
      ...results[0],
      password: "",
      imageUrl: "",
      update_time: "",
      create_time: ""
    };
    // @ts-ignore
    const tokenStr = jwt.sign(user, jwtConfig.jwtSecretKey, {
      expireIn: "7h"
    });
    res.send({
      status: 0,
      message: "登录成功",
      token: "Bearer" + tokenStr
    });
  });
};
