'use strict';

var mysql = require('mysql');

//TODO: Create database and table during DevOps
/*
CREATE TABLE boxers (
  id INT NOT NULL AUTO_INCREMENT,
  fullName VARCHAR(64) NOT NULL,
  birthDate BIGINT NOT NULL,
  height INT NOT NULL,
  weight DOUBLE NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE test_boxers (
  id INT NOT NULL AUTO_INCREMENT,
  fullName VARCHAR(64) NOT NULL,
  birthDate BIGINT NOT NULL,
  height INT NOT NULL,
  weight DOUBLE NOT NULL,
  PRIMARY KEY (id)
);
*/

console.log("HERE");
const connectionSetup = {
  host: process.env.BOXER_MYSQL_SERVICE_SERVICE_HOST != undefined ? process.env.BOXER_MYSQL_SERVICE_SERVICE_HOST : "localhost",
  user: "root",
  password: "root"
};
console.log(connectionSetup);
var connection = mysql.createConnection(connectionSetup);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
    connection.query("SHOW DATABASES;", function (err, result, fields) {
      console.log(result);
      if (err)
        console.log(err);
      // connection.query("USE boxerservice;", function (err, result, fields) {
      //   if (err)
      //     console.log(err);
      // });
    });
  }
});

module.exports = { connection };
