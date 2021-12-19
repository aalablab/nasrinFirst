const express = require("express");
const router = express.Router();
const session = require("express-session");
const macaddress = require("macaddress"); //to get macaddress
const bodyParser = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});
connection.on("error", function (err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR'
});

router.get("/", (req, res) => {
  let sessionUsr = req.session.user;
  // If the user has already logged in, then redirect to dashboard.
  if (sessionUsr) {
    res.redirect("/dashboard");
  } else {
    res.render("index", {
      loginOK: req.session.loginOK,
      errors: req.session.errors,
    });
  }
});

router.post("/", function (req, res) {
  macaddress.all(function (err, all) {
    req.session.pcID = all;
  });

  req.session.userID = req.body.instructorID;
  req.session.userpw = req.body.pword;

  var q = "SELECT * FROM t_instructors WHERE v_instructorID = ?";
  connection.query(q, req.session.userID, function (error, results, fields) {
    if (error) throw error;
    if (results.length == 0) {
      req.session.errors = "Cannot find your profile. Contact Nasrin.";
      req.session.loginOK = false;
      res.redirect("/");
    } else {
      //console.log(results);
      if (req.session.userpw == results[0].v_password) {
        req.session.user = results;
        req.session.user[0].name =
          results[0].v_fname + " " + results[0].v_lname;
        req.session.loginOK = true;
        res.redirect("/dashboard"); //render will open a new page.
      } else {
        req.session.errors = "Wrong password. Try again or contact CE.";
        req.session.loginOK = false;
        res.redirect("/");
      }
    }
  });
});

module.exports = router;
