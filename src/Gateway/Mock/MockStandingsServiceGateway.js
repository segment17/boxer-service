const StandingsServiceGateway = require('../StandingsServiceGateway');

class MockStandingsServiceGateway extends StandingsServiceGateway {
  
  constructor() {
    super();
    this.standingsAndMatchesList = []
  }

  async doCallForGetStandingWithId(id) {
    console.log("Mock get call to StandingsServiceGateway with id: " + id);
    for (let i = 0; i < this.standingsAndMatchesList.length; i++) {
      const element = this.standingsAndMatchesList[i];
      console.log(element);
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
    console.log(obj);
    this.standingsAndMatchesList.push(obj);
    return;
  }
}

module.exports = MockStandingsServiceGateway;
