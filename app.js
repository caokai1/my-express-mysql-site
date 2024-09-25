// @ts-nocheck
const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");
// @ts-ignore
app.use(cors());
// 当 extended 为false是，值为数组或者字符串，为true是，值可以为任意类型
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.errorCount = (err, status = 1) => {
    res.send({
      status,
      message: err.instanceof(Error) ? err.message : err
    });
  };
  next();
});
const jwtConfig = require("./jwt_config/index");
app.use(
  jwt({
    secret: jwtConfig.jwtSecretKey,
    algorithms: ["HS256"]
  }).unless({
    path: [/^\/api\//]
  })
);

const loginRouter = require("./router/login");
const Joi = require("joi");
app.use("/api", loginRouter);

app.use((req, res, next) => {
  if (err instanceof Joi.ValidationError) return res.errorCount(err);
});
// @ts-ignore
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
