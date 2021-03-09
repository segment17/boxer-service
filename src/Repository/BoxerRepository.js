class BoxerRepository {

  async getBoxerWithId(id) {
    let queryResult = await this.runQueryForGetBoxerWithId(id);
    let boxer = this.extractBoxerFromQueryResult(queryResult);
    return boxer;
  }

  // runQueryFor[function name]
  async runQueryForGetBoxerWithId(id) {
    console.log("Real read query to Boxer DB with id: " + id);
    return {};
  }

  async setupAddGreeeting(boxer) {
    return null;
  }

  extractBoxerFromQueryResult(queryResult) {
    //TODO Parse response here safely...
    return queryResult[0];
  }

}

module.exports = BoxerRepository;
