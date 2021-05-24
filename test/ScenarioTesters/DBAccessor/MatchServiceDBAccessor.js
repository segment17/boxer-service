'use strict';

var mysql = require('mysql');

const connectionSetup = {
  host: process.env.MATCH_MYSQL_SERVICE_ADDR || "localhost",
  user: "root",
  password: "root",
  database: "matchservice"
};

var connection = mysql.createConnection(connectionSetup);
connection.connect(function (err) {
  console.log(err ? err : "Connected!");
});

let tableName = "matches";

function createGetQuery({ matchId, boxerId }) {
  if (!matchId && !boxerId) { return {}; }
  let query = `SELECT * FROM ${tableName} WHERE `;
  if (matchId) {
    query = `${query} id = '${matchId}'`;
  }
  if (matchId && boxerId) {
    query = `${query} AND `;
  }
  if (boxerId) {
    query = `${query}awayBoxerId = '${boxerId}' OR homeBoxerId = '${boxerId}'`;
  }
  return `${query};`;
}

async function runQuery(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(result);
    });
  });
}

async function runQueryForGetMatchesOfBoxer(boxerId) {
  const getQuery = createGetQuery({ boxerId });
  return await runQuery(getQuery);
}

async function getMatchesOfBoxer(boxerId) {
  if (!boxerId) {
    throw new InvalidArgument('boxerId cannot be empty');
  }

  const matches = await runQueryForGetMatchesOfBoxer(boxerId);
  return matches;
}

module.exports = { connection, getMatchesOfBoxer };

