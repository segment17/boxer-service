class StandingsServiceGateway {

  // Template code

  // Gateway exposed function
  async getObject(param) {
    let response = await this.doCallForGetObject(param);
    let standing = this.extractStandingFromResponse(response);
    return standing;
  }

  // doCallFor[function name]
  async doCallForGetStandingWithId(param) {
    console.log("Real get call to AnyService with param: " + param);
    return {}; //TODO
  }

  async setupAddObject(obj) {
    console.log("Real setup call to AnyService with obj: " + JSON.stringify(obj));
    return null;
  }

  extractObjFromResponse(response) {
    //TODO Parse response here...
    return response.obj;
  }

}

module.exports = StandingsServiceGateway;
