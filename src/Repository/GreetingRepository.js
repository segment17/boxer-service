class GreetingRepository {

  async getGreetingWithId(id) {
    let queryResult = await this.runQueryForGetGreetingWithId(id);
    let greeting = this.extractGreetingFromQueryResult(queryResult);
    return greeting;
  }

  // runQueryFor[function name]
  async runQueryForGetGreetingWithId(id) {
    console.log("Real read query to Greeting DB with id: " + id);
    return {};
  }

  async setupAddGreeeting(greeting) {
    console.log("Real write query to Greeting DB with object: " + JSON.stringify(greeting));
    return null;
  }

  extractGreetingFromQueryResult(queryResult) {
    //TODO Parse response here safely...
    return queryResult[0];
  }

}

module.exports = GreetingRepository;
