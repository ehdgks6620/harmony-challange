var express = require("express");
const db = require("../tool/mysql");
var router = express.Router();
var multer = require("multer");
const app = require("../app");

var _storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, res, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: _storage });

router.post("/", function (req, res, next) {
  try {
    db.query(
      "select * from everyboard where sub=? and pro=? and class=?",
      [req.body.sub, req.body.pro, req.body.class],
      function (err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        res.json({ message: true, result });
      }
    );
  } catch (err) {
    res.json({ message: false });
  }
});

router.post("/write", upload.single("file"), function (req, res, next) {
  try {
    db.query(
      `insert into everyboard(title,content,created,sub,pro,class) values(?,?,Now(),'c','c','c')`,
      [req.body.title, req.body.content],
      function (err, result) {
        if (err) {
          throw err;
        }
        console.log(JSON.stringify(req.body.title));
        res.json({ message: true });
      }
    );
  } catch {
    res.json({ message: false });
  }
});

module.exports = router;
