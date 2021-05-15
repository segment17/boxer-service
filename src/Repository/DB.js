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
CREATE TABLE boxers (
  id INT NOT NULL AUTO_INCREMENT,
  fullName VARCHAR(64) NOT NULL,
  birthDate BIGINT NOT NULL,
  height INT NOT NULL,
  weight DOUBLE NOT NULL,
  PRIMARY KEY (id)
);
*/

const connectionSetup = {
  host: process.env.BOXER_MYSQL_SERVICE_SERVICE_HOST != undefined ? process.env.BOXER_MYSQL_SERVICE_SERVICE_HOST : "localhost",
  user: "root",
  password: "root",
  database: "boxerservice"
};
var connection = mysql.createConnection(connectionSetup);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

module.exports = { connection };
