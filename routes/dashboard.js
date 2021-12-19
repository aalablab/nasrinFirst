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
const ObjectsToCsv = require("objects-to-csv");

//Show examiner dashboard.
router.get("/", function (req, res) {
  let sessionUsr = req.session.user;
  // If the user has already logged in, then redirect to examdashboard.
  if (sessionUsr) {
    res.render("dashboard", {
      sessionUsr: req.session.user,
    });
  } else {
    res.redirect("/");
  }
});

router.post("/searchSubject", function (req, res) {
  let sessionUsr = req.session.user;
  req.session.notification = null;
  if (!sessionUsr) {
    res.redirect("/");
  }
  let examineeIDSrchSet = req.body.examineeIDSrch2,
    examineeIDSrch = examineeIDSrchSet.match(/\d+/g);
  var q =
    "SELECT v_examineeID, v_firstname, v_lastname FROM t_examinees WHERE v_examineeID IN (?) ORDER BY v_examineeID";
  connection.query(q, [examineeIDSrch], function (error, results, fields) {
    req.session.searchExaminee = results;
    if (error) {
      req.session.notification = error;
      res.render("dashboard/outputExaminee", {
        sessionUsr: req.session.user,
        notification: req.session.notification,
      });
    } else {
      if (req.session.searchExaminee.length != 0) {
        let examineeExist = req.session.searchExaminee;
        var examineeList = [];
        examineeIDSrch.sort();
        var j = 0;
        for (var i = 0; i < examineeIDSrch.length; i++) {
          if (examineeIDSrch[i] == examineeExist[j].v_examineeID) {
            examineeList.push({
              v_examineeID: examineeIDSrch[i],
              v_firstname: examineeExist[j].v_firstname,
              v_lastname: examineeExist[j].v_lastname,
              existing: "YES",
            });
            if (examineeExist.length - 1 > j) {
              j++;
            }
          } else {
            examineeList.push({
              v_examineeID: examineeIDSrch[i],
              v_firstname: "Nil",
              v_lastname: "Nil",
              existing: "NO",
            });
          }
        }

        let status = "searchExaminee2";
        res.render("dashboard/outputExaminee", {
          sessionUsr: req.session.user,
          notification: req.session.notification,
          status: status,
          examineeList: examineeList,
        });
      } else {
        req.session.notification =
          "<p><strong>CANNOT</strong> find anything. Contact CE.</p>";
        res.render("dashboard/outputExaminee", {
          sessionUsr: req.session.user,
          notification: req.session.notification,
        });
      }
    }
  });
});

router.post("/searchExaminee", function (req, res) {
  let sessionUsr = req.session.user;
  req.session.notification = null;
  if (!sessionUsr) {
    res.redirect("/");
  }
  let examineeIDSrchSet = req.body.examineeIDSrch,
    examineeIDSrch = examineeIDSrchSet.match(/\d+/g);
  var q =
    "SELECT t_examinees.v_examineeID, t_examinees.v_firstname, t_examinees.v_lastname, t_examinees.v_organization, t_scores.v_moduleID, t_scores.v_score, t_scores.v_paperID, t_scores.v_accessed FROM t_examinees INNER JOIN t_scores ON t_examinees.v_examineeID = t_scores.v_examineeID  WHERE t_scores.v_examineeID IN (?) AND t_scores.v_accessed IS NOT NULL ORDER BY t_scores.v_moduleID, t_examinees.v_examineeID";
  connection.query(q, [examineeIDSrch], function (error, results, fields) {
    req.session.searchExaminee = results;
    if (error) {
      req.session.notification = error;
      res.render("dashboard/outputExaminee", {
        sessionUsr: req.session.user,
        notification: req.session.notification,
      });
    } else {
      if (req.session.searchExaminee.length != 0) {
        let status = "searchExaminee";
        res.render("dashboard/outputExaminee", {
          sessionUsr: req.session.user,
          notification: req.session.notification,
          status: status,
          examineeList: req.session.searchExaminee,
        });
      } else {
        req.session.notification =
          "<p><strong>CANNOT</strong> find anything. Contact CE.</p>";
        res.render("dashboard/outputExaminee", {
          sessionUsr: req.session.user,
          notification: req.session.notification,
        });
      }
    }
  });
});

router.get("/logout", (req, res, next) => {
  // Check if the session is exist
  if (req.session.user) {
    // destroy the session and redirect the user to the index page.
    req.session.destroy(function () {
      res.redirect("/");
    });
  }
});

module.exports = router;
