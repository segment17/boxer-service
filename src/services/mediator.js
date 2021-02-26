let StandingsServiceGateway  = require('../gateways/standingsServiceGateway.js');
let StubStandingsServiceGateway  = require('../gateways/stubStandingsServiceGateway.js');

class Mediator {
  constructor() {
    this.standingsServiceGateway = new StandingsServiceGateway();
  }

  setStandingServiceGateway(isMock) {
    if (isMock) {
      this.standingsServiceGateway = new StubStandingsServiceGateway();
    }
  }

  getBoxerWithStandingAndMatches(id) {

    let boxer = this.boxerRepository.getBoxerWithId();
    let standingAndMatches = this.standingsServiceGateway.getStandingAndMatchesOfABoxer(boxer.id);

    return {
      boxer: boxer,
      standingAndMatches: standingAndMatches
    };
  }
}

module.exports = Mediator;

