var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "000325",
  database: "every",
});

db.connect();

module.exports = db;
