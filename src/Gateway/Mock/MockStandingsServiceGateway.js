const StandingsServiceGateway = require('../StandingsServiceGateway');

class MockStandingsServiceGateway extends StandingsServiceGateway {
  
  constructor() {
    super();
    this.standingsWithMatchesList = []
  }

  async doCallForGetStandingWithId(id) {
    console.log("Mock get call to StandingsServiceGateway with id: " + id);
    for (let i = 0; i < this.standingsWithMatchesList.length; i++) {
      const element = this.standingsWithMatchesList[i];
      if (element.id == id)
        return {
          code: 200,
          standingWithMatches: element
        }
    }
    return {
      code: 404,
      standingWithMatches: null
    }
  }

  async setupAddStandingWithMatches(obj) {
    console.log("Mock setup call to MockStandingsServiceGateway with standing: " + JSON.stringify(obj));
    this.standingsWithMatchesList.push(obj);
    return;
  }
}

module.exports = MockStandingsServiceGateway;
