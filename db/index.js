const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ck19970921",
  database: "cktest"
});

module.exports = db;
