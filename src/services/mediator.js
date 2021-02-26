const StandingsServiceGateway = require('../gateways/standingsServiceGateway.js');
const StubStandingsServiceGateway = require('../gateways/stubStandingsServiceGateway.js');
const BoxerRepository = require('../repositories/boxerRepository.js');
const StubBoxerRepository = require('../repositories/stubBoxerRepository.js');

class Mediator {
  constructor() {
    this.standingsServiceGateway = new StandingsServiceGateway();
    this.boxerRepository = new BoxerRepository();
  }

  setStandingServiceGateway(isMock) {
    if (isMock) {
      this.standingsServiceGateway = new StubStandingsServiceGateway();
    }
  }

  setBoxerRepository(isMock) {
    if (isMock) {
      this.boxerRepository = new StubBoxerRepository();
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

