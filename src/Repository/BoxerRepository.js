class BoxerRepository {

  constructor() {
    this.tableName = 'boxers';
  }

  enterIntegratedTestingEnvironment() {
    this.tableName = 'test_boxers';
  }

  async getBoxerWithId(id) {
    let queryResult = await this.runQueryForGetBoxerWithId(id);
    let response = this.extractResponseFromQueryResult(queryResult, "success");
    return response;
  }

  async runQueryForGetBoxerWithId(id) {
    console.log("Real read query to Boxer DB with id: " + id);
    return {};
  }

  async addBoxerWithGivenData(fullName, birthDate, height, weight) {
    let queryResult = await this.runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight);
    let response = this.extractResponseFromQueryResult(queryResult, "created");
    return response;
  }

  async runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight) {
    console.log("Real write query to Boxer DB with: " + fullName + birthDate + height + weight);
    return {};
  }

  async editBoxerWithGivenData(id, fullName, birthDate, height, weight) {
    let queryResult = await this.runQueryForEditBoxerWithGivenData(id, fullName, birthDate, height, weight);
    let response = this.extractResponseFromQueryResult(queryResult, "edited");
    return response;
  }

  async runQueryForEditBoxerWithGivenData(id, fullName, birthDate, height, weight) {
    console.log("Real write query to Boxer DB with: " + id + fullName + birthDate + height + weight);
    return {};
  }

  async removeBoxerWithId(id) {
    let queryResult = await this.runQueryForRemoveBoxerWithId(id);
    let response = this.extractResponseFromQueryResult(queryResult, "removed");
    return response;
  }

  async runQueryForRemoveBoxerWithId(id) {
    console.log("Real remove query to Boxer DB with id: " + id);
    return {};
  }

  async setupAddGreeeting(boxer) {
    return null;
  }

  async setupAddLatest(boxer) {
    console.log("Real write query for mock data to Boxer DB with id: " + id);
    return;
  }

  //During testing only
  async cleanUp() {
    // return new Promise((resolve, reject) => {
    //   connection.query(`DELETE FROM test_boxers;`, (error, result) => {
    //     if (error) {
    //       console.log(error);
    //       resolve(null);
    //     }
    //     resolve(result);
    //   });
    // });
  }

  extractResponseFromQueryResult(queryResult, successMessage) {
    if (queryResult.length == 0) {
      return {
        code: 404,
        message: "not_found",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      };
    }
    return {
      code: 201,
      message: successMessage,
      boxer: queryResult[0]
    };
  }
}

module.exports = BoxerRepository;
