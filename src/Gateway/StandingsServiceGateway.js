class StandingsServiceGateway {

  // Template code

  // Gateway exposed function
  async getStandingWithMatchesOfBoxer(param) {
    let response = await this.doCallForGetStandingWithId(param);
    let standing = this.extractStandingWithMatchesFromResponse(response);
    return standing;
  }

  // doCallFor[function name]
  async doCallForGetStandingWithId(param) {
    console.log("Real get call to AnyService with param: " + param);
    return {}; //TODO
  }

  async setupAddStandingWithMatches(obj) {
    console.log("Real setup call to AnyService with obj: " + JSON.stringify(obj));
    return null;
  }

  extractStandingWithMatchesFromResponse(response) {
    //TODO Parse response here...
    return response.standingWithMatches;
  }

}

module.exports = StandingsServiceGateway;
