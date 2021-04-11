const { connection } = require('./DB');
const globalObjects = require('../../index');

class BoxerRepository {

  constructor() {
    this.tableName = 'boxers';
  }

  enterIntegratedTestingEnvironment() {
    this.tableName = 'test_boxers';
  }

  async getBoxerWithId(id) {
    let queryResult = await this.runQueryForGetBoxerWithId(id);
    let response = this.extractResponseFromQueryResult(queryResult, 200, "success");
    return response;
  }

  async runQueryForGetBoxerWithId(id) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${this.tableName} WHERE id = ${id};`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result);
      });
    });
  }

  async addBoxerWithGivenData(fullName, birthDate, height, weight) {
    let queryResult = await this.runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight);
    let response = this.extractResponseFromQueryResult(queryResult, 201, "created");
    return response;
  }

  async runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO ${this.tableName} (fullName, birthDate, height, weight) VALUES ('${fullName}', ${birthDate}, ${height}, ${weight});`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        connection.query(`SELECT * FROM ${this.tableName} ORDER BY id DESC LIMIT 1;`, (error, result) => {
          if (error) {
            console.log(error);
            resolve(null);
          }
          resolve(result);
        });
      });
    });
  }

  buildUpdateQuery(id, fullName, birthDate, height, weight) {
    console.log("weight");
    console.log(weight);
    let query = `UPDATE ${this.tableName} SET `;
    if (fullName != undefined) {
      query += `fullName = '${fullName}' `;
    }
    if (birthDate != undefined) {
      query += `birthDate = ${birthDate} `;
    }
    if (height != undefined) {
      query += `height = ${height} `;
    }
    if (weight != undefined) {
      query += `weight = ${weight} `;
    }
    query += `WHERE id = ${id};`;
    return query;
  }

  async editBoxerWithGivenData(id, fullName, birthDate, height, weight) {
    let queryResult = await this.runQueryForEditBoxerWithGivenData(id, fullName, birthDate, height, weight);
    let response = this.extractResponseFromQueryResult(queryResult, 201, "edited");
    return response;
  }

  async runQueryForEditBoxerWithGivenData(id, fullName, birthDate, height, weight) {
    return new Promise((resolve, reject) => {
      connection.query(this.buildUpdateQuery(id, fullName, birthDate, height, weight), (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        connection.query(`SELECT * FROM ${this.tableName} WHERE id = ${id};`, (error, result2) => {
          if (error) {
            console.log(error);
            resolve(null);
          }
          resolve(result2);
        });
      });
    });
  }

  async removeBoxerWithId(id) {
    let queryResult = await this.runQueryForRemoveBoxerWithId(id);
    let response = this.extractResponseFromQueryResult(queryResult, 201, "removed");
    return response;
  }

  async runQueryForRemoveBoxerWithId(id) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${this.tableName} WHERE id = ${id};`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        connection.query(`DELETE FROM ${this.tableName} WHERE id = ${id};`, (error, result2) => {
          if (error) {
            console.log(error);
            resolve(null);
          }
          resolve(result);
        });
      });

    });
  }


  async setupAddBoxer(boxer) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO test_boxers (id, fullName, birthDate, height, weight) VALUES (${boxer.id}, '${boxer.fullName}', ${boxer.birthDate}, ${boxer.height}, ${boxer.weight});`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result);
      });
    });
  }

  async getLatestId() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT LAST_INSERT_ID();`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result[0]['LAST_INSERT_ID()']);
      });
    });
  }

  async setupAddLatest(boxer) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO test_boxers (fullName, birthDate, height, weight) VALUES ('${boxer.fullName}', ${boxer.birthDate}, ${boxer.height}, ${boxer.weight});`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result);
      });
    });
  }

  //During testing only
  async cleanUp() {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM test_boxers;`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result);
      });
    });
  }

  extractResponseFromQueryResult(queryResult, successCode, successMessage) {
    if (queryResult.length == 0) {
      return {
        code: 404,
        message: "not_found",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      };
    }
    return {
      code: successCode,
      message: successMessage,
      boxer: queryResult[0]
    };
  }
}

module.exports = BoxerRepository;
