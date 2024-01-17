const mysql = require("mysql2");
require("dotenv").config();

/**
 * @description PROD
 */
const config = {
  host: "pasffy.cnciies88dj2.eu-west-3.rds.amazonaws.com",
  port: 3306,
  user: "pasffyAdmin",
  password: "Di8{q3vz3myy",
  database: "pasffy",
};

/**
 * @description LOCAL
 */
// const config = {
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "doradachik",
// };

const pool = mysql.createPool(config);

module.exports = pool;
