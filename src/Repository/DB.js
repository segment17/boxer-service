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
  password: "root",
  database: "boxerservice"
};
console.log(connectionSetup);
var connection = mysql.createConnection(connectionSetup);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

module.exports = { connection };
