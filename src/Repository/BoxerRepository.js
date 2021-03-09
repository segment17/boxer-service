class BoxerRepository {

  async getBoxerWithId(id) {
    let queryResult = await this.runQueryForGetBoxerWithId(id);
    let boxer = this.extractBoxerFromQueryResult(queryResult);
    return boxer;
  }

  async addBoxerWithGivenData(fullName, birthDate, height, weight) {
    // Mysql insert returns the lastest id
    let queryResult = await this.runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight);
    let boxer = await this.getBoxerWithId(queryResult);
    return boxer;
  }

  async runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight) {
    console.log("Real write query to Boxer DB with: " + fullName + birthDate + height + weight);
    return {};
  }

  // runQueryFor[function name]
  async runQueryForGetBoxerWithId(id) {
    console.log("Real read query to Boxer DB with id: " + id);
    return {};
  }

  async setupAddGreeeting(boxer) {
    return null;
  }

  async setupAddLatest(boxer) {
    console.log("Real write query for mock data to Boxer DB with id: " + id);
    return;
  }


  extractBoxerFromQueryResult(queryResult) {
    //TODO Parse response here safely...
    return queryResult[0];
  }

}

module.exports = BoxerRepository;
