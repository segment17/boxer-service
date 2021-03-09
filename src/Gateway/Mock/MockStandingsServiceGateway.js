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
      if (element.standing.boxer.id == id)
        return {
          code: 200,
          standingAndMatches: element
        }
    }
    return {
      code: 404,
      standingAndMatches: null
    }
  }

  async setupAddStandingAndMatches(obj) {
    this.standingsWithMatchesList.push(obj);
    return;
  }
}

module.exports = MockStandingsServiceGateway;
