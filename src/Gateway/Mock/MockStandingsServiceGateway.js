const StandingsServiceGateway = require('../StandingsServiceGateway');

class MockStandingsServiceGateway extends StandingsServiceGateway {
  
  constructor() {
    super();
    this.standingsAndMatchesList = []
  }

  async doCallForGetStandingWithId(id) {
    for (let i = 0; i < this.standingsAndMatchesList.length; i++) {
      const element = this.standingsAndMatchesList[i];
      if (element.standing && element.standing.boxer && element.standing.boxer.id == id)
        return {
          code: 200,
          message: "success",
          standingAndMatches: element
        }
    }
    return {
      code: 404,
      message: "not_found",
      standingAndMatches: {
        standing: { boxer: null, winCount: 0, lossCount: 0, score: 0 },
        matches: []
      }
    }
  }

  async setupAddStandingAndMatches(obj) {
    this.standingsAndMatchesList.push(obj);
    return;
  }
}

module.exports = MockStandingsServiceGateway;
