const StandingsServiceGateway = require('../StandingsServiceGateway');

class MockStandingsServiceGateway extends StandingsServiceGateway {
  
  constructor() {
    super();
    this.standings = []
  }

  async doCallForGetStandingWithId(id) {
    console.log("Mock get call to StandingsServiceGateway with id: " + id);
    for (let i = 0; i < this.standings.length; i++) {
      const element = this.standings[i];
      if (element.id == id)
        return {
          code: 200,
          standing: element
        }
    }
    return {
      code: 404
    }
  }

  async setupAddStanding(standing) {
    console.log("Mock setup call to MockStandingsServiceGateway with standing: " + JSON.stringify(standing));
    this.standings.push(standing);
    return null;
  }
}

module.exports = MockStandingsServiceGateway;
